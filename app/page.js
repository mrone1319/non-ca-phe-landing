import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Culture from '@/components/Culture';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Culture />
      <Visit />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
