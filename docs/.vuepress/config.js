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
    nav: [{ text: "Getting Started", link: "/getting-started-with/" }],
    sidebar: [
      "/",
      ["/getting-started/", "Getting Started"],
      {
        title: "What is Unikname?",
        children: [
          ["/what-is-unikname/", "What is Unikname?"],
          ["/what-is-unikname/unikname-solutions", "Unikname Solutions"]
        ]
      },
      ["/integration-guides/", "Integrating Unikname Connect"],
      {
        title: "Integration Environments",
        sidebarDepth: 0,
        children: [
          ["/integration-guides/environments/auth0/", "Auth0"],
          ["/integration-guides/environments/discourse/", "Discourse"],
          ["/integration-guides/environments/nodejs/", "NodeJS"],
          ["/integration-guides/environments/oauth2.0-openidconnect/", "OAuth 2.0 / OpenID Connect"],
          ["/integration-guides/environments/office365/", "Office 365"],
          ["/integration-guides/environments/wordpress/", "Wordpress / WooCommerce"]
        ]
      },
      {
        title: "Setting up business account",
        children: [
          "/integration-guides/business-account/",
          "/integration-guides/business-account/creating-your-unikname-individual",
          "/integration-guides/business-account/creating-unikname-organization",
          "/integration-guides/business-account/configuring-organization-unikname"
        ]
      },
      ["/ux-design-user-guide", "UX Design User Guide"],
      {
        title: "How to use my @unikname",
        children: [
          ["/how-to-use-my-unikname/", "How to use my @unikname"],
        ]
      },
      {
        title: "Key Concepts",
        children: [
          ["/key-concepts/uns-network", "Secured by uns.network"],
          ["/key-concepts/openidconnect", "Open ID Connect"],
          ["/key-concepts/safetypo", "SafeTypo"],
          ["/key-concepts/security/", "Security & Hack Protections"],
          ["/key-concepts/vulnerabilities", "Vulnerabilities"],
        ]
      },
      {
        title: "More...",
        children: [
          ["/qna/", "Q&A"],
          ["/glossary/", "Glossary"],
          ["/powered-by-ark-io/", "Powered by ARK"],
        ]
      }
    ]
  }
};
