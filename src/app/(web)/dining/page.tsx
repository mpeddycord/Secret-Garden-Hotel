'use client';

import Image from "next/image";

const Dining = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold pb-2">Dining</h1>
        Culinary offerings are a unique and delicious part of the Secret Garden Hotel experience. Menus feature fresh produce and meats from the estate itself, as well as our award-winning wines and seasonal items.
        <Image alt='gallery' className='img pt-3' src='/images/dining/dining-room-banner.webp' width={200} height={200} />
        </div>
  )
};

export default Dining;