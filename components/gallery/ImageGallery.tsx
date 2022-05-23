/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { weddingPhotos } from "../../utils/weddingPhotos";

const ImageGallery: React.FC = () => {
  return (
    <div className="mt-20 mx-auto max-w-5xl grid grid-cols-2 gap-1">
      {weddingPhotos.map((pic) => (
        <div key={pic} className="relative h-full w-full">
          <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
              Wedding
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image src={pic} layout="fill" objectFit="contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
