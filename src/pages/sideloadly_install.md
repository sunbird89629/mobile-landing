---
layout: ../layouts/MarkdownLayout.astro
title: Sideloadly 安装教程
description: 使用 Sideloadly 在 iOS 上安装 MeTube (IPA) 的详细步骤
---

# 使用 Sideloadly 安装 MeTube

**Sideloadly** 是一款轻量级、高成功率的侧载工具，支持 Windows 和 macOS。它非常适合那些希望快速安装 IPA 且不介意每周连接一次电脑的用户。

---

## 1. 准备工作

*   **设备**：运行 iOS 14+ 的 iPhone 或 iPad。
*   **电脑**：Windows 10+ 或 macOS 10.14+。
*   **账号**：一个 Apple ID（建议使用专门用于侧载的副号）。
*   **IPA 文件**：已下载到电脑上的 MeTube IPA。

---

## 2. 下载与安装 Sideloadly

1.  访问 [Sideloadly 官网](https://sideloadly.io/)。
2.  根据您的电脑系统下载对应的安装包并安装。
3.  **Windows 用户注意**：您**必须**安装官方版的 iTunes 和 iCloud，而不是 Microsoft Store 版。
    *   [下载 iTunes (64-bit)](https://www.apple.com/itunes/download/win64)
    *   [下载 iCloud for Windows](https://support.apple.com/en-us/HT204283)

### 🍎 macOS 用户特别注意：无法打开 Sideloadly？
由于 Sideloadly 未在 App Store 上架，系统可能会拦截：
1.  如果提示“无法验证开发者”，请点击“取消”。
2.  打开 **系统设置** -> **隐私与安全性**。
3.  向下滚动找到“已阻止打开 Sideloadly...”，点击 **“仍要打开”**。
4.  输入 Mac 密码确认即可。

---

## 3. 安装 MeTube 步骤

1.  **连接设备**：使用数据线将 iPhone 连接到电脑。在手机上点击“信任”。
2.  **启动软件**：打开 Sideloadly，确认 `iDevice` 栏显示了您的设备。
3.  **导入 IPA**：点击左侧的大图标（或将 IPA 直接拖入窗口），选择您下载的 MeTube IPA 文件。
4.  **输入账号**：在 `Apple Account` 栏输入您的 Apple ID。
5.  **开始安装**：点击底部的 **Start** 按钮。
    *   如果提示输入 Apple ID 密码，请放心输入（它是直接发送给 Apple 验证的）。
    *   如果开启了双重验证，请在 Sideloadly 弹窗中输入收到的验证码。
6.  **完成**：进度条显示 `Done` 后，手机桌面上会出现 MeTube 图标。

---

## 4. 手机端最后设置 (必须)

安装完成后应用暂时无法打开，需执行以下操作：

1.  **信任证书**：前往 `设置` -> `通用` -> `VPN 与设备管理`。点击您的 Apple ID，选择 **“信任”**。
2.  **开启开发者模式 (iOS 16+)**：前往 `设置` -> `隐私与安全性` -> 拉到底部开启 **“开发者模式”** 并重启手机。

---

## 常见问题排查

*   **提示 "App ID limit reached"?** Apple 限制免费账号每 7 天只能注册 10 个 App ID。如果您最近装过其他 App，可能需要等待几天，或换一个 Apple ID 试试。
*   **安装卡在 50%？** 请检查数据线连接，或尝试重启 Sideloadly 和 iTunes。
*   **7 天后打不开了？** 免费账号的签名有效期为 7 天。请重新连接电脑，按照上述步骤再次安装（数据会保留）。