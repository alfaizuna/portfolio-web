'use client';

import { profileData, socialMediaLinks } from '../../../../constants/mockupData';

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative flex w-full flex-[0_0_auto] flex-col-reverse items-center gap-8 bg-[#0a0d12] px-8 py-6 lg:flex-row lg:gap-[275px] lg:px-32">
      <div className="relative flex items-center gap-4 lg:w-[756px]">
        <div className="relative mt-[-1.00px] w-fit text-center font-montserrat text-sm font-normal leading-normal text-[#fdfdfd] lg:text-base lg:leading-[30px] lg:tracking-[-0.48px] lg:whitespace-nowrap">
          © 2025 {profileData.name}. All rights reserved.
        </div>
      </div>

      <div className="relative flex h-10 w-52 items-center gap-4 lg:mr-[-55.00px]">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-10 transition-opacity hover:opacity-80"
          >
            <img
              className="relative h-10 w-10"
              alt={social.alt}
              src={social.icon}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};