import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NotFoundBg from "@/public/404.webp";
import GradientTile from "@/components/GradientTile";

export const metadata: Metadata = {
  title: "404 ~ isb",
  description:
    "a searchable list of my projects, organised by the tools or media used to create them",
};

export default function NotFound() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden flex flex-col justify-center items-center p-4 w-full h-[calc(100vh-12.5rem)] md:h-screen">
        <Image
          src={NotFoundBg}
          alt="404 background"
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10 pointer-events-none"
        />
        <GradientTile
          bgcolor="bg-blue-400"
          className="w-full md:w-[700px] min-h-56 text-left text-lg relative"
        >
          <div className="flex flex-col gap-1 border-2 text-white border-white border-dashed items-center justify-center relative z-10 p-4 h-full">
            <p className="text-xl text-center">
              i&apos;ve looked all over and unfortunately i couldn&apos;t find
              that page
            </p>
            <p>
              click{" "}
              <Link
                href="/"
                className="cursor-pointer font-bold hover:underline"
              >
                here
              </Link>{" "}
              to go home, or idk try something else
            </p>
          </div>
        </GradientTile>
      </div>
    </div>
  );
}
