export default function EmailForm() {
	return (
		<>
			<form
				action=""
				className="flex flex-col justify-between gap-4 h-full"
			>
				<div className="flex h-full flex-col gap-4">
					<input
						type="text"
						placeholder="name"
						className="w-full h-10 bg-white/10 border-2 border-white/50 text-silver px-3 focus:outline-none"
					/>
					<input
						type="email"
						placeholder="email"
						className="w-full h-10 bg-white/10 border-2 border-white/50 text-silver px-3 focus:outline-none"
					/>
					<textarea
						name=""
						id=""
						cols={30}
						rows={10}
						placeholder="message"
						className="w-full h-max bg-white/10 border-2 border-white/50 text-silver px-3 focus:outline-none pt-[5px]"
					></textarea>
				</div>
				<button
					type="submit"
					className="w-1/3 self-end h-14 bg-coral text-black font-bold"
				>
					send
				</button>
			</form>
		</>
	);
}
