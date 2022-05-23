import React from "react";

const AboutCard: React.FC = () => {
  return (
    <div className="relative h-[500px] flex justify-center items-center xl:w-[33%]">
      <div className="relative p-[40px] h-[420px] w-[420px] md:h-[450px] md:w-[450px] xl:h-[480px] xl:w-[480px] flex flex-col justify-center items-center bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc break-words shadow-xl">
        <h3 className="absolute top-[10%] right-2 text-4xl uppercase font-light text-right px-10">
          About
        </h3>
        <p className="text-sm mt-16 px-5 max-w-lg">
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
