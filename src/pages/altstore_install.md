---
layout: ../layouts/MarkdownLayout.astro
title: AltStore 安装
description: 使用 AltStore 在 iOS 上安装 IPA 的教程
---

# AltStore 安装

**适用平台**：macOS / Windows  
**准备项**：Apple ID、AltServer、数据线

## 1. 安装 AltServer
1. 前往 AltStore 官网下载对应系统版本。
2. 安装并启动 AltServer。
3. 确保电脑与 iPhone 在同一网络。

## 2. 在设备上安装 AltStore
1. 通过 USB 连接 iPhone，并在设备上点按“信任此电脑”。
2. 在电脑上选择 AltServer -> Install AltStore -> 选择设备。
3. 输入 Apple ID 和密码（仅用于签名）。

## 3. 信任开发者证书
1. iPhone 打开 设置 -> 通用 -> VPN 与设备管理。
2. 在开发者 App 下找到你的 Apple ID。
3. 点按“信任”。

## 4. 侧载 IPA
1. 打开 AltStore。
2. 进入 My Apps，点击 +。
3. 选择 IPA 文件，等待安装完成。

## 常见问题
- 安装失败通常与 Apple ID 限制或网络连接有关。
- 若提示 App ID 不足，需要等待名额释放或使用付费开发者账号。
