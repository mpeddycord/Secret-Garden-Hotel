'use client';

import Image from "next/image";

const Fitness = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold">
        Fitness
        </h1>
        <div className="h-[540px] relative rounded-2xl overflow-hidden">
            <div className="hidden md:flex justify-center items-center w-fit h-full">
                <Image className="img scale-animation" src="/images/fitness/fitness1.jpg" alt="Fitness Center" width={200} height={100} />
            </div>
        </div>
    </div>
  )
};

export default Fitness;