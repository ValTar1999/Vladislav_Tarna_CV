import React from 'react';

interface BannerProps {
  title?: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row xl:h-96 w-full overflow-hidden">
        <div className="px-4 py-10 md:px-8 md:py-16 lg:px-16 lg:py-32 bg-yellow-50 lg:w-1/2">
          <div className="text-3xl md:text-5xl font-bold text-gray-950">{title}</div>
          <div className="text-lg font-normal mt-8 text-gray-500">{subtitle}</div>
        </div>
        <div className="flex h-full lg:w-1/2">
          <img className='w-full h-full object-cover' src="https://uploads-ssl.webflow.com/5eb98b2079b4fc247b5a89f3/5eb99a5bece6f9113960579b_Philosophy.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;