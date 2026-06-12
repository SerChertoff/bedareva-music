import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export function ServicesPage() {
  return (
    <section className="bg-surface py-12 sm:py-16 md:py-20">
      <Container>
        <SectionHeader
          as="h1"
          title="Что я преподаю"
          subtitle="Индивидуальные занятия по разным направлениям музыки"
        />
        <ServicesGrid />
      </Container>
    </section>
  );
}
