'use client';

import Carousel from "@/src/components/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { FC } from "react";
import '../embla.css';
// import '../base.css';

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Dining : FC = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold pb-2">Dining</h1>
        Culinary offerings are a unique and delicious part of the Secret Garden Hotel experience. Menus feature fresh produce and meats from the estate itself, as well as our award-winning wines and seasonal items.
        <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
  )
};

export default Dining;