import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logos/cadly_logo.avif"
                alt="Cadly Labs"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-heading text-xl font-bold text-white">
                Cadly Labs
              </span>
            </Link>
            <p className="text-center text-sm text-gray-400 md:text-left">
              Automatización inteligente para empresas que quieren crecer.
            </p>
            <a
              href="mailto:info@cadlylabs.com"
              className="text-sm text-brand-500 hover:text-brand-400"
            >
              info@cadlylabs.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              Agendar consultoría gratuita
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <p className="text-center text-xs text-gray-500 md:text-right">
              © {new Date().getFullYear()} Cadly Labs. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
