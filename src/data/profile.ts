import type { Language } from "../i18n/types";

interface CommonProfile {
  name: {
    handle: string;
  };
  contact: {
    email: string;
    github: string;
  };
}

interface Profile {
  name: {
    truename: string;
  };
  role: {
    utokyo: string;
  };
  focus: string;
}

const commonProfile: CommonProfile = {
    name: {
      handle: "Jy",
    },
    contact: {
      email: "junya-yk@g.ecc.u-tokyo.ac.jp",
      github: "https://github.com/JyJyJcr",
    },
  },
  profile: Record<Language, Profile> = {
    en: {
      name: {
        truename: "Junya Yokokura",
      },
      role: {
        utokyo:
          "Master's Student, Tōdō Laboratory, Department of Physics, Graduate School of Science, the University of Tokyo",
      },
      focus: "Computational Physics",
    },
    ja: {
      name: {
        truename: "横倉 淳也",
      },
      role: {
        utokyo: "東京大学大学院理学系研究科 藤堂研究室 修士課程",
      },
      focus: "Computational Physics",
    },
  };

export { commonProfile, profile };
