import React from 'react';

interface ContactsLink {
  icon: string;
  href: string;
  text: string;
}

interface FooterProps {
  items: ContactsLink[];
}

const Footer: React.FC<FooterProps> = ({items}) => {
  return (
    <div className="bg-zinc-900">
      <div className="md:container md:mx-auto px-4 md:px-10 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="text-3xl lg:text-5xl text-gray-50 font-bold">Contact</div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <a href={item.href} className="inline-flex items-center gap-4 border-transparent hover:border-yellow-300 border-2 focus:border-yellow-600 py-2 px-3 rounded-lg transition-all duration-500">
                <img className="w-10" src={item.icon} alt="" />
                <div className="text-gray-50 text-lg xl:text-xl font-medium">{item.text}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;