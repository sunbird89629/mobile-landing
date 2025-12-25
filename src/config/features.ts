import type { Feature } from "@/types/app";
import {
	FiBarChart,
	FiColumns,
	FiCrop,
	FiEyeOff,
	FiFastForward,
	FiMaximize2,
	FiMinimize2,
	FiMonitor,
	FiRotateCcw,
	FiSettings,
	FiSkipForward,
	FiSlash,
	FiSliders,
	FiThumbsDown,
	FiToggleLeft,
	FiVolumeX,
	FiXOctagon
} from "react-icons/fi";

export const features: Feature[] = [
  {
    title: "YouTube Plus",
    description: "提供无广告、后台播放、自定义导航栏等，并包含 50+ 高级增强项。",
    icon: FiSettings,
  },
  {
    title: "iSponsorBlock",
    description: "自动跳过视频中的赞助推广片段。",
    icon: FiSkipForward,
  },
  {
    title: "YouPiP",
    description: "启用原生画中画（PiP）播放模式。",
    icon: FiColumns, // 多窗口 / 分屏 最贴近 PiP
  },
  {
    title: "YTUHD",
    description: "解锁 VP9 / 2K / 4K 超高清画质。",
    icon: FiMonitor, // 高清、画质提升
  },
  {
    title: "Return YouTube Dislike",
    description: "恢复 Dislike 数量显示。",
    icon: FiThumbsDown,
  },
  {
    title: "YTClassicVideoQuality",
    description: "恢复旧版画质选择器 UI。",
    icon: FiRotateCcw, // 回到旧版本
  },
  {
    title: "YTNoHoverCards",
    description: "禁用视频结束时的推荐悬浮卡片。",
    icon: FiSlash, // 禁用某功能
  },
  {
    title: "YTABGoodies",
    description: "禁用多项 YouTube 的 A/B 测试功能。",
    icon: FiToggleLeft, // A/B 开关概念
  },
  {
    title: "NOYTPremium",
    description: "去除 YouTube Premium 推送与弹窗。",
    icon: FiXOctagon, // 禁用/阻止 打扰
  },
  {
    title: "YTSpeed",
    description: "增加播放速度（2.25x~5x）。",
    icon: FiFastForward,
  },
  {
    title: "YTMiniplayerEnabler",
    description: "为所有视频启用 Miniplayer。",
    icon: FiMinimize2, // 小窗 / Miniplayer
  },
  {
    title: "DontEatMyContent",
    description: "防止屏幕缺口/岛遮挡视频内容。",
    icon: FiCrop, // 画面裁剪相关语义
  },
  {
    title: "YTShortsProgress",
    description: "为 Shorts 启用可见进度条和拖动条。",
    icon: FiBarChart, // 进度条、数据条
  },
  {
    title: "YTABConfig",
    description: "管理 YouTube A/B test flags。",
    icon: FiSliders, // 调整配置选项
  },
  {
    title: "YouMute",
    description: "在播放器中直接静音/取消静音。",
    icon: FiVolumeX,
  },
  {
    title: "LowContrastMode",
    description: "降低界面对比度，使 UI 更柔和。",
    icon: FiEyeOff, // 减弱视觉刺激
  },
  {
    title: "YTNoShorts",
    description: "禁用 YouTube Shorts。",
    icon: FiSlash, // 禁用
  },
  {
    title: "BigYTMiniPlayer",
    description: "增大 Miniplayer 的尺寸。",
    icon: FiMaximize2, // 更大窗口
  },
];
