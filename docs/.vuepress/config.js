module.exports = {
  title: "The Unikname Solutions Hub",
  title2: "Unikname Guides and Docs",
  description:
    "Comprehensive guides and documentation to help you start working with the Unikname Solutions as quickly as possible. Let's go!",
  description2: "Official documentation for the Unikname solutions",
  plugins: {
    sitemap: {
      hostname: "https://docs.unikname.com",
    },
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        // UTC date (without time) as ISO format: 2019-09-17
        return new Date(timestamp).toISOString().split("T")[0];
      },
    },
    "@vuepress/back-to-top": {},
    tabs: {},
  },
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    // instantiate matomo.js
    [
      "script",
      {},
      `
      var _paq = window._paq || [];
      _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
      _paq.push(["setDomains", ["*.unik-name.com", "*.unikname.com", "*.unikname.app",  "*.uns.network"]]);
      _paq.push(["enableCrossDomainLinking"]);
      _paq.push(["setDoNotTrack", true]);
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      _paq.push(['enableHeartBeatTimer', 15]);
      (function() {
        var u="https://kpi.unikname.com/";
        _paq.push(['setTrackerUrl', u+'r.php']);
        _paq.push(['setSiteId', '5']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'js/'; s.parentNode.insertBefore(g,s);
      })();
    `,
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-include"), {
        root: "./docs/",
      });
    },
  },
  themeConfig: {
    logo: "./logo.png",
    repo: "unik-name/docs.unik-name.com",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    activeHeaderLinks: true,
    sidebarDepth: 1,
    nav: [{ text: "Get the App", link: "https://my.unikname.app" }],
    sidebar:
      [
        // Introduction group
        {
          title: "What is unikname?",
          path: "/1-introduction/",
          sidebarDepth: 0,
          children: [
            ["/1-introduction/unikname-solutions", "Unikname Solutions"],
          ]
        },
        // my @unikname
        {
          title: "My @unikname",
          path: "/2-my-unikname/",
          sidebarDepth: 1,
          children: [
            ["/2-my-unikname/howto-install-my-unikname-app", "How to install my Unikname App?"],
            ["/2-my-unikname/howto-get-individual-unikname", "How to get my own @unikname?"],
            ["/2-my-unikname/howto-login", "How to use my @unikname to log in?"],
            ["/2-my-unikname/using-uns-tokens", "Using UNS tokens"],
            ["/2-my-unikname/using-recovery-keys", "Using Recovery keys"],
          ]
        },
        // Unikname Connect
        {
          title: "Unikname Connect",
          path: "/3-unikname-connect/",
          sidebarDepth: 0,
          children: [
            ["/3-unikname-connect/1-howto-install-unikname-connect", "How to Install Unikname Connect on a Website?"],
           ]
        },
        // Key Concepts group
        {
          title: "Key Concepts",
          path: "/4-key-concepts/",
          sidebarDepth: 0,
          children: [
            ["/4-key-concepts/openidconnect", "Open ID Connect"],
            ["/4-key-concepts/uns-network", "uns.network blockchain"],
            ["/4-key-concepts/safetypo", "Safe Typo"],
            ["/4-key-concepts/security", "Security"],
          ]
        },
        // extra group
        {
          title: "Support",
          children: [
            ["/5-support/qna", "Q&A"],
            ["/5-support/glossary", "Glossary"],
            ["/5-support/vulnerabilities", "Vulnerabilities"],
            ["/5-support/powered-by-ark-io", "Powered by ARK.io"],
            ["https://forum.unikname.com/", "Forum uns.network"],
          ]
        } 
      ]
  }
};
