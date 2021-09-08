import React from "react";
import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer mt-20">
      <div className=" realtive h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl opacity-80"
        />
      </div>
      <div className="absolute  bottom-32 left-12">
        <h1 className="text-4xl  mb-3 w-64">{title}</h1>
        <p className="text-lg  mb-3 w-64">{description}</p>
        <button className="px-4 py-2 bg-black text-sm text-white rounded-md">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
