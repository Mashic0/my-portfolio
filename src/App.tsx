import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GitPullRequestArrow,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Recycle,
  Smartphone,
} from "lucide-react";
import Navbar from "./components/Navbar";
import portfolio from "./data/portfolio.json";

const icons = {
  recycle: Recycle,
  heartPulse: HeartPulse,
  briefcase: BriefcaseBusiness,
  smartphone: Smartphone,
  graduationCap: GraduationCap,
};

export default function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background-950 text-text-100">
      <Navbar />

      <main className="pt-24">
        {/* Inicio */}
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.35fr_0.65fr]"
        >
          <div>
            <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">
              {portfolio.home.eyebrow}
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {portfolio.home.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-text-300">
              {portfolio.home.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-3 font-semibold text-white transition hover:bg-primary-400"
              >
                {portfolio.home.primaryAction}
                <ArrowDown size={18} />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-lg border border-border-700 px-5 py-3 font-semibold text-text-100 transition hover:border-primary-400 hover:text-primary-400"
              >
                {portfolio.home.secondaryAction}
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {portfolio.personal.location}
              </span>
              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-primary-400"
              >
                <GitPullRequestArrow size={16} />
                GitHub
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border-700 bg-background-900 shadow-2xl">
              {portfolio.personal.photo ? (
                <img
                  src={`${import.meta.env.BASE_URL}${portfolio.personal.photo}`}
                  alt={portfolio.personal.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-text-500">
                  <div className="rounded-full border border-dashed border-border-600 p-7">
                    <Code2 size={48} />
                  </div>
                  <span className="text-sm">Tu fotografía aquí</span>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
                <p className="font-semibold">{portfolio.personal.name}</p>
                <p className="mt-1 text-sm text-text-300">
                  {portfolio.personal.role}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section
          id="about-me"
          className="scroll-mt-24 border-t border-border-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary-400">
                  01 / Perfil
                </p>
                <h2 className="mt-3 text-4xl font-bold">
                  {portfolio.about.title}
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-text-300">
                {portfolio.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="grid gap-3 pt-4 sm:grid-cols-2">
                  {portfolio.about.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-xl border border-border-800 bg-background-900/60 p-4 text-sm font-medium text-text-200"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Línea de tiempo */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-border-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="mb-16">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary-400">
                02 / Trayectoria
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                Proyectos & experiencia
              </h2>
              <p className="mt-4 max-w-2xl text-text-400">
                Un recorrido por los proyectos académicos, mi experiencia
                profesional y la culminación de mi formación.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-4.75 top-0 w-px bg-border-700 md:left-1/2" />

              <div className="space-y-12">
                {portfolio.timeline.map((item, index) => {
                  const Icon = icons[item.icon as keyof typeof icons];
                  const isRight = index % 2 !== 0;

                  return (
                    <article
                      key={`${item.title}-${item.date}`}
                      className={`relative grid gap-8 md:grid-cols-2 ${
                        isRight ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div
                        className={`hidden md:block ${isRight ? "text-left" : "text-right"}`}
                      >
                        <p className="font-mono text-sm text-primary-400">
                          {item.date}
                        </p>
                      </div>

                      <div
                        className={`ml-12 rounded-2xl border border-border-800 bg-background-900/70 p-6 transition hover:-translate-y-1 hover:border-primary-500/50 md:ml-0 ${
                          isRight ? "md:col-start-2" : "md:col-start-1"
                        }`}
                      >
                        <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/40 bg-background-950 text-primary-400 md:left-1/2 md:-translate-x-1/2">
                          <Icon size={18} />
                        </div>

                        <div className="md:hidden">
                          <p className="font-mono text-xs text-primary-400">
                            {item.date}
                          </p>
                        </div>

                        <div className="mt-3 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-text-500">
                              {item.type === "experience"
                                ? "Experiencia"
                                : item.type === "education"
                                  ? "Educación"
                                  : "Proyecto"}
                            </p>
                            <h3 className="mt-1 text-2xl font-bold">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-primary-300">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 leading-7 text-text-300">
                          {item.description}
                        </p>

                        <p className="mt-4 text-sm text-text-400">
                          <span className="font-semibold text-text-200">
                            Rol:
                          </span>{" "}
                          {item.role}
                        </p>

                        {item.technologies.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-md bg-primary-500/10 px-2.5 py-1 text-xs font-medium text-primary-300"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-border-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-24">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary-400">
              03 / Stack
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              {portfolio.skills.title}
            </h2>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.skills.categories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-border-800 bg-background-900/70 p-6"
                >
                  <h3 className="font-semibold text-text-100">
                    {category.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border-700 px-3 py-2 text-sm text-text-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-border-800"
        >
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="rounded-3xl border border-border-800 bg-background-900 p-8 sm:p-12">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary-400">
                04 / Contacto
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                {portfolio.contact.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-text-300">
                {portfolio.contact.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${portfolio.personal.email}`}
                  className="group rounded-2xl border border-border-700 p-5 transition hover:border-primary-400"
                >
                  <Mail className="text-primary-400" size={22} />
                  <p className="mt-4 text-sm text-text-500">
                    {portfolio.contact.emailLabel}
                  </p>
                  <p className="mt-1 break-all font-medium group-hover:text-primary-300">
                    {portfolio.personal.email}
                  </p>
                </a>

                <a
                  href={portfolio.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-border-700 p-5 transition hover:border-primary-400"
                >
                  <GitPullRequestArrow className="text-primary-400" size={22} />
                  <p className="mt-4 text-sm text-text-500">
                    {portfolio.contact.githubLabel}
                  </p>
                  <p className="mt-1 font-medium group-hover:text-primary-300">
                    github.com/Mashic0
                  </p>
                </a>

                {portfolio.personal.linkedin && (
                  <a
                    href={portfolio.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-border-700 p-5 transition hover:border-primary-400 sm:col-span-2"
                  >
                    <ExternalLink className="text-primary-400" size={22} />
                    <p className="mt-4 text-sm text-text-500">
                      {portfolio.contact.linkedinLabel}
                    </p>
                    <p className="mt-1 font-medium group-hover:text-primary-300">
                      LinkedIn
                    </p>
                  </a>
                )}
              </div>

              <div className="mt-8 border-t border-border-800 pt-6 text-sm text-text-500">
                {portfolio.contact.availability}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-800 py-8 text-center text-sm text-text-500">
        {portfolio.footer}
      </footer>
    </div>
  );
}
