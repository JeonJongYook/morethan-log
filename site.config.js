const CONFIG = {
  // profile setting (required)
  profile: {
    name: "jeonjongyook",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "웹 풀스텍 개발자",
    bio: "성장하는 개발자 전종욱 입니다.",
    email: "eipisieljongyook.dev@gmail.com",
    linkedin: "jeonjongyook",
    github: "jeonjongyook",
    instagram: "jonguk._.20",
  },
  projects: [
    {
      name: `JEON's TECH BLOG`,
      href: "https://github.com/jeonjongyook/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "JEON's TECH BLOG",
    description: "welcome to JEON's TECH BLOG!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log-livid.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "jeonjongyook/comments",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "0da80601-eb52-4e73-ac1b-2b558720cd75", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }