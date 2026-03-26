export interface ProjectDetail {
  problem: string;
  solution: string;
  process: string[];
  results: string;
  marketInsight?: string;
  visualStrategy?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  video?: string;
  year: string;
  tags: string[];
  details: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: "dtwo",
    title: "DTWO 智能护理机",
    category: "3D 概念 / 产品视觉",
    description: "打破家电原有物理边界，将 AI、等离子等硬核技术转化为具有呼吸感的视觉奇观。",
    image: "https://i.postimg.cc/3WM78H93/hu-li-ji.png",
    video: "https://github.com/GXG-6527/my-website-videos/raw/refs/heads/main/%E6%8A%A4%E7%90%86%E6%9C%BA%E5%90%88%E6%88%90-1_20260325_01275757.mp4",
    year: "2023",
    tags: ["C4D", "Octane", "产品设计"],
    details: {
      problem: "传统家电广告往往局限于“家居场景+功能罗列”，导致 AI、等离子等看不见的硬核技术难以被直观感知。",
      solution: "采用“微观+宏观”互文视角。利用粒子动力学和高精度微距镜头，将看不见的技术具象化为“看得见的奇观”。",
      process: [
        "深度市场调研：发现高净值人群对家电的要求已不再是功能满足，而是空间融合感与“静谧美学”。",
        "视觉策略：确立“科技禅意”的美学基调。用极简的自然元素（水面、云层）对比高度精密的工业结构。",
        "技术落地：利用粒子动力学解算出一件“由光影组成”的裙子，象征衣物被护理后“焕活新生”的灵动状态。",
        "叙事逻辑：从宏观探境到气象具象化，再到微观赋能与边界探索，建立产品“高端、未来、自然”的品牌心智。"
      ],
      results: "为客户交付了一套脱离同质化竞争的高端视觉资产，极大提升了产品的溢价感和品牌护城河。",
      marketInsight: "消费者需要一种能够体现“秩序感”和“静谧美学”的产品。",
      visualStrategy: "科技禅意风格，表达“科技的尽头是回归自然”的理念。"
    }
  },
  {
    id: "sansi",
    title: "善思智能洗衣护理机",
    category: "产品视觉呈现",
    description: "探讨“科技与自然的共生”，实现从宏观产品形态到微观清洁原理的流畅转场。",
    image: "https://i.postimg.cc/13vmFb3r/xi-yi-ji.png",
    video: "https://github.com/GXG-6527/my-website-videos/raw/refs/heads/main/%E5%96%84%E6%80%9D%E6%B4%97%E8%A1%A3%E6%9C%BA%E5%8E%8B%E7%BC%A9.mp4",
    year: "2024",
    tags: ["流体仿真", "微距摄影", "C4D"],
    details: {
      problem: "高端洗衣机需要从感官上解决“深层洁净”的承诺，而不仅仅是枯燥的参数堆砌。",
      solution: "摒弃说明书式的拆解，采用“情绪化叙事 + 物理级仿真”，通过微观镜头的极端写实带来视觉震撼。",
      process: [
        "微观模拟：展示微小水粒子如星辰般穿梭于交织的纤维间，物理级模拟吸附过程。",
        "动态流线可视化：利用光迹线追踪气流轨迹，展示无死角包裹衣物的动态感。",
        "粒子消散特效：将污渍设计为不稳定的“暗色颗粒”，在光照瞬间发生物理性碎裂与剥离。",
        "视觉风格：极简主义 + 科技蓝灰调。利用高光泽金属材质与通透的玻璃质感体现高端品质。"
      ],
      results: "30 秒的视频取代了 5000 字的说明书，让用户一眼看懂洗衣护理的原理，支撑其高端价格段的市场定位。",
      marketInsight: "高端家电市场正经历从“功能驱动”向“感官驱动”的转型。"
    }
  },
  {
    id: "dogo-brand",
    title: "DOGO 品牌全案设计",
    category: "品牌全案 / 3D 商业案例",
    description: "从产品包装、宣传物料到品牌图形标识的全新设计，助力品牌从单纯“卖产品”的竞争瓶颈中跳脱。",
    image: "https://i.postimg.cc/152t7kQ9/99cc6c399aca79dec32d8bcc2a24bbc3.png",
    video: "https://github.com/GXG-6527/my-website-videos/raw/refs/heads/main/%E5%BA%93%E5%B0%94%E8%BE%9B%E9%81%9B%E7%8B%97%E5%99%A8%E5%8E%8B%E7%BC%A9.mp4",
    year: "2024",
    tags: ["品牌全案", "视觉升级", "C4D"],
    details: {
      problem: "库尔辛作为一个遛宠品牌，面临市场同质化严重、用户痛点难以通过单一产品解决的困境。传统遛宠设备笨重且缺乏互动感，导致品牌力难以提升。",
      solution: "以“模拟狩猎/诱饵追逐”为核心场景，打造“DOGO”子品牌概念。通过全链路视觉升级，将专业的机械装置转译为高亲和力的消费级电子产品，实现品牌力的全面进化。",
      process: [
        "品牌概念构建：DOGO 代表了库尔辛运动的品牌精神。字母 O 的设计结合了狗狗玩具球、抛圈等狗狗爱玩的物体，圆角设计让整体更舒服，没有攻击性，同时也代表着一种“哇噢”的情绪。",
        "视觉系统开发：确立“活力橙”为主色调，暗示速度与动态，代表激情与能量。这种色彩在户外环境中极具辨识度，且具有开创性。",
        "产品矩阵设计：研发遛狗器（WALKER）与拾便器（URINAL）两款产品。遛狗器旨在解决都市人群“人宠精力不匹配”的痛点，将专业宠物运动转化为家庭潮玩；拾便器则主打轻装出行、高效收纳，告别尴尬。",
        "社会效益思考：简易的人宠互动产品能在短时间内缓解因时间问题导致的人宠关系淡化问题。安全地与宠物娱乐，避免宠物因精力过剩破坏物品，减少城市街道污染。"
      ],
      results: "成功构建了一套可跨媒介复用的高精度视觉符号资产。通过“科技碰撞萌趣”的核心理念，有效降低了品牌的商业沟通成本，助力新品上市首月销量突破历史峰值。",
      marketInsight: "随着人口老龄化和情感需求增加，宠物提供了重要的情感寄托。高净值人群对宠物的身心健康日益关注，需要一种能够体现“生活质感”和“极简美学”的专业设备。",
      visualStrategy: "极简科技美学。采用高饱和度的“活力黄”与大面积的“自然绿”形成强烈视觉互补，既建立了科技创新的品牌识别度，又赋予了产品健康的户外联想。"
    }
  },
  {
    id: "bird-ar",
    title: "雷鸟 AR 眼镜视觉体系",
    category: "科技 / 交互演示",
    description: "用极具冲击力且直观的视觉语言，翻译枯燥的技术参数，直接打消消费者的购买顾虑。",
    image: "https://i.postimg.cc/bvP5zvhD/AR-yan-jing.png",
    video: "https://github.com/GXG-6527/my-website-videos/raw/refs/heads/main/%E9%9B%B7%E9%B8%9F%E8%A7%86%E8%A7%89-1.mp4",
    year: "2024",
    tags: ["AR", "UI 设计", "RealFlow"],
    details: {
      problem: "AR 眼镜常被视为脆弱的精密仪器，用户对日常通勤中的小雨、运动时的汗水充满担忧。",
      solution: "视觉化“全天候防护”。利用高强度的流体模拟，让水流以极具破坏力的方式冲刷眼镜，展现其耐用性。",
      process: [
        "视觉化“无缝生态”：构建“手机操作-眼前成像”的完整链路，证明 AR 眼镜是手机生态的自然延伸。",
        "环境焦虑解决：利用 RealFlow 制作细密的水滴挂壁和水膜爆发，增强真实感与物理打击感。",
        "真实光学折射：模拟雷鸟的衍射光波导结构，在渲染器中单独调节镜片的 IOR 与透射参数。",
        "动画节奏：交互部分使用线性节奏表现精准；流体爆发部分使用减速弹出增强物理反馈。"
      ],
      results: "成功将形象从“极客尝鲜玩具”拉升为“稳定、耐用、高效的日常全天候智能伴侣”。"
    }
  },
  {
    id: "retro-speaker",
    title: "白噪音睡眠音响",
    category: "情绪短片 / 工业设计",
    description: "针对现代人“数字疲劳”与失眠痛点创作，将产品定位为“有温度的精神避难所”。",
    image: "https://i.postimg.cc/pr09dr4L/fu-gu-zhu-mian-deng.png",
    video: "https://github.com/GXG-6527/my-website-videos/raw/refs/heads/main/%E7%99%BD%E5%99%AA%E7%81%AF%E5%8E%8B%E7%BC%A9.mp4",
    year: "2023",
    tags: ["灯光设计", "写实材质", "情绪叙事"],
    details: {
      problem: "市面上现有的智能音箱多采用冰冷的金属线条，在脆弱的睡前场景中显得过于理性、锐利。",
      solution: "构建“时间节律下的情绪避难所”。采用极其克制、充满“呼吸感”的视觉语言，强调原木与布艺的温度。",
      process: [
        "视觉白噪音：相比高反光的现代材质，原木纹理与哑光皮革自带“温度感”，对光线产生漫反射。",
        "叙事结构：以清晨、午后至深夜的时间流逝为暗线，顺应人体的生物钟节律。",
        "仪式感交互：微距特写旋钮表面唱片纹理与机械拨杆，引导用户完成心理节奏的切换。",
        "技术难点：挑战了大跨度的时间流转光影过渡，运用多通道渲染与分层灯光控制。"
      ],
      results: "实现了“去屏幕化”的慢生活态度，为被信息洪流裹挟的人们构建了一个温暖、宁静的精神避难所。"
    }
  }
];

export const experiences = [
  {
    company: "广州市枫丹医疗器械有限公司",
    role: "资深三维设计师",
    period: "2024.12 - 2025.10",
    description: "统筹公司全品牌视觉体系搭建与落地，制定符合医疗器械行业监管要求的全场景视觉制作规范，助力成功打开高端医疗市场。"
  },
  {
    company: "广东伟经金属制造有限公司",
    role: "三维动画师",
    period: "2023.11 - 2024.12",
    description: "负责审核与把控电商详情页全流程设计与落地，搭建公司全产品体系三维动画素材库，大幅提升品牌推广标准化效果。"
  },
  {
    company: "佛山市一不加点设计策划有限公司",
    role: "资深三维动画设计师",
    period: "2021.08 - 2023.11",
    description: "全面负责商业项目从前期创意规划到最终技术落地的全流程，精通 PBR 材质工艺与 ACES 色彩管理，服务 TCL、九阳等头部客户。"
  }
];

export const skills = [
  "Cinema 4D", "Redshift (RS)", "Octane (OC)", "After Effects", "Premiere Pro", 
  "Stable Diffusion", "Midjourney", "PBR 材质工艺", "ACES 色彩管理",
  "品牌全案设计", "电商视觉呈现", "动态图形设计"
];

export const productRenderings = [
  { id: 1, title: "扫地机器人", image: "https://i.postimg.cc/NjB0gD65/sao-de-ji-qi-ren.png" },
  { id: 2, title: "双加热系统", image: "https://i.postimg.cc/GtLDTRYt/ka-fei-ji-nei-bu-jie-gou.jpg" },
  { id: 3, title: "蒸汽系统", image: "https://i.postimg.cc/jd815dNz/zheng-qi-xi-tong.jpg" },
  { id: 4, title: "零件内部结构", image: "https://i.postimg.cc/JzfPDyhy/ling-jian-nei-bu-jie-gou-zhan-shi.jpg" },
  { id: 5, title: "研磨系统展示", image: "https://i.postimg.cc/d142BDJ9/yan-mo-xi-jie.jpg" },
  { id: 6, title: "辅食机内部展示", image: "https://i.postimg.cc/PJCwQ46F/222.png" },
  { id: 7, title: "豆浆机内部展示", image: "https://i.postimg.cc/jCVLQrn7/3333.png" },
  { id: 8, title: "清洁系统细节", image: "https://i.postimg.cc/909GjbGn/qing-jie-xi-tong.jpg" },
];
