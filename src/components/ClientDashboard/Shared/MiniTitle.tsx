type SectionTitleProps = {
  title: string;
  subTitle?: string;
};

export const MiniTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <div>
      <h1 className="text-white font-sans font-semibold text-[24px] leading-[38.4px]">
        {title}
      </h1>

      {subTitle && (
        <p className="text-[#6B7280] font-inter font-normal text-[16px] leading-[25.6px] max-w-[618px] mt-2">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default MiniTitle;
