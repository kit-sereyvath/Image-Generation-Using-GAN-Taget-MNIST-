"use client";

import { useEffect, useState } from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const generate_img = () => {
    setLoading(true);
    const generate = async () => {
      const res = await fetch(`${process.env.backend}`);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
      setLoading(false);
    };
    console.log(process.env.backend)

    generate();
  };

  const imageUrls = [
    "./img/image1.png",
    "./img/image2.png",
    "./img/image3.png",
    "./img/image4.png",
    "./img/image5.png",
    "./img/image6.png",
    "./img/image7.png",
    "./img/image8.png",
    "./img/image9.png",
  ];

  return (
    <div className="pt-20 pl-20 gap-96 grid md:grid-cols-2 items-center text-white">
      <div className="space-y-5">
        <h1 className="text-5xl font-lilita">
          Generate <br />a
          <span className="highlight__text"> Hand-writing number </span>
          image <br /> with an intelligible quality
        </h1>
        <p className="text-base font-lato text-neutral-400">
          Get to generate the random hand-writing number image <br />
          using GANs model.
        </p>

        {loading ? (
          <button
            type="button"
            className="text-white bg-green-500 py-3 px-8 rounded-md font-lato font-bold"
            onClick={generate_img}
            disabled
          >
            Loading...
          </button>
        ) : (
          <button
            type="button"
            className="text-white bg-blue-600 py-3 px-8 rounded-md font-lato font-bold"
            onClick={generate_img}
          >
            Generate Images
          </button>
        )}

        <img src={img} alt="" />
        <div className="h-6"></div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div>
          <img src="./img/image9.png" alt="" className="m-3" />
          <img src="./img/image8.png" alt="" className="m-3" />
          <img src="./img/image7.png" alt="" className="m-3" />
        </div>
        <div className="mt-10">
          <img src="./img/image1.png" alt="" className="m-3" />
          <img src="./img/image3.png" alt="" className="m-3" />
          <img src="./img/image4.png" alt="" className="m-3" />
        </div>
        <div className="mt-20">
          <img src="./img/image5.png" alt="" className="m-3" />
          <img src="./img/image2.png" alt="" className="m-3" />
          <img src="./img/image6.png" alt="" className="m-3" />
        </div>
      </div>
    </div>
    // <div className="flex pt-20 pl-20 text-white ">
    //   <div className="pt-36 space-y-5 padding-x">
    //     <h1 className="text-5xl font-lilita">
    //       Generate <br />a
    //       <span className="highlight__text"> Hand-writing number </span>
    //       image <br /> with an intelligible quality
    //     </h1>
    //     <p className="text-base font-lato ">
    //       Get to generate the random hand-writing number image <br />
    //       using GANs model.
    //     </p>

    //     <button
    //       type="button"
    //       className="text-white bg-blue-600 py-2 px-2 rounded-md font-lato"
    //     >
    //       Generate Images
    //     </button>
    //   </div>

    //   {/* <div className="flex">
    //     <div className="flex-1 h-32 w-32">
    //       <img src="./img/image1.png" alt="" className="" />
    //     </div>
    //   </div> */}
    // </div>
  );
};

export default Hero;
