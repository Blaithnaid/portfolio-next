import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				gunmetal: "#2d3142",
				paynesgray: "#4f5d75",
				silver: "#bfc0c0",
				coral: "#ef8557",
				neonpurple: "#636CFF",
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			screens: {
				md: "860px",
				// => @media (min-width: 860px) { ... }
			},
			fontFamily: {
				jersey: ["var(--font-jersey)"],
				poppins: ["var(--font-poppins)"],
			},
			boxShadow: {
				card: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
			},
		},
	},
	plugins: [],
} satisfies Config;
