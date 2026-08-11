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
        "Second-year master's student in physics at the University of Tokyo, working in computational physics.",
      labels: {
        usernames: "Usernames",
        affiliation: "Affiliation",
        interests: "Research interests",
      },
      interests: ["Tensor networks", "Parallel computing"],
      affiliation:
        "Department of Physics, Graduate School of Science, The University of Tokyo · Tōdō Laboratory",
    },
    history: {
      label: "History",
      entries: [
        {
          period: "2025/04 — present",
          title: "Master's program",
          detail:
            "Department of Physics, Graduate School of Science, The University of Tokyo · Tōdō Laboratory",
        },
        {
          period: "2022/08 — 2025/03",
          title: "Undergraduate program",
          detail:
            "Department of Physics, Faculty of Science, The University of Tokyo",
        },
        {
          period: "2021/04 — 2022/07",
          title: "Undergraduate liberal arts program",
          detail: "College of Arts and Sciences, The University of Tokyo",
        },
      ],
    },
    projects: {
      label: "Projects",
      entries: [
        {
          title: "Tensory",
          description:
            "A low- to mid-level tensor network library implemented in Rust, combining type-system-based abstraction and extensibility with RAII-style resource management through lifetimes.",
          tech: ["Rust", "Tensor networks", "Linear algebra"],
        },
        {
          title: "APOBLAST",
          description:
            "A library that narrows the search space for equation discovery using symmetry.",
          tech: [
            "Python",
            "Symmetry",
            "Equation discovery",
            "Symbolic computation",
          ],
        },
        {
          title: "Open-source contributions",
          description:
            "Contributions to the open-source community, including issues, pull requests, and forks for problems encountered in practice.",
          tech: ["Nix", "Nginx", "WSL", "And more ..."],
        },
      ],
    },
    papers: {
      label: "Papers",
      entries: [
        {
          title:
            "Symmetry-Informed Term Filtering for Continuum Equation Discovery",
          description: "A paper associated with APOBLAST.",
        },
      ],
    },
    contacts: {
      label: "Contact",
      entries: { email: "Email", github: "GitHub" },
    },
  },
  ja: {
    meta: {
      title: "メインページ",
      description: "Jyの個人ホームページ。",
    },
    hero: {
      eyebrow: "物理・計算・オープンソース",
      name: "横倉 淳也",
      about: "東大理物の修士2年。計算物理学の研究をしています。",
      labels: {
        usernames: "ユーザー名",
        affiliation: "所属",
        interests: "関心領域",
      },
      interests: ["テンソルネットワーク", "並列計算"],
      affiliation: "東京大学大学院理学系研究科 物理学専攻 藤堂研究室",
    },
    history: {
      label: "経歴",
      entries: [
        {
          period: "2025/04 — 現在",
          title: "修士課程",
          detail: "東京大学 大学院理学系研究科 物理学専攻 藤堂研究室",
        },
        {
          period: "2022/08 — 2025/03",
          title: "学部後期課程",
          detail: "東京大学 理学部 物理学科",
        },
        {
          period: "2021/04 — 2022/07",
          title: "学部前期課程",
          detail: "東京大学 教養学部 前期課程",
        },
        // {
        //   period: "2018/04 — 2021/03",
        //   title: "高校",
        //   detail: "栃木県立真岡高等学校",
        // },
      ],
    },
    projects: {
      label: "プロジェクト",
      entries: [
        {
          title: "Tensory",
          description:
            "Rustで実装された、低〜中レベルテンソルネットワークライブラリ。型システムによる抽象化・拡張性と、ライフタイムによるRAIIな資源管理を両立。",
          tech: ["Rust", "テンソルネットワーク", "線形代数"],
        },
        {
          title: "APOBLAST",
          description: "対称性を使って方程式推定の探索空間を狭めるライブラリ。",
          tech: ["Python", "対称性", "方程式推定", "シンボリック計算"],
        },
        {
          title: "OSS貢献",
          description:
            "OSS世界への貢献。自分が出くわした問題のIssueやPRやForkが多い。",
          tech: ["Nix", "Nginx", "WSL", "And more ..."],
        },
      ],
    },
    papers: {
      label: "論文",
      entries: [
        {
          title:
            "Symmetry-Informed Term Filtering for Continuum Equation Discovery",
          description: "APOBLASTに対応する論文。",
        },
      ],
    },
    contacts: {
      label: "連絡先",
      entries: { email: "メール", github: "GitHub" },
    },
  },
} as const satisfies Record<Locale, unknown>;

export { common, content };
