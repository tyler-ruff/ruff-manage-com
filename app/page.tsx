import Hero from '@/components/hero';
import { IActionButton } from '@/components/hero/data';

export default function Home() {
  return (
    <div>
      <Hero
        title="Welcome to RTM Transit"
        body="Based in the heart of Ocean City, New Jersey, RTM Transportation LLC is your trusted partner in cargo distribution and shipping."
        action={{
          label: "Learn More",
          url: "/about"
        } as IActionButton}
      />
    </div>
  )
}
