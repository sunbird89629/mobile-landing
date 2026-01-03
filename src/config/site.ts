import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "MeTube",
	// description: "YouTube for iOS, supercharged with @dayanch96 YouTube Plus (ex. YTLite) and several other tweaks.",
	description: "官方 YouTube iOS App 深度优化的增强版应用。解锁几乎所有的会员功能，甚至包含社区维护的许多使用功能。",
	tags:[
		"免广告",
		"后台播放",
		"自动跳过片头/片尾/赞助广告内容",
		"视频下载"
	],
	keywords: ["YouTube", "Ad Block", "Tweak", "Play Blackground"],
	logo: "/assets/favicon-512.png",
	storeLinks: {
		apple: "https://pub-29b0117184894cc286590f0d348135f7.r2.dev/metube/20_47_3/mt_tweaked.ipa",
		google: "#",
	},
	socialLinks,
} as const;