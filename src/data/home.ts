import type { Locale } from "../i18n";

const common = {
  usernames: ["Jy", "JyJyJcr"],
  account: "JyJyJcr",
  email: "junya-yk@g.ecc.u-tokyo.ac.jp",
  github: "https://github.com/JyJyJcr",
} as const;

const content = {
  en: {
    meta: {
      title: "Main Page",
      description: "Personal homepage of Jy.",
    },
    hero: {
      eyebrow: "Physics / Computation / Open Source",
      name: "Junya Yokokura",
      about:
        "I study computational physics and enjoy turning abstract physical questions into clear, reproducible experiments. My interests include statistical mechanics, complex systems, numerical simulation, and the design of scientific software.",
      labels: {
        usernames: "Common usernames",
        affiliation: "Affiliation",
      },
      affiliation:
        "Tōdō Laboratory · Department of Physics · Graduate School of Science · The University of Tokyo",
    },
    sections: {
      history: "History",
      projects: "Projects",
      papers: "Papers",
      contact: "Contact",
    },
    history: [
      {
        period: "2025/04 — present",
        title: "Master's student in Physics",
        detail:
          "Tōdō Laboratory, Department of Physics, Graduate School of Science, The University of Tokyo",
      },
      {
        period: "2022/08 — 2025/03",
        title: "Undergraduate student in Physics",
        detail:
          "Department of Physics, Faculty of Science, The University of Tokyo",
      },
      {
        period: "2021 — 2022/07",
        title: "Student in the College of Arts and Sciences",
        detail:
          "The University of Tokyo's first two years are organized through its College of Arts and Sciences.",
      },
      {
        period: "2018 — 2021",
        title: "High school student",
        detail: "Tochigi Prefectural Moka High School",
      },
    ],
    papers: [
      {
        title: "Paper title placeholder",
        description: "Publication details will be added here.",
      },
    ],
    projects: [
      {
        title: "Tensory",
        description:
          "A Rust framework for tensor operations with generic backends.",
        tech: ["Rust", "Linear algebra"],
      },
      {
        title: "APOBLAST",
        description:
          "Reproducible notebooks for visualizing time evolution and eigenstate properties in model Hamiltonians.",
        tech: ["Python", "Symmetry", "Linear algebra"],
      },
      {
        title: "Open-source contributions",
        description:
          "Tools and documentation for sharing research notes, talks, and project updates.",
        tech: ["Astro", "TypeScript", "GitHub Pages"],
      },
    ],
    labels: { email: "Email", github: "GitHub" },
  },
  ja: {
    meta: {
      title: "メインページ",
      description: "Jyの個人ホームページ。",
    },
    hero: {
      eyebrow: "Physics / Computation / Open Source",
      name: "横倉 淳也",
      about:
        "東大理物の修士課程生。で、物理的な直観・数理モデル・科学計算の交差点に関心を持って研究しています。",
      labels: {
        usernames: "ユーザー名",
        affiliation: "所属",
      },
      affiliation: "東京大学大学院理学系研究科 物理学専攻 藤堂研究室",
    },
    sections: {
      history: "経歴",
      projects: "プロジェクト",
      papers: "論文",
      contact: "連絡先",
    },
    history: [
      {
        period: "2025 — 現在",
        title: "物理学専攻 修士課程",
        detail: "東京大学大学院理学系研究科 物理学専攻 藤堂研究室",
      },
      {
        period: "2022/07 — 2025",
        title: "物理学科 学部課程",
        detail: "東京大学理学部物理学科",
      },
      {
        period: "2021 — 2022/07",
        title: "前期教養学部",
        detail: "東京大学教養学部。東京大学の特殊な進学振分制度による所属。",
      },
      {
        period: "2018 — 2021",
        title: "高等学校",
        detail: "栃木県立真岡高等学校",
      },
    ],
    papers: [
      {
        title: "論文タイトル（仮）",
        description: "論文情報を後日掲載します。",
      },
    ],
    projects: [
      {
        title: "Tensory",
        description:
          "汎用バックエンドに対応したテンソル演算のためのRustフレームワーク。",
        tech: ["Rust", "線形代数"],
      },
      {
        title: "APOBLAST",
        description:
          "モデルハミルトニアンの時間発展と固有状態を可視化する再現可能なノートブック。",
        tech: ["Python", "対称性", "線形代数"],
      },
      {
        title: "OSS貢献",
        description:
          "研究ノート、発表、プロジェクトの更新を共有するためのツールとドキュメント。",
        tech: ["Astro", "TypeScript", "GitHub Pages"],
      },
    ],
    labels: { email: "メール", github: "GitHub" },
  },
} as const satisfies Record<Locale, unknown>;

export { common, content };
