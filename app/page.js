import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import FounderStory from '@/components/FounderStory';
import Menu from '@/components/Menu';
import Culture from '@/components/Culture';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getMenuItems, getSocialPosts, getBusinessHours } from '@/lib/sanity-queries';

// Re-fetch from Sanity in the background at most once a minute, so edits
// made in /studio go live without a manual redeploy.
export const revalidate = 60;

export default async function Home() {
  const [menuItems, socialPosts, businessHours] = await Promise.all([
    getMenuItems(),
    getSocialPosts(),
    getBusinessHours(),
  ]);

  return (
    <>
      <Nav />
      <Hero />
      <Story />
      <FounderStory />
      <Menu items={menuItems} />
      <Culture socialPosts={socialPosts} />
      <Visit businessHours={businessHours} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
