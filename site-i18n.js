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
        '后续阅读': 'Further reading', '文章列表': 'Articles', '产品实践': 'Product practice', '职业经历': 'Career story',

        'Agent Z · 面向供应链岗位的 Agent 协同平台': 'Agent Z · Agent collaboration for supply chain roles', '存量供应链软件 AI+ 产品': 'AI upgrades for existing supply chain software', 'Agent Z 官网演示界面': 'Agent Z product interface', '让供应链专家能力': 'Make supply chain expertise', '可配置、可调度、可复用': 'configurable, schedulable, and reusable', '查看 Agent Z 产品手册': 'View the Agent Z product guide',

        '把商家经营需求，': 'Turn commerce operations needs', '设计成 AI 客户端框架。': 'into an AI client framework.', '我主导「生意管家」2.0 AI 客户端产品设计，以商家经营为中心，围绕店长、运营、美工的日常任务，定义经营首页、AI 交互模式和能力入口。': 'I led the design of the Business Manager 2.0 AI client. Centered on merchant operations, it organizes the home page, AI interaction modes, and capability entry points around the daily work of store managers, operations teams, and designers.', '产品经理 · 淘天集团商家平台': 'Product Manager · Taotian Group Merchant Platform', '生意管家 2.0': 'Business Manager 2.0', '生意管家 · 经营任务执行': 'Business Manager · operations task execution', 'AI 生成经营策略报告': 'AI generated operations strategy report', '400 万+': '4M+', '累计使用商家': 'Merchants served', '5 种': '5', 'AI 基本交互模式': 'Core AI interaction modes', '3 类': '3', '核心经营角色：店长、运营、美工': 'Core merchant roles: store manager, operator, designer',
        '让经营问题有入口，让 AI 能力有组织。': 'Give every operations problem an entry point, and organize AI capabilities around it.', '客户端不只提供一个对话框，而是把经营洞察、任务发起、技能使用与日常工作入口放在同一套产品框架中。以下结构对应产品首页与导航中呈现的核心模块。': 'The client goes beyond chat, bringing operational insights, task initiation, skills, and daily work into one product framework. The modules below reflect the core areas in the product home and navigation.', '经营洞察': 'Operations insights', '从店铺经营状态出发，提供洞察与策略建议，帮助商家找到下一步要处理的问题。': 'Surface insights and recommendations from store performance so merchants can identify what to work on next.', '任务入口': 'Task entry points', '用自然语言发起经营任务，并通过建议问题降低第一次使用的启动成本。': 'Start operations tasks in natural language, with suggested prompts that make it easier to get started.', '能力与连接': 'Capabilities and connections', '通过技能、连接器及模型选择承接不同类型的任务，让能力入口可发现、可组合。': 'Use skills, connectors, and model selection to support different tasks, with capabilities that are easy to find and combine.', '持续工作': 'Ongoing work', '将定时任务、知识库、IM 频道与历史记录纳入客户端，支持商家持续开展日常经营工作。': 'Bring scheduled tasks, knowledge bases, IM channels, and history into the client to support ongoing operations.',
        '同一个客户端，承接五类 AI 工作方式。': 'One client for five ways of working with AI.', '根据商家的任务类型设计不同交互，而不是要求所有场景都挤进单轮问答。': 'Design interactions around the merchant’s task instead of forcing every use case into a single-turn chat.', '文本模式': 'Text', '围绕经营问题进行自然语言沟通': 'Discuss operations questions in natural language', '任务执行模式': 'Task execution', '把目标转成可推进的经营任务': 'Turn goals into actionable operations tasks', '创意模式': 'Creative work', '支持营销与商品素材创作': 'Create marketing and product content', '文档模式': 'Documents', '生成和处理经营相关文档': 'Create and work with operations documents', 'ChatBot 模式': 'Chatbot', '承接即时问答与信息获取': 'Handle quick questions and information requests',
        '我负责把商家作业动线，转成客户端产品结构。': 'I turned merchant workflows into a client product structure.', '店长': 'Store manager', '运营': 'Operations', '美工': 'Designer', 'AI 客户端框架 · 主要职责': 'AI client framework · my role', '围绕店长、运营、美工三类角色梳理日常作业动线与核心痛点。': 'Mapped daily workflows and core pain points for store managers, operations teams, and designers.', '定义以商家经营为中心的首页经营洞察与策略推荐能力。': 'Defined an operations-focused home page with insights and strategy recommendations.', '明确文本、任务执行、创意、文档和 ChatBot 五种基本交互模式。': 'Defined five core interaction modes: text, task execution, creative work, documents, and chatbot.', '推动客户端从数据感知走向实操执行，组织任务入口与 AI 能力。': 'Moved the client from surfacing data to enabling action, organizing task entry points and AI capabilities.', '产品框架的设计重点': 'Product framework principles', '用经营任务组织产品，而不是只按 AI 功能或模型能力堆叠入口。': 'Organize the product around merchant tasks, not a collection of AI features or models.', '让技能与连接器成为可发现的能力入口，同时保留商家熟悉的操作路径。': 'Make skills and connectors easy to discover while keeping familiar workflows.', '为不同工作类型匹配交互模式，减少商家理解 AI 能做什么的成本。': 'Match interaction modes to each type of work so merchants can quickly understand what AI can do.',
        '另一部分职责：把履约问题变成 Agent 场景。': 'Another area of my work: turning fulfillment challenges into agent workflows.', '商家物流履约 Agent': 'Merchant logistics fulfillment agent', '围绕正向打单发货、异常订单处理和物流预警分析等场景，负责产品设计与能力规划，探索将履约决策交给 Agent 协助处理。': 'I led product design and capability planning for label and shipment creation, exception handling, and logistics alerts, exploring how agents can help with fulfillment decisions.', '商家累计降本 10 亿+': '1B+ in merchant cost savings', '降本数据为相关产品业务累计结果；我的职责是对应产品设计与建设，不代表个人单独创造全部业务收益。': 'Cost savings are cumulative results across the related product business. My role covered product design and development, not the entire business impact.', '查看生意管家产品': 'View Business Manager', '访问生意管家官网': 'Visit the Business Manager website',

        '让 AI 智能表格，': 'Bring AI powered tables', '基于 DeepSeek Harness 构建采购业务工作台，把请购需求与采购订单整理、认领跟进和 AI 表格能力放进同一流程。采购员可以在业务面板里处理数据，也可以让 Agent 通过工具读取和更新同一份宿主数据。': 'Built on DeepSeek Harness, this procurement workspace brings requisition and purchase order management, request ownership and follow-up, and AI table features into one workflow. Buyers can work with data in the panel or ask an agent to read and update the same host data through tools.', '独立项目 · 2026': 'Independent project · 2026', 'AI 产品设计与实现': 'AI product design and implementation', '开源仓库': 'Open source', '在 GitHub 查看项目': 'View the project on GitHub', '应用场景': 'Use case', '采购请购与订单跟进': 'Purchase requisitions and order follow-up', '产品形态': 'Product format', 'Harness 右侧栏工作台': 'Harness side-panel workspace', '核心能力': 'Core capabilities', 'AI 智能表格 + Agent 工具': 'AI tables + agent tools',
        '采购员需要先整理请购明细，再筛选和认领自己的需求，随后持续维护供应商、预计发货时间和下一步动作。项目将这些处理步骤集中到一个可操作的工作台中。': 'Buyers first organize requisition details, filter and claim requests, then maintain suppliers, expected ship dates, and next steps. This project brings those tasks together in one workspace.', '复用 AI 智能表格能力，提供排序、筛选、分页、填色、分组、列配置和 AI 字段。采购员可用自然语言生成筛选与填色规则，也可为当前数据逐行生成扩展字段。': 'The workspace reuses AI table capabilities for sorting, filtering, pagination, cell coloring, grouping, column configuration, and AI fields. Buyers can create filters and color rules in natural language or generate additional fields row by row.', '需求整理': 'Requisition intake', '导入 NC 请购单，识别字段并提示缺失或重复信息。': 'Import NC requisitions, identify fields, and flag missing or duplicate information.', '认领跟进': 'Claim and follow up', '筛选需求、跨页勾选认领，维护供应商、日期、待办与备注。': 'Filter requests, claim selections across pages, and maintain suppliers, dates, tasks, and notes.', '订单交付': 'Purchase order delivery', '导入采购订单，查看明细，并同步关联需求的订单状态。': 'Import purchase orders, review details, and sync order status to linked requests.', 'AI 协作': 'AI assistance', '支持 AI 筛选、填色和逐行生成字段，模型设置可在面板内调整。': 'Use AI to filter, color, and generate fields row by row, with model settings available in the panel.',
        'HUMAN · 人来做': 'HUMAN · Buyer', '判断和维护业务信息': 'Make decisions and maintain business information', '核对导入预览与待复核明细，决定需求认领范围；补充供应商、预计发货时间、下一步待办和备注，并跟进订单交付。': 'Review imports and flagged details, decide which requests to claim, add suppliers, expected ship dates, next steps, and notes, then follow orders through delivery.', 'AGENT · Agent 来做': 'AGENT · Agent', '执行查询与重复操作': 'Handle searches and repetitive actions', '按指令查看和搜索需求、读取工作区请购文件，并通过采购工具认领需求或更新供应商等跟进信息。': 'Follow instructions to view and search requests, read requisition files in the workspace, and use procurement tools to claim requests or update supplier and follow-up details.', 'SHARED · 如何协作': 'SHARED · Collaboration', '操作进入同一工作台数据': 'Work on the same workspace data', '工作台和 Agent 调用同一套宿主采购服务、读写同一份数据。Agent 完成查询或变更后，采购员可以在工作台继续核对、补充和跟进。': 'The workspace and agent use the same host procurement service and shared data. After an agent searches or makes a change, buyers can review, add details, and continue follow-up in the workspace.',
        '采购员': 'Buyer', '右侧栏工作台': 'Side-panel workspace', '导入 · 表格 · 跟进': 'Import · tables · follow-up', 'Harness 宿主': 'Harness host', '采购服务与存储': 'Procurement service and storage', '业务规则 · 持久化 · LLM': 'Business rules · persistence · LLM', '采购工具': 'Procurement tools', '查询 · 认领 · 更新': 'Search · claim · update', 'AI 生成能力使用 Harness 的 deepseek-account 登录态；表格视图配置和 AI 字段结果保存在当前浏览器，采购明细、订单和模型设置由宿主存储。': 'AI generation uses the Harness deepseek-account session. Table view settings and AI field results are stored in the current browser; requisitions, orders, and model settings are stored by the host.', '支持 NC 请购单与采购订单表格导入、预览、字段识别和重复识别。': 'Import and preview NC requisitions and purchase order spreadsheets, with field and duplicate detection.', '支持跨页认领、批量维护，并保留采购需求的操作记录。': 'Claim requests across pages, update them in batches, and retain an activity history.', '通过自然语言生成筛选条件、颜色规则和逐行 AI 字段值。': 'Create filters and color rules in natural language, and generate AI field values row by row.', '把查询、搜索、认领和更新等采购动作注册为 Harness Agent 工具。': 'Expose procurement actions such as viewing, searching, claiming, and updating as Harness agent tools.',

        '把项目启动经验，': 'Turn project startup experience', '沉淀成可复用的交付工具。': 'into reusable delivery tools.', '我主导建设 AI 交付工具与 WMS 项目初始化 CLI，把客户调研、标准业务蓝图和项目启动准备串进更一致的交付流程，帮助团队更快从需求理解进入方案设计。': 'I led the development of AI delivery tools and a WMS project setup CLI, connecting customer research, standard business blueprints, and project startup into a consistent delivery process that helps teams move from understanding requirements to solution design.', '产品经理 · 菜鸟集团物流科技': 'Product Manager · Cainiao Logistics Technology', '供应链系统商业化交付': 'Commercial delivery of supply chain systems', '项目目标': 'Project goal', '提升 WMS 项目交付效率与标准化程度': 'Improve WMS delivery efficiency and standardization', '工具形态': 'Tools', 'AI 交付工具 + 项目初始化 CLI': 'AI delivery toolkit + project setup CLI', '交付产物': 'Deliverables', '业务蓝图与可启动的项目结构': 'Business blueprints and ready-to-use project structures',
        '把项目启动经验，变成团队可复用的交付流程。': 'Turn project startup experience into a repeatable delivery process.', '客户调研、业务蓝图和项目初始化原本分散在不同环节。我把其中可复用的部分整理进 AI 交付工具与 CLI，让团队更顺畅地从需求理解进入项目准备。': 'Customer research, business blueprints, and project setup were handled in separate steps. I brought the reusable parts into an AI delivery toolkit and CLI so teams can move more smoothly from understanding requirements to project preparation.', '项目工作': 'What I did', '让经验落实到工具和流程中。': 'Turn experience into tools and workflows.', '梳理启动规范': 'Define startup standards', '汇总 WMS 项目初始化所需的目录、配置与业务规则，明确可复用的准备步骤。': 'Consolidated the directories, configuration, and business rules needed to initialize WMS projects into reusable preparation steps.', '建设初始化 CLI': 'Build the setup CLI', '将项目结构生成、AI 环境配置和蓝图规则拉取整合为标准启动流程。': 'Combined project structure generation, AI environment setup, and blueprint rule retrieval into a standard startup flow.', '连接调研与蓝图': 'Connect research to blueprints', '将客户调研信息整理为标准业务蓝图，并提供后续设计与交付指引。': 'Turned customer research into standard business blueprints with guidance for subsequent design and delivery.', '项目结果': 'Results', '新项目有了清晰、可复用的起点。': 'New projects now have a clear, repeatable starting point.', 'AI 交付工具帮助团队把调研成果带入蓝图设计；CLI 则统一项目结构、环境配置和业务规则准备，减少从零启动的重复工作。': 'The AI delivery toolkit helps teams carry research findings into blueprint design. The CLI standardizes project structure, environment setup, and business rules, reducing repeated work at startup.', '一条更顺畅的项目启动路径。': 'A smoother path from kickoff to delivery.', '客户调研': 'Customer research', '整理业务信息': 'Organize business information', '蓝图生成': 'Blueprint creation', '沉淀标准方案': 'Create a standard solution', 'CLI 初始化': 'CLI setup', '生成项目结构与配置': 'Generate project structure and configuration', '进入交付': 'Start delivery', '开始蓝图与开发准备': 'Begin blueprinting and development preparation', 'AI 产品与供应链交付，持续互相验证。': 'AI products and supply chain delivery, each informing the other.'

    };

    const experienceTranslations = {
        'Agent Z · 供应链 Agent 协同平台': 'Agent Z · Supply Chain Agent Collaboration Platform', 'Makro 场景覆盖 · 简历口径': 'Makro deployment · resume scope', '采购工作台 · AI 智能表格': 'Procurement Workspace · AI Tables', 'AI 表格': 'AI tables', '筛选 · 填色 · 字段生成': 'Filter · color · generate fields', '查看采购工作台案例': 'View procurement workspace case study', '生意管家 · AI 客户端框架设计': 'Business Manager · AI Client Framework', '产品交互模式 · 简历口径': 'Interaction modes · resume scope', '供应链项目脚手架 · CLI': 'Supply Chain Project Setup · CLI', '查看 CLI 项目案例': 'View CLI project case study', '调研': 'Research', '蓝图': 'Blueprints', 'AI 交付工具与项目初始化': 'AI delivery toolkit and project setup', '零售陈列': 'Retail merchandising', '700万': '7M', 'Planogram AI Agent 驱动项目': 'AI Agent Driven Planogram Project',
        '首次尝试 AI Agent 驱动的纯定制化项目开发模式，用 2 人团队完成传统需要 17 人团队的复杂零售陈列管理系统。 从零基础接触 Planogram 货架图管理领域，到 4.3 个月内交付 150+ 功能点的完整系统， 实现 90.9% 成本节约和 11 倍人效提升，验证了 AI Agent 在复杂定制化项目中的巨大潜力。': 'We piloted an AI agent driven, fully customized development model, delivering a complex retail merchandising system with a 2-person team instead of the traditional 17. Starting with no Planogram domain knowledge, the team delivered a complete system with 150+ features in 4.3 months, saving 90.9% in costs and improving productivity 11x. The project demonstrated the potential of AI agents in complex custom development.', 'AI 工作流程': 'AI workflow', 'AI 辅助需求调研与业务分析，快速构建领域知识': 'Used AI to support customer discovery and business analysis, building domain knowledge quickly', '自动化蓝图设计，': 'Automated blueprint design,', '完成 Mermaid/PlantUML 流程图': 'and generated Mermaid/PlantUML process diagrams', 'AI 生成 ASCII 原型图，告别手工画原型': 'Generated ASCII prototypes with AI instead of drawing them manually', '产品研发协同开发 Demo，AI 协助代码生成': 'Worked with engineering on demos, using AI to assist with code generation', '15 分钟': '15 minutes', '完成交互式 HTML 周报自动生成': 'to automatically generate interactive HTML weekly reports', '核心成果': 'Key outcomes', '完成': 'Completed', '项系统蓝图设计（': ' system blueprints designed (', '完成度）': ' complete)', '大业务模块：主数据、空间规划、陈列管理等': ' major business areas: master data, space planning, merchandising, and more', '个核心业务模块 Demo 开发完成': ' core business module demos completed', '节约': 'Saved', '632.6 万': '6.326M', '成本，提前': 'in costs and delivered', '1.5 个月': '1.5 months', '交付': 'early', '验证小团队 + AI Agent 的无限可能': 'Demonstrated what small teams can achieve with AI agents', '定制化开发': 'Custom development', '成本优化': 'Cost optimization',

        '邮政物流': 'Postal logistics', '2000万': '20M', 'Vietnam Post 数字化转型项目': 'Vietnam Post Digital Transformation', '为越南国家邮政 Vietnam Post 提供全面数字化转型支持，负责仓储管理方案设计与系统落地实施。 基于 WMS 3.0 标准产品能力，结合越南邮政仓配服务特性，构建覆盖全国的仓配履约体系， 实现 SLA 时效规则的系统化表达与业务落地，全面赋能国家邮政运营效率提升。': 'Supported the digital transformation of Vietnam Post, leading warehouse management solution design and implementation. Building on WMS 3.0, the project adapted to postal warehousing and delivery needs to create a nationwide fulfillment network, encode SLA commitments in the system, and improve operating efficiency.', '核心功能': 'Core capabilities', 'WMS 3.0 标准能力在越南场景的本地化落地': 'Localized standard WMS 3.0 capabilities for Vietnam', '仓配服务 SLA 时效规则嵌入履约系统': 'Embedded warehousing and delivery SLA rules in the fulfillment system', '多仓协同的全国邮政履约模型搭建': 'Built a nationwide postal fulfillment model coordinated across warehouses', '多角色作业流程与任务分配体系设计': 'Designed workflows and task allocation across roles', '支持邮政体系中的服务等级与差异化处理策略': 'Supported postal service tiers and differentiated handling strategies', '提供系统级接口对接能力与后续扩展支持': 'Provided system integrations and support for future extensions', '主要成果': 'Key outcomes', '构建覆盖全国的邮政仓配服务体系模型': 'Established a nationwide postal warehousing and delivery service model', '实现 SLA 履约时效的系统内精准定义与自动监控': 'Defined fulfillment SLAs precisely in the system and enabled automatic monitoring', '将先进的仓配作业逻辑赋能 Vietnam Post 运营体系': 'Applied modern warehousing and delivery workflows to Vietnam Post operations', '推动越南邮政实现从人工驱动到系统驱动的管理模式转变': 'Helped Vietnam Post shift from manual processes to system-driven operations', '标准 WMS 能力在东南亚国家级客户成功落地': 'Successfully deployed standard WMS capabilities for a national postal operator in Southeast Asia', '海外WMS': 'International WMS', '越南国家邮政': 'Vietnam Post', 'SLA履约': 'SLA fulfillment', '仓配一体': 'Integrated warehousing and delivery',

        '赛事': 'Major events', 'APP产品经理': 'Client App Product Manager', '2000万': '20M', '米兰冬奥会赛事交通管理系统': 'Milan Winter Olympics Transport Management System', '作为 Client APP 产品经理，主导观众、运动员、官员三类用户的交通行程系统设计，涵盖注册认证、行程预订、交通调度与跨集群接驳方案等功能，保障冬奥场馆间高效流转，为数字化冬奥提供关键产品支撑。': 'As Client App Product Manager, I led transport journey design for spectators, athletes, and officials. The system covered registration, trip booking, transport dispatch, and inter-cluster transfers, helping people move efficiently between Olympic venues and supporting the event’s digital operations.', '多角色身份认证与注册流程设计': 'Designed registration and identity verification for multiple user groups', '一体化出行计划创建与行程可视化': 'Enabled end-to-end trip planning and itinerary visualization', '支持赛事日程联动的交通推荐逻辑': 'Connected event schedules to transport recommendations', '场馆间跨集群接驳与换乘指引方案': 'Designed inter-cluster transfers and directions between venues', '实时交通状态展示与变更通知': 'Displayed live transport status and service updates', '多语言、多时区国际化交互设计': 'Designed localized experiences for multiple languages and time zones', '已在冬奥测试赛阶段试运行并稳定支持': 'Successfully piloted during Olympic test events, supporting', '赛事出行': 'event journeys', '系统支持': 'System supported', '数万': 'tens of thousands of', '人多身份、跨区域行程管理': 'travelers across multiple identities and regions', '持续迭代产品版本以兼容不同场景和人群需求': 'Iterated the product to support different scenarios and user needs', '形成可扩展的国际大型赛事交通平台模型': 'Established a scalable transport platform model for major international events', '为': 'Preparing for the full launch of the', '年米兰冬奥会全面上线做产品准备': 'Milan Winter Olympics', '数字冬奥': 'Digital Olympics', '国际化出行': 'International travel', '交通调度系统': 'Transport dispatch', '赛事运营支持': 'Event operations',

        '海外咨询': 'International consulting', '咨询顾问': 'Consultant', '600 万': '6M', '马来西亚 KNB 数字化转型项目': 'KNB Digital Transformation, Malaysia', '为马来西亚本地 3PL 企业 Kontena Nasional 提供全链路供应链数字化转型咨询服务，推动传统业务全面在线化。 围绕仓储、堆场、货代等核心模块，构建一体化系统流程，助力客户逐步摆脱纸质办公，实现作业全流程数字化，推动传统物流业务向智能运营升级。': 'Advised Malaysian 3PL provider Kontena Nasional (KNB) on end-to-end supply chain digitalization, moving traditional operations online. Designed integrated workflows across warehousing, yards, and freight forwarding to reduce paper-based work, digitize operations, and support a shift toward smarter logistics.', '仓储管理流程标准化设计': 'Standardized warehouse management workflows', '堆场管理流程与箱位调度模型': 'Designed yard workflows and container-slot scheduling', '多角色操作权限与系统流程协同设计': 'Designed role-based permissions and coordinated system workflows', '打通仓-场-货代系统接口规划': 'Planned integrations across warehouse, yard, and freight systems', '支持马来西亚本地业务场景落地': 'Adapted the solution to local Malaysian operations', '系统方案已进入交付阶段，覆盖仓库、堆场、货代多业务单元': 'The solution moved into delivery across warehouse, yard, and freight operations', '逐步替代纸质记录，推动流程在线化、系统化': 'Replaced paper records with online, system-based workflows', '客户核心操作环节实现数据留痕与流程驱动': 'Added traceable records and workflow control to core operations', '支持马来西亚国家级物流企业全面数字化转型': 'Supported the end-to-end digital transformation of a national Malaysian logistics provider', '海外3PL': 'International 3PL', '流程系统化': 'Digitized workflows', '咨询设计': 'Consulting and design',

        '平台产品': 'Platform product', '负责人': 'Product Lead', '商业化': 'Commercial delivery', 'WMS3.0系统建设项目': 'WMS 3.0 Platform Development', '为提升标准产品的交付效率与业务适配能力，主导构建支持多业务场景的配置化 WMS 系统。 通过策略抽象与模块化设计，沉淀192项策略配置项与257个原子策略，形成灵活可复用的配置引擎， 该平台已广泛应用于多个商业化项目，显著提升交付效率与系统复用率。': 'To improve delivery efficiency and fit across business scenarios, I led the development of a configurable WMS platform. Strategy abstraction and modular design produced 192 configurable parameters and 257 reusable atomic strategies. The flexible configuration engine has since supported multiple commercial projects, improving delivery efficiency and reuse.', '多场景策略建模与抽象': 'Modeled and abstracted strategies across scenarios', '策略配置中心搭建': 'Built a strategy configuration center', '“所见即所得”的配置可视化交互界面': 'Designed a visual, what-you-see-is-what-you-get configuration interface', '基于竞品分析的策略抽象设计（对标 Manhattan、BlueYonder）': 'Abstracted strategies through competitor analysis, including Manhattan and Blue Yonder', '构建平台级策略配置体系': 'Established a platform-level strategy configuration system', '实现「': 'Enabled a “', '」 敏捷交付模型': '” agile delivery model', '交付周期缩短超': 'Reduced delivery cycles by more than', '多项目实现': 'Enabled multiple projects to achieve', '零': 'zero', '代码适配': 'code customization', '策略能力成为产品卖点': 'Made strategy configuration a product differentiator', '明确产品驱动项目、项目回流补强产品的建设机制': 'Established a model where products guide projects and project learnings strengthen the product', '平台化建设': 'Platform development', '敏捷交付': 'Agile delivery', 'WMS抽象能力': 'WMS abstraction', '产品复用': 'Product reuse', 'AI赋能': 'AI enablement', '产品负责人': 'Product Lead', '150万': '1.5M',

        'WMS-Copilot 智能助手项目': 'WMS Copilot Assistant', '围绕仓库运营的数据洞察与产品易用性，打造 WMS-Copilot 智能助手。 通过自动化数据分析与自然语言交互，帮助用户获取趋势洞察、优化操作理解。 结合 RAG 架构及行业知识库，显著降低系统使用门槛与培训成本。': 'Built WMS Copilot to improve warehouse data insights and usability. Automated analysis and natural-language interaction help users understand trends and operations. A RAG architecture and industry knowledge base reduce the learning curve and training costs.', '库存/作业数据的趋势分析（同比、环比）': 'Analyzed inventory and operations trends year over year and period over period', '一键生成运营指标洞察': 'Generated operational insights in one click', '自然语言交互式问答': 'Enabled natural-language Q&A', '内嵌产品手册与知识库': 'Integrated product manuals and a knowledge base', '支持多语种 AI 回答规范化（基于 RAG 架构）': 'Standardized multilingual AI responses with a RAG architecture', '场景驱动的智能问答优化': 'Improved Q&A around real operating scenarios', '实现 AI 辅助数据分析与运营建议': 'Enabled AI-assisted data analysis and operational recommendations', '用户可': 'Users can learn', '培训上手常用操作与查询': 'common operations and queries with less training', '系统培训周期从数周缩短至': 'Reduced system training from several weeks to', '天': 'days', '构建企业级 WMS 知识库并接入大模型': 'Built an enterprise WMS knowledge base connected to a large language model', '提升终端用户使用效率与满意度': 'Improved end-user efficiency and satisfaction', '智能助手': 'AI assistant', 'RAG知识库': 'RAG knowledge base', '数据洞察': 'Data insights', '运营提效': 'Operational efficiency', '140万': '1.4M',

        '沪上阿姨订单管理系统项目': 'Auntea Jenny Order Management System', '围绕茶饮连锁门店高频、小批次、短履约周期的业务特征，打造面向全国8980家门店的订单管理系统， 涵盖订单排程、库存同步、择仓择配等核心功能。 系统深度集成集团ERP、SRM与WMS，实现总部到门店全链路履约协同， 支撑日均百万级订单处理，显著提升履约准确率与运营效率，成为数智化运营的关键底座系统之一。': 'Built an order management system for Auntea Jenny’s 8,980 stores, addressing frequent orders, small batches, and short fulfillment cycles. It supports order scheduling, inventory synchronization, and warehouse and carrier selection, and integrates with group ERP, SRM, and WMS systems. The platform coordinates fulfillment from headquarters to stores, processes over a million orders a day, and improves accuracy and operating efficiency.', '订单排程与优先级控制': 'Order scheduling and priority control', '全渠道库存控制与可售判断': 'Omnichannel inventory control and availability checks', '择仓择配策略引擎': 'Warehouse and carrier selection engine', '支撑预售、新品等业务场景': 'Supported presales, new products, and other business scenarios', '与SRM/ERP系统双向集成': 'Integrated bidirectionally with SRM and ERP systems', '履约流程全链路管控': 'Managed the full fulfillment lifecycle', '支撑': 'Supported', '家门店稳定履约，日均处理订单': ' stores with stable fulfillment, processing over', '百万+': '1M+', '门店协同发货，履约准确率显著提升': 'Coordinated store shipping and significantly improved fulfillment accuracy', '系统高可用，实现': 'High availability delivered', '秒': 'second', '级响应': '-level response times', '构建茶饮零售行业专属OMS': 'Built an OMS tailored to the tea retail industry', '履约及时率提升': 'On-time fulfillment improved by', '零售OMS': 'Retail OMS', '履约排程': 'Fulfillment scheduling', '门店协同': 'Store coordination', '仓配决策引擎': 'Warehouse and delivery decision engine', '2022.12-至今': 'Dec 2022–Present',

        '服装行业': 'Apparel', '600万': '6M', 'TSI 跨国仓储管理系统项目': 'TSI Multinational Warehouse Management System', '为日本时尚品牌 TSI 构建覆盖日本、越南、上海三地的跨国仓储管理系统，聚焦服装行业特性， 设计包括 CrossDock、大宗出库、样品及 CS 销退在内的特化流程，有效提升仓储效率。 项目已完成三期合作，获得客户高度认可，系统持续迭代中。': 'Built a multinational warehouse management system for Japanese fashion brand TSI across Japan, Vietnam, and Shanghai. Designed apparel-specific workflows for cross-docking, bulk outbound orders, samples, and customer-service returns, improving warehouse efficiency. The project completed three phases and continues to evolve with strong client support.', 'CrossDock 直通分拨流程设计': 'Designed cross-docking workflows', '大宗批量出库自动化策略': 'Automated bulk outbound processing', '服装样品管理与生命周期追踪': 'Managed apparel samples and tracked their lifecycle', 'CS（客服退货）销退流程闭环管控': 'Closed the loop on customer-service returns', '三国仓库一体化系统架构': 'Integrated warehouse architecture across three countries', '多语言、多时区支持及本地化配置': 'Supported multiple languages, time zones, and local configurations', '实现三地跨国仓统一管控，交付周期 ≤': 'Unified warehouse operations across three locations, with delivery in', '个月': 'months', '项目总金额 ¥': 'Total project value ¥', '万，已完成': 'M; completed', '三': 'three', '期深度合作': 'phases of close collaboration', '仓储人力成本降低': 'Warehouse labor costs decreased by', '，出库效率显著提升': ', while outbound efficiency improved significantly', '构建服装行业标准作业流程模板': 'Created standard operating procedure templates for apparel warehouses', '获得客户长期合作意向与': 'Secured the client’s continued partnership and', '二': 'two', '次续约': 'renewals', '跨国仓储': 'Multinational warehousing', '多语种支持': 'Multilingual support',

        '零售': 'Retail', '800万': '8M', '正大集团 Makro iWMS 商超智能仓储项目': 'CP Group Makro iWMS Retail Warehouse Project', '为正大集团旗下 Makro 商超品牌构建智能仓储管理系统，覆盖全国 100+ 门店的仓配履约需求。 围绕商超行业高频补货、多SKU管理、保质期控制等核心场景， 设计包括智能补货、动态库位、批次管理在内的专业化解决方案，显著提升仓储运营效率与库存周转率。': 'Built an intelligent warehouse management system for CP Group’s Makro retail brand, supporting fulfillment across 100+ stores in Thailand. The solution addresses frequent replenishment, large SKU assortments, and shelf-life controls with smart replenishment, dynamic slotting, and batch management, improving warehouse efficiency and inventory turnover.', '智能补货策略与库存预警机制': 'Designed smart replenishment and inventory alerts', '动态库位分配与货位优化算法': 'Developed dynamic slotting and location optimization', '商品批次管理与保质期追踪': 'Managed product batches and tracked expiration dates', '多温区仓储作业流程设计': 'Designed workflows for multiple temperature zones', '门店协同补货与配送计划优化': 'Coordinated store replenishment and optimized delivery plans', '与 Makro ERP 系统深度集成': 'Integrated with Makro ERP', '支撑全国': 'Supported operations across', '家 Makro 门店稳定运营': ' Makro stores', '库存周转率提升': 'Inventory turnover improved by', '，缺货率降低': ', while out-of-stock rates fell by', '仓储作业效率提升': 'Warehouse productivity improved by', '，人力成本显著优化': ', with significant labor savings', '构建商超行业标准化 WMS 解决方案': 'Created a standardized WMS solution for supermarkets', '获得正大集团高度认可，达成长期合作意向': 'Earned CP Group’s recognition and a long-term partnership', '商超WMS': 'Supermarket WMS', '智能补货': 'Smart replenishment', '批次管理': 'Batch management', '多温区仓储': 'Multi-temperature warehousing',

        '海外仓建设': 'Overseas warehouse development', '400万': '4M', '乐歌海外仓储管理系统': 'Loctek Overseas Warehouse Management System', '从 0 到 1 搭建乐歌海外仓储管理系统，覆盖入库、库存、出库等全流程作业场景，支持 2B/2C 多业务类型商品管理。 系统具备批次追踪、异常处理、库内唯一码管理、补货与波次策略等核心能力，满足大规模仓储场景的作业效率与管理精度双重要求。': 'Built Loctek’s overseas warehouse management system from the ground up, covering inbound, inventory, and outbound operations for both B2B and B2C goods. Core capabilities include batch tracking, exception handling, unique in-warehouse codes, replenishment, and wave planning to support efficient and accurate operations at scale.', '海外仓 2B / 2C 全流程 WMS 功能设计': 'Designed end-to-end WMS capabilities for B2B and B2C overseas warehouses', '商品批次管理与库内唯一码追踪': 'Tracked product batches and unique in-warehouse codes', '异常订单识别与处理机制': 'Identified and handled order exceptions', '动态补货策略与优先级模型': 'Designed dynamic replenishment and prioritization models', '波次拣选规则配置与执行引擎': 'Configured and executed wave-picking rules', '支持多种履约类型与复杂出库路径': 'Supported multiple fulfillment types and complex outbound routes', '系统已部署至面积达': 'Deployed to an overseas warehouse spanning', '12万㎡': '120,000', '的大型海外仓': ' m² facility', '日均发货量超': 'Handled more than', '50万': '500,000', '单': 'orders per day', '团队凭借产品能力获颁"': 'The team received the “', '卡恩奖：年度十大优秀WMS服务商': 'Kahn Award: Top 10 WMS Providers of the Year', '项目方案成功入选《': 'The solution was selected for the ', '中国 WMS 行业蓝皮书》': 'China WMS Industry Blue Book', '海外仓WMS': 'Overseas WMS', '行业奖项': 'Industry award', '蓝皮书入选': 'Industry report selection',

        'Planogram AI Agent 驱动项目': 'Planogram AI Agent Project', 'Vietnam Post 数字化转型项目': 'Vietnam Post Digital Transformation', '米兰冬奥会赛事交通管理系统': 'Milan Winter Olympics Transport Management System', '马来西亚 KNB 数字化转型项目': 'KNB Digital Transformation, Malaysia', 'WMS3.0系统建设项目': 'WMS 3.0 Platform Development', 'WMS-Copilot 智能助手项目': 'WMS Copilot Assistant', '沪上阿姨订单管理系统项目': 'Auntea Jenny Order Management System', 'TSI 跨国仓储管理系统项目': 'TSI Multinational Warehouse Management System', '正大集团 Makro iWMS 商超智能仓储项目': 'CP Group Makro iWMS Retail Warehouse Project', '乐歌海外仓储管理系统': 'Loctek Overseas Warehouse Management System'
    };

    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    const originalMarkup = new WeakMap();
    const experienceInlineTranslations = {
        '自动化蓝图设计，': 'Automated blueprint design in ', '完成 Mermaid/PlantUML 流程图': ' to generate Mermaid/PlantUML flowcharts',
        '完成交互式 HTML 周报自动生成': ' to automatically generate interactive HTML weekly reports',
        '成本，提前': ' in costs and delivered ', '交付': ' early',
        '已在冬奥测试赛阶段试运行并稳定支持': 'Successfully piloted during Olympic test events, supporting ',
        '赛事出行': ' event journeys', '系统支持': 'System supports ', '人多身份、跨区域行程管理': ' travelers across multiple identities and regions',
        '为': 'Preparing for the full launch of the ', '年米兰冬奥会全面上线做产品准备': ' Milan Winter Olympics',
        '用户可': 'Users can handle core tasks and searches with', '0': 'zero', '培训上手常用操作与查询': ' training',
        '支撑': 'Supported ', '家门店稳定履约，日均处理订单': ' stores with stable fulfillment, processing over ',
        '系统高可用，实现': 'High availability delivered ', '履约及时率提升': 'On-time fulfillment improved by ',
        '多项目实现': 'Enabled multiple projects to achieve ', '代码适配': 'code adaptation',
        '获得客户长期合作意向与': 'Secured the client’s continued partnership and ', '次续约': ' renewals',
        '系统已部署至面积达': 'Deployed to a ', '的大型海外仓': ' m² overseas warehouse',
        '日均发货量超': 'Handled more than ', '单': ' orders per day', '600': '6', '8980': '8,980',
        '万，已完成': 'million; completed ', '期深度合作': ' phases of close collaboration',
        '中国 WMS 行业蓝皮书》': ' China WMS Industry Blue Book'
    };
    const navLabels = { '.nav-home': ['首页', 'Home'], '.nav-work': ['精选案例', 'Selected Work'], '.main-nav > a[href*="about.html"]': ['个人履历', 'About'], '.main-nav > a[href*="experience.html"]': ['项目经历', 'Experience'], '.main-nav > a[href*="articles.html"]': ['文章', 'Writing'], '.nav-contact': ['联系我', 'Contact'] };

    function translateProofMetrics(language) {
        const englishMetrics = [['~5', 'B'], ['4', 'years'], ['6', 'countries'], ['130', 'M+']];
        document.querySelectorAll('.proof-strip .proof-item strong').forEach((metric, index) => {
            if (!originalMarkup.has(metric)) originalMarkup.set(metric, metric.innerHTML);
            if (language !== 'en' || !englishMetrics[index]) {
                metric.innerHTML = originalMarkup.get(metric);
                return;
            }
            const [value, unit] = englishMetrics[index];
            const unitLabel = document.createElement('span');
            unitLabel.textContent = unit;
            metric.replaceChildren(document.createTextNode(value), unitLabel);
        });
    }

    function setTextNodes(language) {
        const isExperiencePage = location.pathname.split('/').pop() === 'experience.html';
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            const original = originalText.get(node);
            const trimmed = original.trim();
            const key = trimmed.replace(/\s+/g, ' ');
            const translation = isExperiencePage ? (experienceInlineTranslations[key] ?? experienceTranslations[key] ?? translations[key]) : translations[key];
            if (language === 'en' && translation) {
                node.nodeValue = original.replace(trimmed, translation);
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

    const pageAttributeTranslations = {
        'AgentZ_Project.html': [
            ['meta[name="description"]', 'content', 'Ziyan Wang 的 Agent Z 项目案例：供应链岗位 Agent、任务协作与真实业务系统连接。', 'Agent Z case study by Ziyan Wang: role-based supply chain agents, task collaboration, and connections to real business systems.'],
            ['img[src*="agentz-product-workspace.jpg"]', 'alt', 'Agent Z 官网展示的仓网规划专家与岗位 Agent 团队协作界面，包含任务结果和供应链分析示例', 'Agent Z interface showing warehouse network planning and role-based agent collaboration, with task results and supply chain analysis examples'],
            ['nav.nav', 'aria-label', '案例导航', 'Case navigation'],
            ['.agentz-flow', 'aria-label', '定义岗位、装配能力、持续执行、结果交付与人工确认的产品流程', 'Product flow for defining roles, equipping agents, ongoing execution, delivering results, and human approval']
        ],
        'Shengyi_Guanjia_Project.html': [
            ['meta[name="description"]', 'content', '生意管家 2.0 AI 客户端框架设计案例：从商家角色与经营任务出发，组织 AI 交互模式和经营工作入口。', 'Business Manager 2.0 AI client framework case study: organizing AI interactions and operations entry points around merchant roles and tasks.'],
            ['img[src*="shengyi-guanjia-report-workflow.jpg"]', 'alt', '生意管家分析店铺运营情况并生成经营策略报告的任务执行界面', 'Business Manager task interface analyzing store operations and generating a strategy report'],
            ['.sg-metrics', 'aria-label', '产品规模与框架成果', 'Product scale and framework outcomes']
        ],
        'Procurement_AI_Table_Project.html': [
            ['meta[name="description"]', 'content', 'DeepSeek Harness 采购工作台案例：把请购单与订单处理、AI 智能表格和 Agent 共用数据能力放进同一采购工作流。', 'DeepSeek Harness procurement workspace case study: bringing requisition and order processing, AI tables, and shared agent data into one workflow.'],
            ['img[src*="procurement-ai-table-workspace.png"]', 'alt', 'DeepSeek Harness 采购工作台实际界面截图，展示工作台仪表盘与 AI 采购进展分析对话', 'Screenshot of the DeepSeek Harness procurement workspace, showing its dashboard and an AI conversation about procurement progress'],
            ['.proc-context', 'aria-label', '项目概览', 'Project overview'],
            ['.proc-architecture', 'aria-label', '数据协作架构', 'Data collaboration architecture']
        ],
        'Supply_Chain_CLI_Project.html': [
            ['meta[name="description"]', 'content', '供应链项目脚手架 CLI 案例：把客户调研、WMS 初始化和 AI 蓝图编写准备转为可复用的项目启动流程。', 'Supply chain project setup CLI case study: turning customer research, WMS initialization, and AI blueprint preparation into a repeatable project kickoff flow.'],
            ['img[src*="supply-chain-cli-cover.jpg"]', 'alt', '供应链项目 CLI 初始化流程的视觉呈现，展示终端命令、项目结构与 WMS 业务模块', 'Visual overview of the supply chain project CLI setup flow, with terminal commands, project structure, and WMS modules'],
            ['.cli-context', 'aria-label', '项目概览', 'Project overview']
        ]
    };

    function translatePageAttributes(language) {
        const pageName = location.pathname.split('/').pop();
        if (pageName === 'experience.html') {
            const imageAlts = {
                'Planogram AI Agent 驱动项目': 'Planogram AI Agent project',
                'Vietnam Post 数字化转型项目': 'Vietnam Post digital transformation project',
                '米兰冬奥会赛事交通管理系统': 'Milan Winter Olympics transport management system',
                '马来西亚 KNB 数字化转型项目': 'KNB digital transformation project in Malaysia',
                'WMS3.0系统建设项目': 'WMS 3.0 platform development project',
                'WMS-Copilot 智能助手项目': 'WMS Copilot assistant project',
                '沪上阿姨订单管理系统项目': 'Auntea Jenny order management system project',
                'TSI 跨国仓储管理系统项目': 'TSI multinational warehouse management system project',
                '正大集团 Makro iWMS 商超智能仓储项目': 'CP Group Makro iWMS retail warehouse project',
                '乐歌海外仓储管理系统': 'Loctek overseas warehouse management system'
            };
            document.querySelectorAll('main img').forEach((image) => {
                const originalAlt = originalAttributes.get(image)?.alt ?? image.getAttribute('alt');
                const englishAlt = imageAlts[originalAlt];
                if (englishAlt) setAttribute(image, 'alt', originalAlt, englishAlt, language);
            });
        }
        for (const [selector, name, zh, en] of pageAttributeTranslations[pageName] || []) {
            document.querySelectorAll(selector).forEach((element) => setAttribute(element, name, zh, en, language));
        }
    }

    function applyLanguage(language) {
        const isEnglish = language === 'en';
        document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
        setTextNodes(language);
        translateProofMetrics(language);
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
        translatePageAttributes(language);
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
