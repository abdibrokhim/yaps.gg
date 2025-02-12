import React from 'react';

export default function Footer() {
  const stuff = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdibrokhim/',
    },
    {
      title: 'Github',
      href: 'https://github.com/abdibrokhim',
    },
    {
      title: 'X (twitter)',
      href: 'https://x.com/abdibrokhim',
    },
    {
      title: 'Discord',
      href: 'https://discord.gg/nUdcd9p8Ae',
    },
    {
      title: 'YouTube',
      href: 'https://www.youtube.com/@yapsdotgg',
    },
    {
      title: 'Twitch',
      href: 'https://www.twitch.tv/abdibrokhim',
    },
    {
      title: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=lwz2FZgAAAAJ&hl=en',
    }
  ];
  
  return (
    <div className="py-8 px-4 md:px-0 flex flex-row gap-6 flex-wrap justify-center items-center border-t border-[var(--gray-300)]">
      {stuff.map((item) => (
        <a
          key={item.href}
          className="flex items-center gap-2 hover:text-[var(--gray-700)]"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
        ))}
    </div>
  );
}
