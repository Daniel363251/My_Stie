# Ziyan's Personal Website

一个现代化、响应式的个人网站，展示个人信息、工作经验和技术文章。

## 🌟 特性

- **现代化设计**: 简洁、专业的界面设计
- **响应式布局**: 完美适配桌面、平板和手机设备
- **暗黑模式**: 支持明暗主题切换
- **流畅动画**: 精心设计的交互动画和过渡效果
- **文章筛选**: 支持按分类筛选文章内容
- **联系表单**: 内置联系表单，支持表单验证
- **SEO优化**: 良好的搜索引擎优化
- **无障碍访问**: 支持键盘导航和屏幕阅读器

## 📁 项目结构
```
My_Site/
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript功能文件
├── README.md           # 项目说明文档
└── personal_website_prompt.md  # 需求文档
```
## 🚀 快速开始

### 本地运行

1. **克隆或下载项目文件**
   ```bash
   # 如果使用Git
   git clone <repository-url>
   cd My_Site
   ```

2. **使用本地服务器运行**
   
   **方法一：使用Python（推荐）**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **方法二：使用Node.js**
   ```bash
   # 安装http-server
   npm install -g http-server
   
   # 运行服务器
   http-server -p 8000
   ```
   
   **方法三：使用Live Server（VS Code扩展）**
   - 安装Live Server扩展
   - 右键点击index.html
   - 选择"Open with Live Server"

3. **访问网站**
   打开浏览器访问 `http://localhost:8000`

## 🎨 自定义配置

### 个人信息修改

编辑 `index.html` 文件中的以下部分：

1. **基本信息**
   ```html
   <!-- 修改网站标题 -->
   <title>Your Name's Personal Website</title>
   
   <!-- 修改导航栏标题 -->
   <h2>Your Space</h2>
   
   <!-- 修改Hero区域 -->
   <h1 class="hero-title">欢迎来到我的数字空间</h1>
   <p class="hero-subtitle">您的专业描述</p>
   ```

2. **About Me部分**
   ```html
   <!-- 修改个人简介 -->
   <p class="about-intro">
       您的个人简介内容...
   </p>
   ```

3. **联系信息**
   ```html
   <!-- 修改联系方式 -->
   <div class="contact-method">
       <i class="fas fa-envelope"></i>
       <span>your-email@example.com</span>
   </div>
   ```

### 主题颜色自定义

编辑 `styles.css` 文件中的CSS变量：

```css
:root {
    --primary-color: #2563eb;     /* 主色调 */
    --secondary-color: #64748b;   /* 次要颜色 */
    --accent-color: #0ea5e9;      /* 强调色 */
    /* 其他颜色变量... */
}
```

### 添加新文章

在 `index.html` 的文章区域添加新的文章卡片：

```html
<article class="article-card" data-category="your-category">
    <div class="article-image">
        <div class="article-placeholder"></div>
    </div>
    <div class="article-content">
        <div class="article-meta">
            <span class="article-date">2024-01-01</span>
            <span class="article-category">分类</span>
        </div>
        <h3 class="article-title">文章标题</h3>
        <p class="article-excerpt">文章摘要...</p>
        <div class="article-tags">
            <span class="tag">标签1</span>
            <span class="tag">标签2</span>
        </div>
        <a href="#" class="read-more">阅读全文 <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

## 🌐 部署指南

### GitHub Pages部署

1. **创建GitHub仓库**
   - 登录GitHub
   - 创建新仓库（建议命名为 `username.github.io`）

2. **上传文件**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Daniel363251/My_Stie.git
   git push -u origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库设置
   - 找到"Pages"选项
   - 选择"Deploy from a branch"
   - 选择"main"分支
   - 点击"Save"

4. **访问网站**
   网站将在 `https://username.github.io` 可用

### Netlify部署

1. **注册Netlify账户**
   访问 [netlify.com](https://netlify.com) 注册账户

2. **部署方式一：拖拽部署**
   - 将项目文件夹压缩为zip
   - 拖拽到Netlify部署区域

3. **部署方式二：Git连接**
   - 连接GitHub仓库
   - 选择要部署的仓库
   - 设置构建命令（留空）
   - 设置发布目录为根目录

### Vercel部署

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **部署**
   ```bash
   vercel
   ```

3. **跟随提示完成部署**

### Gitee Pages部署

1. **注册Gitee账户**
   - 访问 [gitee.com](https://gitee.com) 注册账户
   - 完成实名认证（Gitee Pages需要实名认证）

2. **创建Gitee仓库**
   - 点击右上角"+"号，选择"新建仓库"
   - 填写仓库名称（建议与项目名相同）
   - 选择仓库类型为"公开"
   - 点击"创建"

3. **上传文件**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M master
   git remote add origin https://gitee.com/your-username/repository-name.git
   git push -u origin master
   ```

4. **启用Gitee Pages**
   - 进入仓库页面
   - 点击"服务"菜单，选择"Gitee Pages"
   - 选择部署分支（通常是master）
   - 点击"启动"

5. **访问网站**
   - 启动成功后，会生成访问链接
   - 网站将在 `https://your-username.gitee.io/repository-name` 可用
   - 如需自定义域名，可在Gitee Pages设置中绑定

## 🔧 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代CSS特性，CSS Grid, Flexbox
- **JavaScript (ES6+)**: 原生JavaScript，无框架依赖
- **Font Awesome**: 图标库
- **Google Fonts**: 网络字体

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 🎯 性能优化

- **图片优化**: 使用SVG图标和CSS渐变
- **代码压缩**: 生产环境建议压缩CSS和JS
- **缓存策略**: 合理设置缓存头
- **懒加载**: 图片和内容懒加载

## 🔒 安全考虑

- **表单验证**: 前端和后端双重验证
- **XSS防护**: 输入内容转义
- **HTTPS**: 生产环境使用HTTPS

## 📈 SEO优化

- **语义化HTML**: 使用正确的HTML标签
- **Meta标签**: 完整的meta信息
- **结构化数据**: 可添加JSON-LD结构化数据
- **网站地图**: 可生成sitemap.xml

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 📄 许可证

MIT License - 详见LICENSE文件

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 邮箱: your-email@example.com
- GitHub: [your-github-username](https://github.com/your-github-username)

## 🙏 致谢

感谢所有开源项目和社区的贡献，特别是：

- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 网络字体
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - 滚动动画

---

**注意**: 这是一个静态网站模板，联系表单需要后端服务支持。如需完整的表单功能，请考虑使用Netlify Forms、Formspree或自建后端服务。