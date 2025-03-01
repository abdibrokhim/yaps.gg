import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/layout";
import { ThemeSwitcher} from '@/components/theme-switcher';

export default function Home() {
  const stuff = [
    {
      title: 'not link',
      description: 'blazingly fast url shortener ever',
      href: 'https://notl.ink',
    },
    {
      title: 'abee',
      description: 'chief cookin\' officer on earth',
      href: 'https://imcook.in/',
    },
    {
      title: 'open community',
      description: 'chill community who ships things fast',
      href: 'https://imcook.in/OpenCommunity',
    },
    {
      title: 'tutorials',
      description: 'the best tutorials on the internet',
      href: 'https://github.com/abdibrokhim/wrapped24?tab=readme-ov-file#courses--tutorials',
    }
  ];
  
  return (
    <Layout>
      <Analytics />
      <div className="py-8 max-w-xl w-full px-4 md:px-0">
        <ThemeSwitcher />
        <h1 className="text-[24px] text-center mt-4">try dark mode</h1>
        <div className="flex flex-col gap-8 w-full max-w-xl mt-8">
          {stuff.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 items-center border border-[var(--gray-600)] p-3 rounded-lg hover:bg-[var(--secondary-darkest)] transition-all duration-200">
              <h2 className="text-[18px] text-[var(--text-light-default)]">{item.title}</h2>
              <p className="text-[14px] text-[var(--text-light-secondary)]">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
