import React from "react";
import LotteryLicenseCard from "../LotteryLicenceCard";
const RegisterYourselfDetail = ({ data }) => {
  return (
    <section className="py-[96px] bg-white text-center gap-12 flex flex-col bg-[#F1F8FF] mt-[96px]">
      <h2 className="text-2xl font-semibold">{data?.title}</h2>
      <div className="grid grid-cols-3 gap-12 max-w-[1072px] mx-auto">
        {data?.RegistrationCard?.map((card, idx) => (
          <LotteryLicenseCard key={idx} data={card} />
        ))}
      </div>
    </section>
  );
};

export default RegisterYourselfDetail;
