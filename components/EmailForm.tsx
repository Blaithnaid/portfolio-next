"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type SendStatus = "idle" | "success" | "error" | "sending";

export default function EmailForm() {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [sendStatus, setSendStatus] = useState<SendStatus>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSendStatus("sending");

		if (!formRef.current) {
			console.log("No formRef, aborting send.");
			return;
		}

		try {
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
				formRef.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			);
			setSendStatus("success");
		} catch (error) {
			console.error("Email send error:", error);
			setSendStatus("error");
		}
	};

	if (sendStatus === "success") {
		return (
			<div className="p-4 flex flex-col justify-center items-center text-white bg-black/80 -m-4 text-xl font-normal text-md min-h-52">
				<p>your message has been sent!</p>
				<p>thank you for ur time :)</p>
			</div>
		);
	}

	return (
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="flex flex-col justify-between gap-4 h-full px-px"
			>
				<div className="flex h-full flex-col gap-4">
					<input
						type="text"
						name="from_name"
						placeholder="who are you?*"
						className="w-full h-10 bg-white/30 border-2 border-white/50 text-white placeholder-slate-300 px-3 focus:outline-hidden"
						required
					/>
					<input
						type="email"
						name="reply_to"
						placeholder="what's your email?*"
						className="w-full h-10 bg-white/30 border-2 border-white/50 text-white placeholder-slate-300 px-3 focus:outline-hidden"
						required
					/>
					<textarea
						name="message"
						rows={12}
						placeholder="how can i help you?"
						className="w-full h-max bg-white/20 border-2 border-white/50 text-white placeholder-slate-200 px-3 focus:outline-hidden pt-[5px]"
					></textarea>
				</div>
				<div className="flex justify-between">
					{sendStatus === "error" && (
						<p className="mt-2 text-white font-normal text-md">
							whoops, something went wrong!
						</p>
					)}
					{(sendStatus === "idle" || sendStatus === "sending") && (
						<p className="mt-2 text-white font-normal text-md"> </p>
					)}
					<button
						type="submit"
						className={`w-1/3 self-end h-12 bg-coral border-2 border-white/40 hover:bg-coral/80 active:bg-coral/60 transition-colors text-black font-bold ${
							sendStatus === "sending"
								? "cursor-wait disabled"
								: "cursor-pointer"
						}`}
						disabled={sendStatus === "sending"}
					>
						send
					</button>
				</div>
			</form>
	);
}
