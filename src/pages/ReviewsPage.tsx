import { ReviewsGrid } from '../components/sections/ReviewsGrid';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export function ReviewsPage() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeader title="Отзывы учеников" subtitle="Что говорят о занятиях" />
        <ReviewsGrid />
      </Container>
    </section>
  );
}
