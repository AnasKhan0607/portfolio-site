import IncomeQuiz from "./IncomeQuiz";
import {
  contact,
  deen,
  education,
  family,
  lookingFor,
  personal,
  profile,
  quickFacts,
  weddingNote,
  type Fact,
} from "./data";

function Rule() {
  return <div className="rishta-rule mx-auto my-14 w-full max-w-xs" />;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-2xl px-6">
      <h2 className="font-serif text-sm uppercase tracking-[0.22em] text-[var(--gold)]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function FactList({ items }: { items: (Fact | null)[] }) {
  const present = items.filter((item): item is Fact => item !== null);

  return (
    <dl className="divide-y divide-[var(--emerald)]/10">
      {present.map((item) => (
        <div
          key={item.label}
          className="grid gap-1 py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-6"
        >
          <dt className="text-sm text-[var(--ink-muted)]">{item.label}</dt>
          <dd className="text-[0.975rem] leading-relaxed text-[var(--ink)]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Portrait() {
  if (profile.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={profile.photo}
        alt={profile.name}
        className="h-36 w-36 rounded-full object-cover shadow-[0_0_0_1px_rgba(169,134,80,0.45),0_0_0_9px_var(--paper),0_18px_40px_-18px_rgba(30,70,54,0.45)]"
      />
    );
  }

  return (
    <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[var(--paper)] shadow-[0_0_0_1px_rgba(169,134,80,0.45),0_0_0_9px_var(--paper),0_18px_40px_-18px_rgba(30,70,54,0.45)]">
      <span className="font-serif text-5xl text-[var(--emerald)]">
        {profile.name.charAt(0)}
      </span>
    </div>
  );
}

export default function RishtaPage() {
  const whatsappHref = `https://wa.me/${contact.phoneE164}?text=${encodeURIComponent(
    contact.whatsappMessage,
  )}`;

  return (
    <main className="min-h-screen bg-[var(--ivory)] pb-24">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="relative overflow-hidden px-6 pt-20 pb-16 text-center">
        <div className="rishta-pattern pointer-events-none absolute inset-0 opacity-[0.045]" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--ivory)]"
          aria-hidden
        />

        <div className="relative">
          <p
            lang="ar"
            dir="rtl"
            className="font-arabic text-2xl leading-loose text-[var(--emerald)]/80 sm:text-3xl"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <div className="mt-10 flex justify-center">
            <Portrait />
          </div>

          <h1 className="mt-8 font-serif text-5xl font-light tracking-tight text-[var(--emerald)] sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
            {profile.tagline}
          </p>

          <ul className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {quickFacts.map((fact) => (
              <li key={fact.label} className="text-center">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--gold)]">
                  {fact.label}
                </p>
                <p className="mt-1.5 font-serif text-xl text-[var(--emerald)]">
                  {fact.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <Rule />

      {/* ── About ────────────────────────────────────────────── */}
      <Section title="About me">
        <div className="space-y-4">
          {profile.about.map((paragraph, i) => (
            <p
              key={i}
              className="text-[1.05rem] leading-[1.85] text-[var(--ink)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Rule />

      {/* ── Personal ─────────────────────────────────────────── */}
      <Section title="Details">
        <FactList items={personal} />
      </Section>

      <Rule />

      {/* ── Deen ─────────────────────────────────────────────── */}
      <Section title="Deen">
        <FactList
          items={[
            { label: "Sect", value: deen.sect },
            deen.practice ? { label: "Practice", value: deen.practice } : null,
            { label: "Household", value: deen.family },
            deen.looking ? { label: "Together", value: deen.looking } : null,
          ]}
        />
      </Section>

      <Rule />

      {/* ── Family ───────────────────────────────────────────── */}
      <Section title="Family">
        <FactList items={family} />
      </Section>

      <Rule />

      {/* ── Education & career ───────────────────────────────── */}
      <Section title="Education & career">
        <FactList items={education} />
        <div className="rishta-no-print">
          <IncomeQuiz />
        </div>
      </Section>

      <Rule />

      {/* ── Looking for ──────────────────────────────────────── */}
      <Section title="Looking for">
        <FactList items={lookingFor} />
        {weddingNote && (
          <p className="mt-8 border-l-2 border-[var(--gold)]/50 pl-5 font-serif text-lg leading-relaxed text-[var(--emerald)]">
            {weddingNote}
          </p>
        )}
      </Section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      {profile.gallery.length > 0 && (
        <>
          <Rule />
          <Section title="Photos">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {profile.gallery.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="aspect-[4/5] w-full rounded-lg object-cover shadow-[0_0_0_1px_rgba(169,134,80,0.25)]"
                />
              ))}
            </div>
          </Section>
        </>
      )}

      <Rule />

      {/* ── Contact ──────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-2xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--emerald)] px-8 py-12 text-center">
          <div className="rishta-pattern pointer-events-none absolute inset-0 opacity-[0.07] invert" />

          <div className="relative">
            <h2 className="font-serif text-sm uppercase tracking-[0.22em] text-[var(--gold)]">
              Getting in touch
            </h2>
            <p className="mx-auto mt-5 max-w-sm leading-relaxed text-[var(--ivory)]/85">
              {contact.handledBy}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--ivory)] px-7 py-3.5 font-medium text-[var(--emerald)] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message {contact.name} on WhatsApp
              </a>

              <a
                href={`tel:+${contact.phoneE164}`}
                className="text-[var(--ivory)]/70 underline-offset-4 transition hover:text-[var(--ivory)] hover:underline"
              >
                {contact.phoneDisplay}
              </a>

              {contact.hours && (
                <p className="text-sm text-[var(--ivory)]/55">{contact.hours}</p>
              )}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center font-serif text-lg text-[var(--emerald)]/70">
          Jazakum Allahu khayran for your time.
        </p>
      </section>
    </main>
  );
}
