import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "MeTube",
	description: "YouTube for iOS, supercharged with @dayanch96 YouTube Plus (ex. YTLite) and several other tweaks.",
	keywords: ["YouTube", "Ad Block", "Tweak", "Play Blackground"],
	logo: "/assets/favicon-512.png",
	storeLinks: {
		apple: "https://pub-29b0117184894cc286590f0d348135f7.r2.dev/metube/20_47_3/mt_tweaked.ipa",
		google: "#",
	},
	socialLinks,
} as const;