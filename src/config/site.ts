import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "MeTube",
	description: "YouTube for iOS, supercharged with @dayanch96 YouTube Plus (ex. YTLite) and several other tweaks.",
	keywords: ["YouTube", "Ad Block", "Tweak", "Play Blackground"],
	logo: "/assets/favicon-512.png",
	storeLinks: {
		apple: "/downloads/metube.ipa",
		google: "#",
	},
	socialLinks,
} as const;