---
layout: ../layouts/MarkdownLayout.astro
title: SideLoadly Manual
description: Guide on how to use sideloadly
---

# SideLoadly 使用文档

## 介绍

**SideLoadly** 是一款轻量级的工具，用于将应用程序安装到 iOS 设备上，适用于非 App Store 应用程序的侧加载。SideLoadly 允许用户通过简单的步骤将应用程序安装到设备上，而无需通过 App Store 审核流程。此工具支持通过 USB 连接和 Wi-Fi 连接设备。

## 安装

### 系统要求
- **操作系统**: macOS 或 Windows
- **iOS 设备**: 需要运行 iOS 14 或更高版本
- **依赖**: 
  - Xcode（仅 macOS）
  - Apple ID（需使用开发者帐户）

### 安装步骤

1. 访问 [SideLoadly 官网](https://sideloadly.io)。
2. 根据您的操作系统（macOS 或 Windows）下载并安装 SideLoadly。
3. 安装完成后，启动 SideLoadly。

## 使用

### 步骤 1: 准备设备

确保您的 iOS 设备已解锁，并通过 USB 线或 Wi-Fi 连接到计算机。

1. 在 iOS 设备上，打开 **设置** → **设备管理**，确保设备上已经信任了开发者证书。
2. 如果通过 USB 连接设备，请确保设备被正常识别。

### 步骤 2: 配置 Apple ID

1. 打开 SideLoadly。
2. 在界面上，点击 **Login with Apple ID**，输入您的 Apple ID 和密码。
3. 确保您有一个有效的开发者帐户，如果没有，可以创建一个免费的 Apple ID。

### 步骤 3: 导入应用

1. 点击 **Browse** 按钮，选择您想要安装的 `.ipa` 文件。
2. 您可以选择手动上传 `.ipa` 文件，或者从应用程序管理中获取。

### 步骤 4: 配置安装设置

1. **选择目标设备**: 在下拉列表中选择连接的设备（如果有多个设备）。
2. **安装方式**: 您可以选择使用 USB 或 Wi-Fi 安装应用。
3. **证书设置**: 在证书设置中，选择一个有效的开发者证书。

### 步骤 5: 开始安装

点击 **Start** 按钮，SideLoadly 将开始安装应用程序。

1. **安装进度**: 您将看到安装进度条。安装完成后，应用将出现在设备的主屏幕上。
2. **安装失败**: 如果安装失败，检查 Apple ID 和开发者证书设置，并确保设备已正确连接。

### 步骤 6: 信任应用

安装完成后，iOS 设备可能会要求您信任应用程序。

1. 打开设备的 **设置**。
2. 前往 **常规** → **设备管理**。
3. 在 **开发者应用** 下，找到您安装的应用并点击 **信任**。

## 常见问题

### 1. 安装失败怎么办？

- 确保您的设备已解锁并连接正确。
- 确保使用的 Apple ID 是有效的开发者帐户。
- 如果证书过期或无效，尝试重新登录并更新证书。
- 确保 `.ipa` 文件没有损坏。

### 2. 如何通过 Wi-Fi 安装应用？

- 确保设备和计算机在同一 Wi-Fi 网络下。
- 在安装设置中选择 **Wi-Fi** 作为连接方式。

### 3. 是否支持应用更新？

- 是的，您可以使用 SideLoadly 更新已安装的应用。只需导入新版本的 `.ipa` 文件，并按照相同的步骤进行安装。

### 4. 是否可以安装多个应用？

- 是的，您可以同时安装多个应用，但每个应用都需要在 Apple ID 下使用单独的证书进行签名。

## 许可证

SideLoadly 是免费软件，但提供一些付费功能。有关更多信息，请访问 [SideLoadly 官网](https://sideloadly.io)。

## 联系我们

- 官方网站: [https://sideloadly.io](https://sideloadly.io)
- 支持邮箱: support@sideloadly.io