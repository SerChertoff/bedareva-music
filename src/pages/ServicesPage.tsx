import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export function ServicesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Что я преподаю"
          subtitle="Индивидуальные занятия по разным направлениям музыки"
        />
        <ServicesGrid />
      </Container>
    </section>
  );
}
