import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Navegação estrutural" className="mb-8 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true" className="text-slate-400">/</span>}
            {item.href ? (
              <Link href={item.href} className="font-medium text-blue-800 underline decoration-blue-200 underline-offset-2 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-blue-700">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-slate-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
