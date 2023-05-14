"use client";
import Image from "next/image";
import { Carousel, Button } from "flowbite-react";

import macbook from "#/img/macbook.jpg";
import airpods from "#/img/airpods.jpg";
import xboxController from "#/img/xbox-controller.jpg";

import ButtonCarrucelLeft from "./ButtonCarrucelLeft";
import ButtonCarrucelRight from "./ButtonCarrucelRight";

export default function Carrucel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[30rem]">
      <Carousel
        slideInterval={5000}
        leftControl={<ButtonCarrucelLeft />}
        rightControl={<ButtonCarrucelRight />}
      >
        <div className="h-full1 relative grid place-items-center text-white">
          <Image
            src={macbook}
            alt="macbook"
            placeholder="blur"
            width={macbook.width}
            height={macbook.height}
            loading="lazy"
          />
          <span className="absolute h-full w-full bg-[#06060663]"></span>
          <p className="absolute max-w-lg text-center text-4xl font-bold">
            Stay connected and productive on-the-go with our lightweight and
            portable laptops.
          </p>
        </div>
        <div className="h-full1 relative grid place-items-center text-white">
          <Image
            src={airpods}
            alt="airpods"
            placeholder="blur"
            width={airpods.width}
            height={airpods.height}
            style={{ marginTop: "100px" }}
            loading="lazy"
          />
          <span className="absolute h-full w-full bg-[#06060663]"></span>
          <p className="absolute max-w-lg text-center text-4xl font-bold">
            Experience crystal-clear audio and all day comfort with our premium
            earbuds.
          </p>
        </div>
        <div className="h-full1 relative grid place-items-center text-white">
          <Image
            src={xboxController}
            alt="xbox controller"
            placeholder="blur"
            width={xboxController.width}
            height={xboxController.height}
            loading="lazy"
          />
          <span className="absolute h-full w-full bg-[#06060663]"></span>
          <p className="absolute max-w-2xl text-center text-4xl font-bold">
            Experience the ultimate gaming setup with our comprehensive range of
            consoles and accessories
          </p>
        </div>
      </Carousel>
    </div>
  );
}
