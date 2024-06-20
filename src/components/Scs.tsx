import { memo } from "react";

const Scs= memo(() => {
  return (
    <div className="rounded-[20.6px] bg-[#F2FFFC] mb-5 flex flex-col p-4 sm:p-[15.4px_0_14.4px_20.6px] w-full max-w-[600px] box-sizing-border">
      <div className="mb-2 inline-block self-start break-words font-poppins font-medium text-[16.5px] text-[#282828]">
        System Configurations Settings
      </div>
      <span className="self-start break-words font-poppins font-normal text-[8.2px] text-[#424242]">
        Please Provide the Required Details and complete all the steps
      </span>
    </div>
  );
});

export default Scs;
