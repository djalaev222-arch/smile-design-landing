import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* TODO: следующие секции лендинга (услуги, врачи, отзывы, карта) */}
      <section className="flex min-h-[60vh] items-center justify-center bg-surface-alt px-6 text-center text-ink-faint">
        <p className="font-body text-sm">Следующие секции лендинга — в разработке</p>
      </section>
    </main>
  );
}
