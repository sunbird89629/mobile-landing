---
layout: ../layouts/MarkdownLayout.astro
title: AltStore 安装教程
description: 详细图文教程：使用 AltStore 在 iOS 上安装 IPA (macOS/Windows)
---

# AltStore 安装与使用指南

**适用平台**：macOS / Windows  
**准备项**：
*   电脑 (macOS 10.14.4+ 或 Windows 10+)
*   iOS 设备 (iOS 12.2+)
*   Apple ID (建议使用副号)
*   数据线

AltStore 是最经典的 iOS 侧载工具之一，它利用 Apple 的个人开发者证书特性，允许你在非越狱设备上安装 IPA 文件。

---

## 第一部分：电脑端安装 (选择对应系统)

### 🍎 macOS 用户

1.  **下载与安装**
    前往 [AltStore 官网](https://altstore.io) 下载 `AltServer for macOS`。解压后将 `AltServer.app` 拖入“应用程序”文件夹。

2.  **启动与授权**
    运行 AltServer。如果提示“从互联网下载的 App”，点击“打开”。
    *顶部菜单栏会出现一个菱形图标。*
    <!-- ![AltServer Menu Bar Icon](/assets/altserver-icon.png) -->

3.  **安装邮件插件 (关键步骤)**
    点击顶部菜单栏的 AltServer 图标 > `Install Mail Plug-in`。
    输入开机密码允许安装。

4.  **启用插件**
    打开“邮件 (Mail)”应用 > 偏好设置 (Settings) > 通用 (General) > 管理插件 (Manage Plug-ins)。
    勾选 `AltPlugin.mailbundle` 并点击“应用并重启邮件”。
    <!-- ![Mail Plugin Setup](/assets/mail-plugin.png) -->

5.  **安装到手机**
    连接 iPhone 到电脑。点击 AltServer 图标 > `Install AltStore` > 选择你的设备。
    输入 Apple ID 和密码（仅用于向 Apple 申请签名证书）。

---

### 🪟 Windows 用户

1.  **准备环境**
    Windows 用户**必须**下载官方版 iTunes 和 iCloud (非 Microsoft Store 版)：
    *   [下载 iTunes (64-bit)](https://www.apple.com/itunes/download/win64)
    *   [下载 iCloud for Windows](https://support.apple.com/en-us/HT204283)

2.  **安装 AltServer**
    从 [官网](https://altstore.io) 下载 `AltServer for Windows`，解压并安装 `setup.exe`。

3.  **运行与配置**
    启动 AltServer（右下角托盘区会出现菱形图标）。
    **重要**：打开 iTunes，启用“通过 Wi-Fi 同步 (Sync with this iPhone over Wi-Fi)”。

4.  **安装到手机**
    连接 iPhone。左键点击托盘区的 AltServer 图标 > `Install AltStore` > 选择你的设备。
    输入 Apple ID 开始安装。

---

## 第二部分：手机端设置

### 1. 信任开发者证书
安装完成后，手机桌面上会出现 AltStore 图标，但暂时无法打开。
1.  前往：`设置` > `通用` > `VPN 与设备管理` (或描述文件)。
2.  在“开发者 APP”下方点击你的 Apple ID。
3.  点击“信任 ...”并确认。

### 2. 开启开发者模式 (iOS 16+)
如果你的系统是 iOS 16 及以上：
1.  前往：`设置` > `隐私与安全性`。
2.  拉到底部，找到 `开发者模式` 并开启。
3.  按提示重启手机，重启后在弹窗中点击“开启”并输入锁屏密码。

---

## 第三部分：侧载 IPA (安装应用)

1.  **准备 IPA**
    在手机 Safari 下载你需要安装的 IPA 文件，保存到“文件”App。

2.  **导入安装**
    1.  打开 AltStore，点击底部的 `My Apps`。
    2.  点击左上角的 `+` 号。
    3.  选择刚才下载的 IPA 文件。
    4.  (首次使用需再次输入 Apple ID)。
    5.  等待进度条完成，App 就会出现在列表中和桌面上。

<!-- ![AltStore My Apps Screen](/assets/altstore-myapps.png) -->

---

## 第四部分：续签与常见问题

### 📅 关于 7 天续签
免费开发者证书有效期只有 7 天。
*   **自动续签**：只要电脑运行着 AltServer，且手机与电脑在同一 Wi-Fi 下，AltStore 会在后台尝试自动续签。
*   **手动续签**：在 AltStore `My Apps` 页面，点击 App 旁边的 `X days` 按钮即可手动刷新。

### ❓ 常见问题 (FAQ)

**Q: 安装时提示 "Could not find AltServer"?**
*   **Mac**: 确保“邮件”应用正在运行且插件已开启。
*   **Win**: 确保 iTunes/iCloud 是官方版，且开启了 Wi-Fi 同步。
*   确保手机和电脑在同一网络，或尝试使用数据线连接。

**Q: 提示 "App ID limit reached"?**
*   Apple 限制每 7 天只能注册 10 个 App ID。如果你安装了太多 App 或插件，需要等待名额释放（通常 7 天后）。

**Q: 安装失败提示 "Server returned invalid response"?**
*   通常是网络问题。尝试开启梯子（全局模式）或切换网络环境再试。