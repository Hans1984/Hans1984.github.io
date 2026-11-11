# Chao Wang — Academic Homepage

个人学术主页，基于 Jekyll，继续使用 GitHub Pages。正式入口为 `index.md`，不依赖远程主题、第三方字体或图标 CDN。

## 本地预览

需要 Ruby 和 Bundler：

```sh
bundle install
bundle exec jekyll serve
```

打开终端显示的本地地址（通常为 `http://localhost:4000`）。生成文件在 `_site/`，无需提交。

## 内容维护

- `_config.yml`：姓名、邮箱、Scholar、GitHub、CV、头像、站点地址和访客计数器。
- `index.md`：个人介绍、教育和研究经历。
- `_data/publications.yml`：所有论文；`selected: true` 的论文显示在首页。当前精选为 10 篇一作或通讯作者论文，其余 4 篇保留在数据中。`year` 为年份，`topic` 保留研究方向分类（`rendering` 或 `imaging`），精选列表直接展示，不设置额外筛选。共同一作使用 `*`，通讯作者保留 `✉️` 标记。论文标题为纯文字。页面链接统一为 **Paper / Project Page**，分别来自 `pdf` / `page`；为空时不生成链接。`pdf` 也可填写 arXiv HTML 或出版社论文页面。`doi` 和 `dataset` 仅保留为元数据，不单独显示。
- `_data/news.yml`：News，按时间倒序；日期用引号包裹。首页显示最新 5 条，其余可展开。
- `_data/activities.yml`：报告、委员会、组织活动及审稿记录。
- `assets/css/home.css`：统一配色与响应式样式。链接深绿 `#28584F`、会议信息砖红 `#A64E43`，背景近白 `#FDFDFB`；深色模式有单独的对比度配色。
- `_layouts/homepage.html` 和 `_includes/`：页面布局与各部分模板。

论文条目示例：

```yaml
- title: Paper title
  authors: <strong>Chao Wang ✉️</strong>, Other Authors
  conference_short: CVPR
  conference: IEEE/CVF Conference on Computer Vision and Pattern Recognition
  year: 2027
  topic: rendering
  selected: true
  pdf: https://example.com/paper.pdf
  page: https://example.com/project/
  image: /assets/img/teaser.png
```

## 访客统计

已为此主页创建独立的 [Flag Counter 统计页](https://info.flagcounter.com/o5tE)。页面底部显示各国家/地区的访客计数、总页面浏览次数，点击图片可查看详情。国家/地区由服务商根据访问 IP 推断；VPN、拦截器及缓存会影响结果。各国访客按 24 小时窗口去重，总 pageviews 为计数图片加载次数；免费版按国家/地区汇总（美国/加拿大提供更细地区，其余省市需要 Pro）。详细图表可能需要最多 48 小时生成，连续 30 天没有新访客的免费计数器可能被服务商删除。详情以 [Flag Counter 官方说明](https://flagcounter.com/faq.html) 为准。

- 计数器没有关联邮箱或第三方账号，不需要在仓库保存密钥。
- `_config.yml` 的 `visitor_counter` 中保存公开图片和统计链接，可更换独立计数器。
- 浏览器仅在当前域名与 `_config.yml` 的 `url` 一致时加载计数图片，避免 localhost / 预览环境污染正式统计。修改域名时应同步更新 `url`。
- 统计从接入后开始，不能还原历史流量。没有 JavaScript 时可通过统计页链接查看数据。
- 嵌入图片由第三方接收访问请求；页面明确标注统计提供方。未使用旧模板的 Google Analytics ID。

## 发布

沿用当前仓库的 GitHub Pages 配置。将经过审查的改动合并到当前 Pages 使用的源分支即可。`CNAME` 保持现状；如使用自定义域名，应同时更新 `_config.yml` 的 `url`。

`html_source_file/` 为历史主题示例，已排除出 Jekyll 构建；它不是当前主页的发布入口。保留原主题 LICENSE。
