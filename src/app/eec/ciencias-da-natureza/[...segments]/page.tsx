import { notFound } from "next/navigation";
import Breadcrumb from "@/components/eec/Breadcrumb";
import CategoryCard from "@/components/eec/CategoryCard";
import MaterialCard from "@/components/eec/MaterialCard";
import { cienciasNaturezaCategories, type EecLibraryCategory, type EecSubcategory } from "@/data/eec";

function getCategory(slug: string) { return cienciasNaturezaCategories.find((category) => category.slug === slug); }
function getSubcategory(category: EecLibraryCategory, slug: string) { return category.subcategorias?.find((subcategory) => subcategory.slug === slug); }
function getYear(subcategory: EecSubcategory, slug: string) { return subcategory.anos?.find((year) => year.slug === slug); }
function basePath(category: EecLibraryCategory) { return `/eec/ciencias-da-natureza/${category.slug}`; }

export function generateStaticParams() {
  return cienciasNaturezaCategories.flatMap((category) => [
    { segments: [category.slug] },
    ...(category.subcategorias ?? []).flatMap((subcategory) => [
      { segments: [category.slug, subcategory.slug] },
      ...(subcategory.anos ?? []).map((year) => ({ segments: [category.slug, subcategory.slug, year.slug] })),
    ]),
  ]);
}

export default async function CienciasDaNaturezaLibraryPage({ params }: { params: Promise<{ segments: string[] }> }) {
  const segments = (await params).segments;
  if (segments.length < 1 || segments.length > 3) notFound();
  const category = getCategory(segments[0]);
  if (!category) notFound();
  const subcategory = segments[1] ? getSubcategory(category, segments[1]) : undefined;
  if (segments[1] && !subcategory) notFound();
  const year = subcategory && segments[2] ? getYear(subcategory, segments[2]) : undefined;
  if (segments[2] && !year) notFound();

  const breadcrumb = [
    { label: "EEC", href: "/eec" },
    { label: "Ciências da Natureza", href: "/eec/ciencias-da-natureza" },
    { label: category.titulo, href: subcategory ? basePath(category) : undefined },
    ...(subcategory ? [{ label: subcategory.titulo, href: year ? `${basePath(category)}/${subcategory.slug}` : undefined }] : []),
    ...(year ? [{ label: year.titulo }] : []),
  ];

  const title = year?.titulo ?? subcategory?.titulo ?? category.titulo;
  const description = year ? `Materiais cadastrados para ${year.titulo}.` : subcategory?.descricao ?? category.descricao;
  const contentCount = year?.materiais.length ?? subcategory?.anos?.length ?? subcategory?.materiais?.length ?? category.subcategorias?.length ?? category.materiais?.length ?? 0;

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb items={breadcrumb} />
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-800">Ciências da Natureza e suas Tecnologias</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
        </header>
        {year ? (
          <section className="mt-10 grid gap-4 md:grid-cols-2" aria-label="Materiais">
            {year.materiais.map((material) => <MaterialCard key={material.id} material={material} />)}
          </section>
        ) : subcategory ? (
          <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Navegação de materiais">
            {subcategory.anos?.map((item) => <CategoryCard key={item.slug} category={item} href={`${basePath(category)}/${subcategory.slug}/${item.slug}`} />)}
            {subcategory.materiais?.map((material) => <MaterialCard key={material.id} material={material} />)}
          </section>
        ) : (
          <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Navegação de materiais">
            {category.subcategorias?.map((item) => <CategoryCard key={item.slug} category={item} href={`${basePath(category)}/${item.slug}`} />)}
            {category.materiais?.map((material) => <MaterialCard key={material.id} material={material} />)}
          </section>
        )}
        {contentCount === 0 && <p className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center text-slate-600">Nenhum conteúdo cadastrado nesta categoria.</p>}
      </div>
    </main>
  );
}
