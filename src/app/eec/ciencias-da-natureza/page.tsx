import Breadcrumb from "@/components/eec/Breadcrumb";
import CategoryCard from "@/components/eec/CategoryCard";
import MaterialSearch from "@/components/eec/MaterialSearch";
import { cienciasNaturezaCategories, cienciasNaturezaMaterials } from "@/data/eec";

export default function CienciasDaNaturezaPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb items={[{ label: "EEC", href: "/eec" }, { label: "Ciências da Natureza" }]} />
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-800">Equipe de Especialistas em Currículo</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Ciências da Natureza e suas Tecnologias</h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">Materiais pedagógicos, formações, documentos de apoio e recursos para as escolas da URE Ribeirão Preto.</p>
        </header>
        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Categorias de materiais">
          {cienciasNaturezaCategories.map((category) => <CategoryCard key={category.slug} category={category} href={`/eec/ciencias-da-natureza/${category.slug}`} />)}
        </section>
        <MaterialSearch materials={cienciasNaturezaMaterials} />
      </div>
    </main>
  );
}
