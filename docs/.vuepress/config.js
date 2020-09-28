module.exports = {
  title: "The @unikname Hub",
  title2: "Unikname Guides and Docs",
  description:
    "Comprehensive guides and documentation to help you start working with the Unikname Solutions as quickly as possible. Let's go!",
  description2: "Official documentation for @unikname",
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
          title: "What is Unikname?",
          path: "/1-introduction/",
          sidebarDepth: 1
        },
        // my @unikname
        {
          title: "my @unikname ID",
          path: "/2-my-unikname/",
          sidebarDepth: 0,
          children: [
            ["/2-my-unikname/howto-install-my-unikname-app", "How to install my Unikname App?"],
            ["/2-my-unikname/howto-get-individual-unikname", "How to get my own @unikname?"],
            ["/2-my-unikname/howto-login", "How to use my @unikname to log in?"],
            ["/2-my-unikname/howto-backup-my-unikname", "How to backup my @unikname?"],
            ["/2-my-unikname/howto-restore-my-unikname", "How to restore my @unikname?"],
            ["/2-my-unikname/howto-become-ambassador", "How to become an ambassador?"],

            ["/2-my-unikname/howto-get-premium-unikname", "How to get e premium @unikname?"],

            ["/2-my-unikname/howto-earn-uns-tokens", "How to earn UNS tokens?"],

            ["/2-my-unikname/howto-go-live", "How my @unikname goes live?"],
            ["/2-my-unikname/howto-burn-my-unikname", "How to burn my @unikname?"],

            ["/2-my-unikname/howto-manage-unikname-properties", "How to manage my @unikname properties?"],
            ["/2-my-unikname/howto-get-unikname-badges", "How to get @unikname badges?"],            
          ]
        },
        // Unikname Connect
        {
          title: "Unikname Connect",
          path: "/3-unikname-connect/",
          sidebarDepth: 0,
          children: [
            ["/3-unikname-connect/howto-signup-business-account", "How to sign-up a business account?"],
            ["/3-unikname-connect/howto-create-unikname-organization", "How to create a certificate?"],
            ["/3-unikname-connect/howto-setup-unikname-organization", "How to setup your @unikname?"],
            ["/3-unikname-connect/howto-get-unikname-verified-status", "How to get the verified status?"],
            ["/3-unikname-connect/howto-integrate-unikname-connect", "How to integrate Unikname Connect?"],
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
