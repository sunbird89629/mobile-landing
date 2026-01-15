---
layout: ../layouts/MarkdownLayout.astro
title: Xcode 安装教程
description: 使用 Xcode 将已签名的 IPA 文件安装到 iOS 设备
---

# 使用 Xcode 安装已签名的 IPA

**适用平台**：macOS (需安装 Xcode)  
**准备项**：已签名的 IPA 文件、数据线、Mac 电脑

如果您已经拥有一个通过其他方式签名（如自建签名服务或 Ad Hoc 签名）的 IPA 文件，可以使用 Xcode 将其直接“推送”到您的 iOS 设备上。

> [!TIP]
> 如果您是想通过自己的 Apple ID 进行签名并安装，建议优先使用 **[AltStore](./altstore_install)** 或 **[Sideloadly](./sideloadly_install)**，因为 Xcode 手动安装过程较为繁琐且不支持自动续签。

---

## 方法 1：使用 Xcode 视觉化管理 (推荐)

这是最直观的方法，适用于大多数用户。

1.  **连接设备**：使用数据线将 iPhone/iPad 连接到 Mac，并在手机上点击“信任此电脑”。
2.  **打开设备管理**：启动 Xcode，在顶部菜单栏选择 `Window` -> `Devices and Simulators`。
3.  **选择设备**：在左侧列表中点击您的 iPhone。
4.  **安装应用**：
    *   在右侧的 **Installed Apps** 区域下方，点击 `+` (加号)。
    *   在文件选择框中，找到并选择您的 `.ipa` 文件。
    *   Xcode 将开始传输并安装应用。完成后，图标会出现在手机桌面上。

**技巧**：如果点击 `+` 号无法选择您的 IPA 文件，可以尝试将 `.ipa` 后缀改为 `.zip` 并解压，找到 `Payload` 文件夹内的 `.app` 文件，直接将其拖入 Xcode 的 **Installed Apps** 列表中。

---

## 方法 2：使用命令行工具 (Xcode 15+)

如果您熟悉终端操作，可以使用 Xcode 自带的 `devicectl` 工具。

1.  **查找设备 UDID**：
    ```bash
    xcrun devicectl list devices
    ```
2.  **安装 IPA**：
    ```bash
    xcrun devicectl device install app --device <您的设备UDID> /路径/到/您的.ipa
    ```

---

## 常见安装失败原因

*   **UDID 不匹配**：最常见原因。如果 IPA 是 Ad Hoc 签名的，该签名必须包含您当前设备的 UDID 才能安装成功。
*   **签名失效/证书撤销**：IPA 的证书可能已经到期或被 Apple 封禁。
*   **未开启开发者模式**：iOS 16 及以上系统，必须在 `设置` -> `隐私与安全性` -> `开发者模式` 中将其开启，否则应用无法运行。
*   **App ID 限制**：如果您使用的是免费账号签名，请确保未超出 Apple 的 App ID 名额限制。详见：**[安装限制说明](./how_to_install#2-安装前必读核心限制-app-id)**。