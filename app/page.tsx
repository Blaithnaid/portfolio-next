"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import CVModal from "@/components/CVModal";
import HomeBg from "@/public/home.webp";

export default function HomePage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Head>
				<title>home ~ isb</title>
			</Head>
			<div
				className="flex flex-col justify-end items-end p-4 bg-cover bg-center w-full h-[calc(100vh-12.5rem)] md:h-screen"
				style={{ backgroundImage: `url(${HomeBg.src})` }}
			>
				<div className="w-full md:w-[500px] min-h-[15rem] text-left text-lg relative">
					<div className="absolute inset-0 bg-[#253956] bg-blend-color-burn mix-blend-color-burn"></div>
					<div className="flex flex-col gap-1 border-2 border-white border-dashed justify-between relative z-10 p-4 h-full hover:cursor-default">
						<p>
							<b>hi! i'm iarla.</b> i'm a software developer and
							sound engineer. this is a little portfolio website i
							built to show off some of my work and advertise my
							skills!
						</p>
						<p>
							feel free to have a click around to find out what
							i'm up to, or head straight to my contact page (the
							little envelope in the navbar!) if you want to get
							in touch.
						</p>
						<p>
							just interested in seeing my cv? you can take a look
							<b>
								{" "}
								<span
									className="text-slate-300 hover:text-neonpurple underline cursor-pointer"
									onClick={() => setIsModalOpen(true)}
								>
									here
								</span>
							</b>
							.
						</p>
					</div>
				</div>
			</div>
			<CVModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
}
