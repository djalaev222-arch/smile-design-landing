import Hero from "@/components/hero/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* TODO: следующие секции лендинга (услуги, врачи, отзывы, карта) —
          оборачивать новые блоки в <ScrollReveal> для единообразных
          scroll-triggered анимаций появления. */}
      <ScrollReveal as="section" className="flex min-h-[60vh] items-center justify-center bg-surface-alt px-6 text-center text-ink-faint">
        <p className="font-body text-sm">Следующие секции лендинга — в разработке</p>
      </ScrollReveal>
    </main>
  );
}
