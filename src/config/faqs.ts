import type { FAQ } from "@/types/app";

export const faqs: FAQ[] = [
	{
		question: "MeTube 是什么？",
		answer: "MeTube 是一个经过深度优化的 YouTube iOS 客户端。它在官方版的基础上，集成了无广告、后台播放、视频下载、跳过赞助片段 (SponsorBlock) 等多种强大插件，为您提供极致的观看体验。",
	},
	{
		question: "侧载安装安全吗？",
		answer: "侧载本身是 Apple 允许开发者测试应用的一种机制。本站提供的 IPA 文件均经过透明化的修改流程。建议您在侧载时使用非主力 Apple ID（小号），以确保您的主账号安全。",
	},
	{
		question: "为什么应用在 7 天后打不开？",
		answer: "这是 Apple 对免费开发者账号的限制。使用免费账号签名的应用有效期通常为 7 天。过期后，您只需使用侧载工具（如 AltStore 或 Sideloadly）重新安装一次即可，应用数据通常会完整保留。",
	},
	{
		question: "安装时提示 App ID 达到限制怎么办？",
		answer: "免费 Apple ID 每 7 天只能注册 10 个新的 App ID。如果遇到此错误，您可以尝试：1. 等待几天让名额自动释放；2. 换一个 Apple ID 进行侧载；3. 使用付费开发者账号解除此限制。",
	},
	{
		question: "如何更新应用版本？",
		answer: "当本站发布新版本 IPA 时，您只需下载新版文件，并使用您之前安装时相同的工具再次安装。覆盖安装通常会保留您的观看历史和设置。",
	},
];