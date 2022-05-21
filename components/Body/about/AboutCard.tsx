import React from "react";

const AboutCard: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full flex justify-center items-center">
      <div className="relative p-[40px] h-[480px] w-[480px] flex flex-col justify-center items-center bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc break-words shadow-xl">
        <h3 className="absolute top-[10%] right-2 text-5xl uppercase font-light text-right px-10">
          About
        </h3>
        <p className="sm:text-base mt-16 px-5 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a
          officiis laborum expedita inventore id minima voluptatum recusandae
          asperiores quos hic est repellat voluptas, praesentium voluptatem
          earum nesciunt laboriosam adipisci obcaecati deserunt? Perferendis
          delectus repellat praesentium id nihil facere culpa?
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
