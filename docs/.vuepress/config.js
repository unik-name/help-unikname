module.exports = {
  title: "The Unikname Developer Hub",
  title2: "Unikname Docs",
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
    nav: [{ text: "Getting Started", link: "/getting-started/" }],
    sidebar: [
      "/",
      {
        title: "Introduction",
        children: [
          ["/introduction/", "Understanding Unikname"],
          ["/introduction/unikname-solutions", "Unikname Solutions"],
          ["/getting-started/", "Getting Started"],
        ],
      },
      {
        title: "How to use Unikname",
        children: [
          ["/how-to-use-unikname/", "Introduction"],
          ["/how-to-use-unikname/api", "API"],
          ["/how-to-use-unikname/sdk", "SDK"],
          ["/how-to-use-unikname/app", "My Unikname App"],
        ],
      },
      {
        title: "Getting a Unikname",
        children: [
          ["/get-unikname/", "Introduction"],
          [
            "/get-unikname/creating-unikname-organization",
            "For an organization",
          ],
          [
            "/get-unikname/creating-your-unikname-individual",
            "For an individual",
          ],
        ],
      },
      {
        title: "Integrating Unikname Connect",
        children: [
          ["/integration/connect/", "Introduction"],
          // ["/integration/connect/features", "Features"],
          {
            title: "Applications",
            sidebarDepth: 0,
            children: [
              ["/integration/connect/apps/auth0/", "Auth0"],
              ["/integration/connect/apps/discourse/", "Discourse"],
              ["/integration/connect/apps/nodejs/", "NodeJS"],
              ["/integration/connect/apps/office365/", "Office 365"],
              [
                "/integration/connect/apps/wordpress/",
                "Wordpress / WooCommerce",
              ],
              [
                "/integration/connect/apps/oauth2.0-openidconnect/",
                "Auth 2.0 / OpenID Connect",
              ],
            ],
          },
        ],
      },
      {
        title: "Security",
        children: [
          ["/security/", "Security & Hack Protections"],
          ["/security/vulnerabilities", "Security & Vulnerabilities"],
        ],
      },
      {
        title: "More...",
        children: [
          ["/qna/", "Q&A"],
          ["/glossary/", "Glossary"],
          ["/powered-by-ark-io/", "Powered by ARK"],
        ],
      },
    ],
  },
};
