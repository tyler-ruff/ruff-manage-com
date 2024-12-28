import Hero from '@/components/hero';
import { IActionButton } from '@/components/hero/data';
import { config } from '@/config/app';

export default function Home() {
  return (
    <div>
      <Hero
        title="Ruff Management"
        body="At Ruff Management Inc., we specialize in turning complexity into clarity. "
        action={{
          label: "Learn More",
          url: "/about"
        } as IActionButton}
      />
    </div>
  )
}
