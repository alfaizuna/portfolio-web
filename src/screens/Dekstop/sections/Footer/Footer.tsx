'use client';

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex w-full items-center gap-[275px] px-32 py-6 relative flex-[0_0_auto] bg-[#0a0d12]">
        <div className="flex w-[756px] items-center gap-4 relative">
          <div className="relative w-fit mt-[-1.00px] font-montserrat font-normal text-[#fdfdfd] text-base text-center tracking-[-0.48px] leading-[30px] whitespace-nowrap">
            © 2025 Edwin Anderson. All rights reserved.
          </div>
        </div>

        <div className="flex w-52 h-10 items-center gap-4 relative mr-[-55.00px]">
          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media-1.svg"
          />

          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media.svg"
          />

          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media-2.svg"
          />

          <img
            className="relative w-10 h-10"
            alt="Social media"
            src="/social-media-3.svg"
          />
        </div>
      </footer>
  );
};