import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "MeTube",
	// description: "YouTube for iOS, supercharged with @dayanch96 YouTube Plus (ex. YTLite) and several other tweaks.",
	description: "基于开源项目 YTLitePlus 编译构建的 YouTube iOS 增强版。集成无广告、后台播放、视频下载等多项高级功能。",
	tags:[
		"免广告",
		"后台播放",
		"自动跳过片头/片尾/赞助广告内容",
		"视频下载"
	],
	keywords: [
		"YouTube",
		"Ad Block",
		"Tweak",
		"Play Background",
		"YouTube去广告",
		"YouTube后台播放",
		"YouTube下载",
		"iOS YouTube Vanced",
		"YTLitePlus",
		"iSponsorBlock",
		"YouPiP"
	],
	logo: "/assets/favicon-512.png",
	storeLinks: {
		apple: "https://pub-29b0117184894cc286590f0d348135f7.r2.dev/metube/20_47_3/mt_tweaked.ipa",
		google: "#",
	},
	socialLinks,
} as const;