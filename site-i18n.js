(() => {
    const translations = {
        '首页': 'Home', '精选案例': 'Selected Work', '个人履历': 'About', '项目经历': 'Experience', '文章': 'Writing', '联系我': 'Contact',
        'Ziyan Wang 首页': 'Ziyan Wang home', '主导航': 'Main navigation',
        '把供应链经验，': 'Turning supply chain experience', '变成能工作的 AI 产品。': 'into AI products that get work done.',
        '我是 Ziyan，拥有 5 年供应链产品经验，目前负责供应链 AI 产品。近两年聚焦商家 AI、Agent Z 与企业软件智能化，擅长把岗位流程、业务系统和人机协作机制转成可落地的产品能力。': 'I am Ziyan, a product manager with five years of supply chain experience, now building supply chain AI products. Over the past two years, I have focused on commerce AI, Agent Z, and intelligent enterprise software. I turn role based workflows, business systems, and human AI collaboration into products teams can use.',
        '看一个代表案例': 'Explore selected work', '完整项目经历': 'Full experience', '下载 PDF 简历': 'Download Chinese CV', '最近在实践：让供应链 Agent 从回答问题走向持续执行任务': 'Current focus: helping supply chain agents move from answering questions to completing ongoing tasks',
        '杭州 · 中国': 'Hangzhou · China', '个人实践 / AI 产品': 'Practice / AI products', '把 AI 融入真实工作': 'Bringing AI into real work',
        '月均 Token 使用量 · AI 工具': 'Monthly token usage · AI tools', '持续深度使用 AI 产品': 'Years using AI products deeply', '近 2 年项目交付': 'Countries with project delivery in the past 2 years', '供应链项目累计商业价值': 'Cumulative value of supply chain projects',
        '从业务现场出发，': 'Starting from real operations,', '让 AI 真正参与工作。': 'bringing AI into the work itself.', '从供应链岗位、业务系统和任务流程出发，探索 AI 产品怎样进入真实工作流，并交付可验证的结果。': 'I explore how AI products can enter real workflows and deliver verifiable outcomes, starting with supply chain roles, business systems, and task flows.',
        '把 AI 智能表格，带进采购员的日常工作流。': 'Bringing AI tables into the daily work of procurement teams.', '让供应链 Agent 从“能回答”，走向“能持续完成任务”。': 'Moving supply chain agents from answering questions to completing tasks over time.', '设计 AI 客户端框架，让 AI 接住商家经营任务。': 'Designing an AI client that can take on commerce operations tasks.', '把供应链项目启动流程，做成可复用的 CLI 脚手架。': 'Turning supply chain project setup into a reusable CLI toolkit.',
        '查看采购 AI 工作台案例': 'View the AI procurement workspace', '查看 Agent Z 案例': 'View the Agent Z case study', '查看 AI 客户端框架案例': 'View the AI client framework', '查看项目案例': 'View the project case study',
        '懂现场，也懂系统。': 'I understand the work and the systems.', '把两边的话都说清楚。': 'I make both sides clear.', '从真实流程出发': 'Start with real workflows', '把复杂度拆成可交付': 'Turn complexity into deliverables', '让 AI 进入真实工作流': 'Bring AI into real workflows',
        '仓库、库存、履约与异常处理。先理解现场为什么这么做，再把规则放进产品。': 'Warehousing, inventory, fulfillment, and exception handling. I first learn why teams work this way, then build those rules into the product.', '在客户、业务、产品与研发之间建立共同语言，让方案从蓝图走到上线。': 'I build a shared language across customers, business, product, and engineering so plans can move from blueprint to launch.', '围绕任务、工具、权限与结果交付设计 Agent 产品，在关键决策处保留人的判断。': 'I design agents around tasks, tools, permissions, and outcomes, while keeping people in control of key decisions.', '更多关于我的经历': 'More about my experience',
        '如果你也在解决': 'If you are working on', '复杂的业务问题，': 'complex business problems,', '我很愿意聊聊。': 'I would be glad to talk.', '给我发邮件': 'Email me', '读我的一篇文章': 'Read an article', 'AI 产品 · 供应链 Agent · 商家 AI · 国际化交付': 'AI products · Supply chain agents · Commerce AI · Global delivery',
        '关于我 About Me': 'About Me', '供应链 AI 产品经理，专注把岗位经验、业务系统与 AI Agent 结合，做成能进入真实工作流的产品。': 'Supply chain AI product manager focused on combining role expertise, business systems, and AI agents to build products for real workflows.',
        '我在阿里持续负责供应链与商家产品。近两年工作重心转向 AI：先后参与商家 AI 产品、供应链 Agent，以及存量供应链软件的 AI+ 改造。': 'At Alibaba, I have worked on supply chain and commerce products. In the past two years, my focus has shifted to AI, including commerce AI, supply chain agents, and AI upgrades for existing supply chain software.',
        '我擅长从一线流程和系统规则中找到产品切口，再把复杂问题拆成团队可理解、用户可使用、业务可验证的方案。': 'I find product opportunities in frontline workflows and system rules, then turn complex problems into solutions teams can build, users can use, and businesses can validate.',
        '从供应链系统，走向 AI 产品。': 'From supply chain systems to AI products.', '5 年供应链产品经验，从 WMS、供应链商业化交付，逐步延伸到商家 AI 与供应链 Agent。': 'Five years in supply chain products, expanding from WMS and commercial delivery to commerce AI and supply chain agents.',
        '专业领域': 'Areas of expertise', '供应链 Agent 产品': 'Supply chain agent products', '供应链与企业软件': 'Supply chain and enterprise software', '国际化项目': 'Global delivery', 'AI 产品工作方式与专业资质': 'AI product practice and certifications', '把 AI 用进产品工作的完整链路。': 'Using AI across the product development cycle.', '供应链、产品开发与项目管理。': 'Supply chain, product development, and project management.', '教育背景': 'Education', '物流工程与管理硕士': 'MSc, Logistics Engineering and Management', '物流管理学士': 'BSc, Logistics Management', '职业理念': 'How I work', '深度洞察': 'Deep discovery', '系统思维': 'Systems thinking', '国际视野': 'Global perspective',
        '把实践写下来，': 'Writing down what I learn,', '让经验继续生长。': 'so experience can keep growing.', '记录供应链产品、AI 工作方式与项目交付中的真实观察。从一线问题出发，把做过的事沉淀成可复用的思考。': 'Notes on supply chain products, AI at work, and project delivery. I start with frontline problems and turn experience into reusable insights.', '阅读全文': 'Read article', '产品实践 · AI 表格': 'Product practice · AI tables', '职业经历 · WMS': 'Career · WMS',
        '聊聊真实问题，': 'Let’s talk about real problems,', '一起把 AI 做进工作。': 'and bring AI into the work.', '欢迎招聘沟通、AI 产品交流，以及供应链数字化合作。邮件通常会在 24 小时内回复。': 'I welcome conversations about roles, AI products, and supply chain transformation. I usually reply to email within 24 hours.', '给我发邮件': 'Email me', '邮件联系': 'Email', '招聘、产品交流与合作沟通': 'Roles, product discussions, and partnerships', '电话联系': 'Phone', '工作日 9:00–18:00': 'Weekdays, 9:00–18:00 (China time)', '查看我的简历': 'View my CV', '下载中文简历': 'Download Chinese CV', '下载英文简历': 'Download English CV', '沟通响应': 'Response time', '邮件通常在 24 小时内回复': 'I usually reply within 24 hours', '所在地点': 'Location', '杭州，中国 · 支持远程协作': 'Hangzhou, China · Open to remote collaboration', '交流方向': 'Topics', 'AI 产品、供应链数字化与产品交付': 'AI products, supply chain digitization, and product delivery',
        '快速链接': 'Quick links', '关于我': 'About', '经验': 'Experience', '联系': 'Contact', '直接联系': 'Contact directly',
        '项目经验 Project Experience': 'Project Experience', 'AI 产品与交付实践': 'AI products and delivery', '查看产品案例': 'View case study', '了解详情': 'Learn more', '返回精选案例': 'Back to selected work', '返回文章列表': 'Back to articles',
        '案例背景': 'Context', '项目背景': 'Project context', '协作方式': 'How we worked', '阶段成果': 'Outcomes', '项目概览': 'Overview', '核心挑战': 'Key challenges', '解决方案': 'Approach', '项目成果': 'Results',
        '写在28岁之际 —— 从西北到东部，从学生到产品经理，我的人生就像一个"未上线的版本"，一直在更新，一直在热更，还一直没有稳定版本号。': 'At 28, looking back from northwest China to the east, and from student to product manager, my life feels like a version that has never launched: always updating, always in hotfix mode, and still without a stable version number.',
        '负责 Agent Z 客户端与存量供应链软件 AI+ 产品，探索岗位 Agent 如何连接工具、系统和真实任务。': 'I lead the Agent Z client and AI upgrades for existing supply chain software, exploring how role based agents connect tools, systems, and real tasks.',
        '负责「生意管家」AI 客户端产品框架设计，并负责商家物流履约 Agent 产品建设。': 'I designed the AI client framework for Business Manager and led logistics fulfillment agent development for merchants.',
        '负责 WMS 等供应链产品与国际化项目交付，积累仓储、库存、履约和跨国协作经验。': 'I delivered WMS and other supply chain products across international projects, building experience in warehousing, inventory, fulfillment, and cross border collaboration.',
        '参与 SRM 与供应链协同平台升级，负责供应商生命周期、订单协同、图纸协同和质量协同等产品模块。': 'I contributed to upgrades of SRM and supply chain collaboration platforms, leading supplier lifecycle, order, drawing, and quality collaboration modules.',
        '从供应链计划、流程自动化和 WMS 实习项目起步，逐步转向供应链数字化产品。': 'I started in supply chain planning, process automation, and WMS internships before moving into supply chain digital products.',
        '从商家 AI 到供应链 Agent，再到 WMS 与国际化交付。我的工作始终围绕一个问题： 如何让复杂业务变成用户愿意用、系统接得住、结果能验证的产品。': 'From commerce AI and supply chain agents to WMS and global delivery, my work centers on one question: how can complex business needs become products people want to use, systems can support, and outcomes can validate?',
        '负责 Agent Z 客户端与存量供应链软件 AI+ 产品。产品围绕岗位 Agent、技能装配、任务自动化、系统连接、多 Agent 协作和关键节点人工确认展开。': 'I lead the Agent Z client and AI upgrades for existing supply chain software. The product brings together role based agents, skills, task automation, system connections, multi agent collaboration, and human approval at key steps.',
        '基于 DeepSeek Harness 构建采购业务工作台，把请购单与订单整理、需求认领跟进和 AI 表格能力接入真实采购流程，并让 Agent 与面板共用宿主数据。': 'Built on DeepSeek Harness, this procurement workspace brings requisition and order management, request ownership and follow up, and AI table features into the procurement workflow, with the panel and agent sharing host data.',
        '主导「生意管家」2.0 AI 客户端产品设计，围绕店长、运营、美工三类角色定义经营首页的洞察与策略推荐，并明确五种基本交互模式。产品累计使用商家超过 400 万。': 'I led the Business Manager 2.0 AI client design, defining insights and recommendations for store managers, operators, and designers, along with five core interaction modes. More than four million merchants have used the product.',
        '主导建设 AI 商业化交付工具，将非结构化客户调研转为标准业务蓝图；并设计 WMS 项目初始化 CLI，把目录生成、AI 环境配置与蓝图规则拉取组织成可复用流程。': 'I led an AI assisted delivery tool that turns unstructured customer research into standard business blueprints, and designed a WMS project setup CLI that combines directory generation, AI environment setup, and blueprint rules into a reusable workflow.',
        '业务规模数据按产品/项目口径呈现；个人负责范围见各案例说明。': 'Business metrics are reported at the product or project level. My individual responsibilities are described in each case study.',
        '第一次尝试 AI Agent 驱动的纯定制化项目开发模式，用 2 人团队完成传统需要 17 人团队的复杂零售陈列管理系统。': 'A first trial of an AI agent driven custom development model: a two person team delivered a complex retail planogram system that would traditionally require 17 people.',
        '产品经理': 'Product Manager', '核心功能': 'Key capabilities', '主要成果': 'Results', '核心成果': 'Key results', 'AI 工作流程': 'AI workflow', '供应链系统与 AI Native 交付': 'Supply chain systems and AI native delivery',
        '专注于供应链产品设计与创新， 分享WMS系统设计经验与行业洞察。': 'I build supply chain products and share lessons from WMS design and industry practice.',
        '专注于AI驱动的供应链创新， 分享技术洞察与行业思考。': 'I focus on AI driven supply chain innovation and share technical and industry insights.',
        '从岗位职责与业务目标出发，设计 Agent 的任务、技能、系统连接和结果交付方式， 让 AI 能够进入供应链的日常工作流程。': 'I design agent tasks, skills, system connections, and outcomes around role responsibilities and business goals, bringing AI into everyday supply chain work.',
        '熟悉仓储、库存、订单和履约场景，能把复杂规则转成系统产品方案， 并推动标准能力、定制项目与 AI+ 改造落地。': 'I understand warehousing, inventory, orders, and fulfillment, and turn complex rules into product solutions across standard capabilities, custom projects, and AI upgrades.',
        '具备国际化项目交付经验和跨文化沟通能力， 致力于为全球客户提供优质的供应链产品服务。': 'I bring global project delivery and cross cultural communication experience to supply chain products for customers around the world.',
        '连续 4 年深度使用 ChatGPT 等主流 AI 产品，将 AI 融入产品研究、需求分析、原型开发、数据分析与 Coding 协作。': 'For four years, I have used leading AI products such as ChatGPT in product research, requirements analysis, prototyping, data analysis, and coding collaboration.',
        '与当前产品方向相关的认证：': 'Certifications relevant to my current work:',
        '深入学习供应链理论与实践，掌握现代物流管理体系，为后续产品经理工作奠定扎实理论基础。': 'Studied supply chain theory and practice, building a strong foundation in modern logistics management for my product work.',
        '系统学习物流与供应链基础理论，培养了对供应链业务的深度理解和敏锐洞察力。': 'Studied logistics and supply chain fundamentals, developing a deep understanding of supply chain operations.',
        '以敏锐的业务洞察力和同理心，深刻挖掘业务痛点， 精准理解用户需求，实现高效的产品交付。': 'I use business insight and empathy to uncover operational pain points, understand user needs, and deliver effective products.',
        '结合扎实的理论基础和丰富的实践经验， 运用系统性思维设计高效的供应链解决方案。': 'I combine a strong theoretical foundation with hands on experience to design effective supply chain solutions.',
        '把供应链经验转成可落地、可复用的 AI 产品。': 'Turning supply chain experience into practical, reusable AI products.',
        '此文章目前提供中文版本。': 'This article is currently available in Chinese.',
        '此案例页面的部分历史项目内容目前提供中文版本。': 'Some historical project details on this page are currently available in Chinese.'
,
        '我在阿里持续负责供应链与商家产品。近两年工作重心转向 AI：先后参与商家 AI 产品、供应链 Agent，以及存量供应链软件的 AI+ 改造。': 'At Alibaba, I have worked on supply chain and commerce products. In the past two years, my focus has shifted to AI, including commerce AI, supply chain agents, and AI upgrades for existing supply chain software.',
        '我擅长从一线流程和系统规则中找到产品切口，再把复杂问题拆成团队可理解、用户可使用、业务可验证的方案。': 'I find product opportunities in frontline workflows and system rules, then turn complex problems into solutions teams can build, users can use, and businesses can validate.',
        '菜鸟 · 供应链 AI': 'Cainiao · Supply Chain AI', '淘宝 · 商家 AI': 'Taobao · Commerce AI', '菜鸟 · 供应链产品': 'Cainiao · Supply Chain Products', '上海电气 · 供应链产品': 'Shanghai Electric · Supply Chain Products', '早期供应链实践 · Michelin / Dell / Alibaba': 'Early Supply Chain Work · Michelin / Dell / Alibaba',
        '2026.05 — 至今': 'May 2026 — Present', '至今': 'Present', 'Agent 定义': 'Agent design', '任务编排': 'Task orchestration', '人机协同': 'Human AI collaboration', '安全边界': 'Safety boundaries', '履约': 'Fulfillment', '系统集成': 'Systems integration', 'AI+ 改造': 'AI upgrades', '项目管理': 'Project management', '跨文化沟通': 'Cross cultural communication', '商务英语': 'Business English', '产品研究': 'Product research', '需求分析': 'Requirements', '原型验证': 'Prototyping', '数据分析': 'Data analysis', 'Coding 协作': 'Coding collaboration', '阿里云 ACP': 'Alibaba Cloud ACP', '东华大学': 'Donghua University', '福建师范大学': 'Fujian Normal University',
        '让业务 Agent 从回答问题走向持续执行任务。': 'Moving business agents from answering questions to completing tasks over time.',
        '让供应链 Agent': 'Moving supply chain agents', '从回答走向执行。': 'from answers to action.', '供应链工作跨岗位、跨系统，也有固定节奏。': 'Supply chain work spans roles and systems, and follows recurring rhythms.', '从岗位定义，到可追踪的工作结果。': 'From role definition to trackable outcomes.', '定义岗位': 'Define roles', '明确 Agent 的职责、业务目标、交付标准，以及哪些事项需要向人汇报。': 'Set the agent’s responsibilities, business goals, delivery standards, and escalation points.', '装配能力': 'Equip capabilities', '组合可复用技能、知识和数据，并连接浏览器、MCP、CLI 或企业系统。': 'Combine reusable skills, knowledge, and data, and connect browsers, MCP, CLI, or enterprise systems.', '持续执行': 'Execute continuously', '理解目标和上下文，调用工具推进多步任务；支持周期或业务事件触发。': 'Understand goals and context, then use tools to progress multi step tasks on a schedule or business event.', '结果与确认': 'Results and approval', '沉淀执行记录、报告和待办；涉及关键业务操作时进入人工确认。': 'Keep execution records, reports, and follow ups; route critical business actions for human approval.', '自主推进任务': 'Move tasks forward', '多角色协同': 'Coordinate across roles', '关键处由人把关': 'Keep people in control', '我的职责：把 Agent 能力放进供应链产品。': 'My role: bringing agent capabilities into supply chain products.', 'Agent Z 客户端': 'Agent Z client', '供应链软件 AI+': 'AI for supply chain software', '生意管家': 'Business Manager', '让产品进入真实供应链场景。': 'Bringing products into real supply chain operations.', 'Makro 门店': 'Makro stores', '门店覆盖率': 'Store coverage', '日均用户 Token 使用量': 'Daily user token usage',
        '此文章目前提供中文版本。': 'This article is currently available in Chinese.',
        '快速链接': 'Quick links', '返回首页': 'Back to home'
,
        '产品经理 · AI 与供应链方向': 'Product Manager · AI and Supply Chain',
        '从业务、产品和技术的视角，梳理供应链 Agent 如何从问答工具走向可协同、可持续执行的岗位产品。': 'This case study explores how supply chain agents can move beyond Q&A to become role based products that collaborate and execute continuously across business, product, and technology.',
        '岗位 Agent 协同平台': 'Role based agent collaboration platform',
        '一个岗位 Agent 如何承担持续工作？': 'How can a role based agent take on ongoing work?',
        '围绕真实岗位目标定义 Agent，让它具备可连接的业务能力、连续执行任务的机制，以及清楚的人机协作边界。': 'Define agents around real role goals, with connected business capabilities, continuous task execution, and clear boundaries for human collaboration.',
        '供应链工作跨岗位、跨系统，也有固定节奏。': 'Supply chain work spans roles and systems, and follows recurring rhythms.',
        '日常运营中的查询、分析、跟进和异常处理，通常散落在不同系统和岗位之间。Agent Z 将岗位职责、可用工具和交付标准组织起来，让 Agent 能在明确边界内持续推进任务。': 'Queries, analysis, follow up, and exception handling are spread across systems and roles. Agent Z brings responsibilities, tools, and delivery standards together so agents can move work forward within clear boundaries.',
        '从岗位定义，到可追踪的工作结果。': 'From role definition to trackable outcomes.',
        '把 Agent 的工作过程拆成可设计、可配置、可追踪的产品环节。': 'Break agent work into product stages that teams can design, configure, and track.',
        '执行记录、报告和待办持续沉淀，便于用户了解任务进度并继续处理。': 'Execution records, reports, and follow ups give users a clear view of progress and what to do next.',
        'Agent Z 客户端': 'Agent Z client',
        '围绕岗位 Agent 协同平台的客户端产品工作，连接 Agent 配置、执行过程与结果交付。': 'I work on the client for a role based agent collaboration platform, connecting agent setup, execution, and delivered outcomes.',
        '推进存量供应链软件的 AI 产品探索，让 AI 能力贴近既有业务场景和工作流程。': 'I explore AI features for existing supply chain software, bringing them closer to established business scenarios and workflows.',
        '负责 AI 客户端产品框架设计，并负责商家物流履约 Agent 建设。': 'I designed the AI client framework and led logistics fulfillment agent development for merchants.',
        '157 家门店': '157 stores', '100%': '100%', '千万级': 'Tens of millions',
        '产品在泰国 Makro 全部 157 家门店落地。': 'The product is deployed across all 157 Makro stores in Thailand.',
        'Agent Z 与供应链软件完成数据打通，实现泰国门店全覆盖。': 'Agent Z connects with supply chain software and covers every Makro store in Thailand.',
        '真实业务中的持续使用，验证供应链 AI 客户端的使用强度。': 'Sustained use in live operations demonstrates the engagement of the supply chain AI client.',
        'AI 也改变了产品交付方式。': 'AI is changing how products are delivered.',
        'Planogram 项目记录了我如何用 AI 协作完成复杂定制系统的调研、设计与交付。': 'The Planogram project shows how I used AI collaboration to research, design, and deliver a complex custom system.',
        '查看 Planogram 项目复盘': 'Read the Planogram case study',
        'AI 智能表格': 'AI powered tables', '参与采购日常。': 'for everyday procurement.',
        '让表格成为业务和 Agent 的共同工作面。': 'Making the table a shared workspace for people and agents.',
        '采购数据既要便于人工判断和持续跟进，也要能被 Agent 理解并在授权的业务规则内处理。工作台围绕这两种协作方式建立统一的数据和操作入口。': 'Procurement data must support human judgment and follow up, while also being understandable to agents operating within approved business rules. The workspace provides one shared data and action layer for both.',
        '业务问题': 'Business problem', '请购单、采购订单与跟进动作分散在不同处理环节。': 'Requisitions, purchase orders, and follow up actions are handled in separate steps.',
        '智能表格': 'AI table', '把自然语言指令转成可以落到数据上的表格能力。': 'Turning natural language instructions into table operations on real data.',
        '业务工作流': 'Business workflow', '从导入、认领到订单交付和跟进，串起日常动作。': 'Connecting daily work from imports and ownership through order delivery and follow up.',
        '人机协作': 'Human and agent collaboration', '人做业务判断，Agent 处理明确任务，共用一份采购数据。': 'People make business decisions; agents handle defined tasks using the same procurement data.',
        '同一份采购数据，两种操作入口。': 'One procurement dataset, two ways to work.', '采购业务与 AI 表格能力。': 'Procurement workflows and AI table capabilities.',
        'Excel 数据导入': 'Excel import', '需求认领与跟进': 'Request ownership and follow up', 'AI 表格操作': 'AI table operations', 'Agent 业务工具': 'Agent business tools',
        '查看源码、安装说明与完整功能文档。': 'Explore the source code, setup guide, and full feature documentation.', '打开 GitHub 仓库': 'Open the GitHub repository'
,
        '面向采购员打造的 Harness 插件，将请购单与采购订单整理、需求认领和跟进，与 AI 筛选、填色和字段生成整合在同一工作台；面板与 Agent 共用宿主侧数据。': 'A Harness plugin for procurement teams that brings requisition and purchase order management, request ownership and follow up, AI filtering, formatting, and field generation into one workspace. The panel and agent share host data.',
        '我负责 Agent Z 客户端与存量供应链软件 AI+ 产品。围绕岗位化 Agent、任务调度、系统连接、协同执行和人工确认，推动 AI 能力进入真实供应链工作流。': 'I lead the Agent Z client and AI upgrades for existing supply chain software. The work brings AI into real supply chain workflows through role based agents, task scheduling, system connections, collaborative execution, and human approval.',
        '我主导生意管家 2.0 AI 客户端产品设计，围绕店长、运营、美工三类角色，规划经营洞察首页并定义文本、任务执行、创意、文档和 ChatBot 五种交互模式。产品累计服务商家超过 400 万。': 'I led the Business Manager 2.0 AI client design, planning an operations insights home for store managers, operators, and designers and defining five interaction modes: text, task execution, creative work, documents, and chatbot. The product has served more than four million merchants.',
        '设计并落地 WMS 项目初始化 CLI，将目录结构生成、AI 环境配置与蓝图规则拉取串成标准启动流程，帮助团队从空目录进入蓝图编写与开发准备。': 'I designed and delivered a WMS project setup CLI that combines directory generation, AI environment setup, and blueprint rule retrieval into a standard startup flow, helping teams move from an empty folder to blueprinting and development.',
        'AI 智能表格': 'AI tables', '采购工作流': 'Procurement workflow', 'Agent 协同': 'Agent collaboration', 'Agent 产品': 'Agent products', '供应链 AI': 'Supply chain AI', '人机协同': 'Human AI collaboration', 'AI 客户端框架': 'AI client framework', '5 种交互模式': 'Five interaction modes', '经营任务': 'Commerce operations', 'CLI 设计': 'CLI design', '项目初始化': 'Project setup', 'AI 研发工作流': 'AI development workflow',
        'DeepSeek Harness · 采购工作台': 'DeepSeek Harness · Procurement workspace', '供应链 · Agent Z': 'Supply chain · Agent Z', '生意管家 · 商家 AI': 'Business Manager · Commerce AI', '供应链工具 · WMS': 'Supply chain tools · WMS', '2026 · 独立项目': '2026 · Independent project', '2026.05 — 至今': 'May 2026 — Present'
,
        '案例导航': 'Case navigation', '产品问题': 'Product problem', '产品机制': 'Product model', '我的工作': 'My role', '项目验证': 'Evidence',
        '订单、库存、履约、仓配和异常处理通常分散在不同系统和团队里。Agent Z 的产品方向，是把供应链专家能力配置成岗位 Agent，让它们围绕真实任务持续工作，而不是只停留在单轮问答。': 'Orders, inventory, fulfillment, warehousing, and exception handling are often spread across systems and teams. Agent Z configures supply chain expertise as role based agents that work on real tasks over time, beyond one off Q&A.',
        '让供应链专家能力 可配置、可调度、可复用 。': 'Make supply chain expertise configurable, schedulable, and reusable.',
        'Agent Z 官网将产品定位为供应链 Agent 协同平台：围绕计划、采购、订单、履约、仓储等岗位配置专属 Agent，再连接业务数据、技能与工具，让 Agent 按目标持续推进任务，并把过程和结果交付给团队。': 'Agent Z is a collaboration platform for supply chain agents. It configures dedicated agents for planning, procurement, orders, fulfillment, and warehousing, then connects them to business data, skills, and tools so they can work toward goals and deliver progress and outcomes to teams.',
        '定义岗位、装配能力、持续执行、结果交付与人工确认的产品流程': 'A product flow for defining roles, equipping agents, ongoing execution, delivery, and human approval',
        '从理解需求到调用技能、浏览器和业务工具，把查询、分析与跟进串成连续工作。': 'Agents connect understanding, skills, browsers, and business tools to carry queries, analysis, and follow up through a continuous workflow.',
        '由不同岗位 Agent 分工处理子任务，并在 Agent 空间集中查看任务状态、执行记录和汇报。': 'Agents in different roles divide subtasks, while the Agent Space brings task status, execution history, and reports together.',
        '改价、放货、报关等关键动作保留确认节点，让自主执行有明确边界、过程可追溯。': 'Price changes, cargo release, and customs declarations retain approval steps, giving autonomous execution clear limits and an auditable process.',
        '以上为 Agent Z 官网公开呈现的产品机制；我的具体工作范围见下一节。': 'These product mechanisms are described on the public Agent Z website. My own scope is described in the next section.',
        '目前负责 Agent Z 客户端与存量供应链软件 AI+ 产品；此前负责「生意管家」AI 客户端产品框架设计与商家物流履约 Agent 建设。过去的 WMS 和国际化交付经验，帮助我从业务岗位、系统边界和落地流程理解 AI 产品问题。': 'I currently lead the Agent Z client and AI upgrades for existing supply chain software. Previously, I led the Business Manager AI client framework and merchant logistics fulfillment agents. My WMS and global delivery experience helps me approach AI products through role needs, system boundaries, and implementation workflows.',
        '个人职责范围来自简历；产品页面中的完整能力描述代表产品公开介绍，不等同于个人独立完成的功能清单。': 'My individual scope is based on my resume. The full capabilities described on product pages reflect the public product offering, not a list of features I built alone.',
        '以上为 Agent Z 在泰国 Makro 商业化落地的业务数据；我的职责范围见「我的工作」部分。': 'These metrics describe Agent Z’s commercial deployment at Makro in Thailand. See “My role” for my scope.',
        'Agent Z 是 4PX 的供应链 Agent 产品。产品介绍请见': 'Agent Z is 4PX’s supply chain agent product. Learn more at',
        '官方产品官网': 'Official product website'
,
        '采购没有 SRM，AI 工作台应该从哪一步开始？': 'Building an AI Procurement Workspace Without an SRM',
        'WMS 产品经理激荡三十年': 'Thirty Years of a WMS Product Manager',
        '从多维表和 Excel 出发，讨论 AI 智能表格与 Agent 如何进入采购工作流，以及本地采购库与模型调用之间的数据边界。': 'How AI tables and agents can enter procurement workflows, and where data boundaries lie between a local procurement database and model calls.',
        '从学生到 WMS 产品经理，我的人生就像一个“未上线的版本”：一直在更新，一直在热更，也一直在寻找更稳定的版本号。': 'From student to WMS product manager, my life has felt like a version that never launched: always updating, always in hotfix mode, and still looking for a more stable version number.',
        '当前持久化模型按单机、单采购员设计，AI 字段配置也只保存在当前浏览器。': 'The current persistence model is designed for one user on one machine, and AI field settings are stored in the current browser.',
        '后续阅读': 'Further reading', '文章列表': 'Articles', '产品实践': 'Product practice', '职业经历': 'Career story'

    };

    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    const navLabels = { '.nav-home': ['首页', 'Home'], '.nav-work': ['精选案例', 'Selected Work'], '.main-nav > a[href*="about.html"]': ['个人履历', 'About'], '.main-nav > a[href*="experience.html"]': ['项目经历', 'Experience'], '.main-nav > a[href*="articles.html"]': ['文章', 'Writing'], '.nav-contact': ['联系我', 'Contact'] };

    function setTextNodes(language) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            const original = originalText.get(node);
            const trimmed = original.trim();
            const key = trimmed.replace(/\s+/g, ' ');
            if (language === 'en' && translations[key]) {
                node.nodeValue = original.replace(trimmed, translations[key]);
            } else {
                node.nodeValue = original;
            }
        }
    }

    function setAttribute(element, name, zh, en, language) {
        if (!originalAttributes.has(element)) originalAttributes.set(element, {});
        const originals = originalAttributes.get(element);
        if (!(name in originals)) originals[name] = element.getAttribute(name);
        const original = originals[name];
        if (language === 'en' && original === zh) element.setAttribute(name, en);
        else element.setAttribute(name, original);
    }

    function applyLanguage(language) {
        const isEnglish = language === 'en';
        document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
        setTextNodes(language);
        const pageTitles = {
            'index.html': ['Ziyan Wang — Supply Chain Product', 'Ziyan Wang — Supply Chain AI Product'],
            'about.html': ['关于我 | Ziyan Wang', 'About | Ziyan Wang'],
            'experience.html': ['项目经历 | Ziyan Wang', 'Experience | Ziyan Wang'],
            'articles.html': ['文章 | Ziyan Wang', 'Writing | Ziyan Wang'],
            'contact.html': ['联系 | Ziyan Wang', 'Contact | Ziyan Wang'],
            'AgentZ_Project.html': ['Agent Z · 供应链 Agent 产品案例 | Ziyan Wang', 'Agent Z · Supply Chain Agent Case Study | Ziyan Wang'],
            'Procurement_AI_Table_Project.html': ['采购工作台 · AI 智能表格 | Ziyan Wang', 'AI Procurement Workspace · Intelligent Tables | Ziyan Wang'],
            'Shengyi_Guanjia_Project.html': ['生意管家 · AI 客户端框架案例 | Ziyan Wang', 'Business Manager · AI Client Framework | Ziyan Wang'],
            'Supply_Chain_CLI_Project.html': ['供应链项目脚手架 CLI | Ziyan Wang', 'Supply Chain Project Setup CLI | Ziyan Wang'],
            'AI_Agent_Project_Report.html': ['Planogram项目 - AI Agent驱动的高效开发汇报', 'Planogram Project · AI Agent Assisted Delivery'],
            'article-procurement-ai-table.html': ['采购没有 SRM，AI 工作台应该从哪一步开始？ | Ziyan Wang', 'Building an AI Procurement Workspace Without an SRM | Ziyan Wang'],
            'article-wms.html': ['WMS产品经理激荡三十年 | Ziyan Wang', 'Thirty Years of a WMS Product Manager | Ziyan Wang']
        };
        const pageName = location.pathname.split('/').pop() || 'index.html';
        const pageTitle = pageTitles[pageName];
        if (pageTitle) document.title = isEnglish ? pageTitle[1] : pageTitle[0];
        const description = document.querySelector('meta[name="description"]');
        if (description) setAttribute(description, 'content', 'Ziyan Wang，供应链 AI 产品经理，专注供应链 Agent、商家 AI 与企业软件智能化。', 'Ziyan Wang is a supply chain AI product manager focused on supply chain agents, commerce AI, and intelligent enterprise software.', language);
        for (const [selector, [zh, en]] of Object.entries(navLabels)) {
            document.querySelectorAll(selector).forEach((element) => {
                // Nav labels are the final text node, leaving the SVG intact.
                const textNode = [...element.childNodes].find((child) => child.nodeType === Node.TEXT_NODE && child.nodeValue.trim());
                if (!textNode) return;
                if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue);
                const original = originalText.get(textNode);
                textNode.nodeValue = original.replace(original.trim(), isEnglish ? en : zh);
            });
        }
        document.querySelectorAll('.main-nav').forEach((element) => setAttribute(element, 'aria-label', '主导航', 'Main navigation', language));
        document.querySelectorAll('.wordmark').forEach((element) => setAttribute(element, 'aria-label', 'Ziyan Wang 首页', 'Ziyan Wang home', language));
        const toggle = document.querySelector('.language-toggle');
        if (toggle) {
            const label = toggle.querySelector('.language-label');
            if (label) label.textContent = isEnglish ? '中文' : 'EN';
            else toggle.textContent = isEnglish ? '中文' : 'EN';
            toggle.setAttribute('aria-label', isEnglish ? 'Switch language to Chinese' : 'Switch language to English');
            toggle.setAttribute('aria-pressed', String(isEnglish));
        }
        document.querySelectorAll('.menu-toggle').forEach((button) => button.setAttribute('aria-label', isEnglish ? 'Open navigation menu' : '打开导航菜单'));
        localStorage.setItem('site-language', language);
        document.dispatchEvent(new CustomEvent('site-language-change', { detail: { language } }));
    }

    function init() {
        const header = document.querySelector('.site-header');
        if (!header) return;
        const nav = header.querySelector('.main-nav');
        const tools = document.createElement('div');
        tools.className = 'site-header-tools';
        const languageButton = document.createElement('button');
        languageButton.type = 'button';
        languageButton.className = 'language-toggle';
        languageButton.innerHTML = '<svg class="language-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg><span class="language-label">EN</span>';
        languageButton.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
        const menuButton = document.createElement('button');
        menuButton.type = 'button';
        menuButton.className = 'menu-toggle';
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-controls', 'site-main-nav');
        menuButton.innerHTML = '<span class="menu-toggle-icon" aria-hidden="true"></span>';
        if (nav) {
            nav.id = 'site-main-nav';
            menuButton.addEventListener('click', () => {
                const open = menuButton.getAttribute('aria-expanded') !== 'true';
                menuButton.setAttribute('aria-expanded', String(open));
                nav.classList.toggle('is-open', open);
            });
            nav.addEventListener('click', (event) => {
                if (event.target.closest('a')) {
                    nav.classList.remove('is-open');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });
            document.addEventListener('click', (event) => {
                if (!header.contains(event.target)) {
                    nav.classList.remove('is-open');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    nav.classList.remove('is-open');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });
        }
        tools.append(languageButton, menuButton);
        header.append(tools);
        const saved = localStorage.getItem('site-language');
        applyLanguage(saved === 'en' ? 'en' : 'zh');
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
