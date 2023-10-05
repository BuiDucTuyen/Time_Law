import React from "react";

const Page2 = () => {
  return (
    <section className="relative h-[2000px] bg-[#131417] text-white Inter pt-10 flex justify-center">
      <div className="absolute flex flex-col gap-14">
        <div className="flex flex-wrap gap-10 px-10 py-10  font-bold">
          <div className="flex flex-col text-left gap-7">
            <p className="text-[#00C2FF] text-2xl">ABOUT TIMELAW</p>
            <p className="text-5xl">Who we are</p>
            <p className="text-xl text-[#CFCFCF]">
              Officially established lelgal entity in 2019, with years of <br />{" "}
              experience handling legal matters for Fintech and
              <br /> Blockchain partners, we at Timelaw are the leading legal
              <br /> advisory partner in the digital assests and blockchain
              <br /> industry...
              <span className="text-[#00C2FF]">learn more</span>
            </p>
          </div>

          <div>
            <img src="Rectangle 769.svg" alt="" />
          </div>
        </div>     
          <div className="flex flex-wrap px-10 py-10  items-center justify-between">
            <p className="text-4xl font-bold ">Our Expertize & Services</p>
            <button className="w-60 h-14 rounded-full border border-[#00C2FF]  text-[#00C2FF]  text-xl">
              See more services
            </button>
          </div>
        
        <div className="grid grid-cols-3 gap-9 pt-10">
          <div className=" h-50 flex text-left justify-center flex-col gap-5  text-white ">
            <p className="text-4xl font-bold text-[#00C2FF] ">01</p>
            <p className="text-4xl font-bold ">Legal Entities</p>
            <p>
              Establishing types of enterprise:
              <br /> Offshore Company, Foundation, DAOs.
            </p>
          </div>
          <div className=" h-50 flex text-left justify-center flex-col gap-5  text-white ">
            <p className="text-4xl font-bold text-[#00C2FF] ">02</p>
            <p className="text-4xl font-bold ">
              Licenses for <br />
              Digital Assets
            </p>
            <p>
              Establishing types of enterprise:
              <br /> Offshore Company, Foundation, DAOs.
            </p>
          </div>
          <div className=" h-50 flex text-left justify-center flex-col gap-5  text-white ">
            <p className="text-4xl font-bold text-[#00C2FF] ">03</p>
            <p className="text-4xl font-bold ">Tokens</p>
            <p>
              Establishing types of enterprise:
              <br /> Offshore Company, Foundation, DAOs.
            </p>
          </div>
          <div className=" h-50 flex text-left justify-center flex-col gap-5 pt-10  text-white ">
            <p className="text-4xl font-bold text-[#00C2FF] ">04</p>
            <p className="text-4xl font-bold ">
              Dispute <br /> Settlement
            </p>
            <p>
              Establishing types of enterprise:
              <br /> Offshore Company, Foundation, DAOs.
            </p>
          </div>
          <div className=" h-50 flex text-left justify-center flex-col gap-5 pt-10  text-white ">
            <p className="text-4xl font-bold text-[#00C2FF] ">05</p>
            <p className="text-4xl font-bold ">
              Other Legal <br />
              Activities in Vietnam
            </p>
            <p>
              Establishing types of enterprise:
              <br /> Offshore Company, Foundation, DAOs.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-16">
            <div>
                <p className="font-bold text-4xl">Our Clients</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
      <div  >
      <img src="aws-logo 1.svg" alt="" />
      </div>
      <div >
      <img src="aws-logo 2.svg" alt="" />
      </div>
      <div >
      <img src="aws-logo 3.svg" alt="" />
      </div>
      <div >
      <img src="aws-logo 4.svg" alt="" />
      </div>
      <div >
      <img src="aws-logo 1 (1).svg" alt="" />
      </div>
      <div >
      <img src="aws-logo 2 (1).svg" alt="" />
      </div>
      <div >
      <img src="aws-logo 3 (1).svg" alt="" />
      </div>
      <div >
      <img src="aws-logo 4 (1).svg" alt="" />
      </div>
    </div>
        </div>
    <div className="flex flex-wrap items-center justify-between px-10 py-10">
        <div className="flex flex-col text-left gap-5 ">
            <p className="text-4xl font-bold">Request a Free Consultation</p>
            <p className="text-xl ">We encourage our clients to contact us directly for a <br/> free initial consultation. </p>
        </div>
        <div >
            <button className="w-60 h-14 rounded-full border border-[#00C2FF]   text-[#00C2FF]  text-xl">Contact Us</button>
        </div>
    </div>















      </div>
    </section>
  );
};

export default Page2;
