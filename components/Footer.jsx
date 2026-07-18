import { T } from '@/data/translations';

export default function Footer() {
  return (
    <footer className="px-6 py-14 text-center font-body text-[13px] leading-7 text-ink/70">
      {T.footer.text.en}
    </footer>
  );
}
