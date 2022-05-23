/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { weddingPhotos } from "../../utils/weddingPhotos";

const ImageGallery: React.FC = () => {
  return (
    <div className="mt-20 mx-auto max-w-6xl grid grid-cols-2 gap-1">
      {weddingPhotos.map((pic) => (
        <div key={pic} className="relative">
          <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
            <div className="absolute top-0 left-0 w-full h-[96%] xs:h-[97%] sm:h-[97.3%] md:h-[98%] bg-black opacity-30"></div>
            <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
              Wedding
            </div>
          </div>
          <div className="w-full h-full ">
            <Image src={pic} width={2160} height={1440} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
