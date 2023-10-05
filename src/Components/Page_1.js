import React from "react";

const Page_1 = () => {
  return (
    <section className=" relative bg-page1Bg h-screen w-full bg-no-repeat Inter flex flex-col bg-cover ">
      <div className="absolute flex flex-col gap-10 text-white pt-[20%] pl-[8%] sm:pt-[30%]  2xl:pt-[25%]">
        <p className="text-left text-3xl font-black 2xl:text-5xl">
          <span className="text-[#00C2FF]">LEGAL SOLUTIONS</span> <br/> FOR BLOCKCHAIN AND DIGITAL ASSESTS
        </p>
        <p className="text-left text-2xl 2xl:text-4xl">
          Racing to Keep Up with Changes<br/> in  Digital Assests and Blockchain
          Regulations.
        </p>
      </div>
      <div className="flex "></div>
    </section>
  );
};

export default Page_1;
