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
    sidebar: {
      // First Sidebar, enabled for content related with my-unikname pages
      '/my-unikname/': [ 
        // Introduction group
        {
          title: "Introduction",
          path: "/introduction/",
          sidebarDepth: 0,
          children: [
            ["/introduction/unikname-solutions", "Unikname Solutions"],
          ]
        },
        // Key Concepts group
        {
          title: "Key Concepts",
          path: "/key-concepts/",
          sidebarDepth: 0,
          children: [
            ["/key-concepts/openidconnect", "Open ID Connect"],
            ["/key-concepts/uns-network", "uns.network blockchain"],
            ["/key-concepts/safetypo", "Safe Typo"],
            ["/key-concepts/security", "Security"],
          ]
        },
        // Main group
        {
          title: "My Unikname",
          path: "/my-unikname/",
          sidebarDepth: 2,
          children: [
            ["1.GettingStartedWithMyUnikname", "Getting started with my @unikname"],
            ["2.creating-your-unikname-individual", "Creating your own unikname"],
            ["3.HowToUseMyUniknameWebsite", "How To Use My Unikname Website"],
            ["4.HowToUseMyUniknameUNS", "How To Use My UNS tokens"],
          ]
        },
        // quick jump to content summary for Unikname Connect
        ["/unikname-connect/", "Unikname Connect"],
        // extra group
        {
          title: "More...",
          children: [
            ["/support/qna", "Q&A"],
            ["/support/glossary", "Glossary"],
            ["/support/vulnerabilities", "Vulnerabilities"],
            ["/support/powered-by-ark-io", "Powered by ARK.io"],
            ["https://forum.unikname.com/", "Forum uns.network"],
          ]
        } 
      ],

      // Second Sidebar, enabled for content related with Unikname-Connect pages
      '/unikname-connect/': [
        // Introduction group
        {
          title: "Introduction",
          path: "/introduction/",
          sidebarDepth: 0,
          children: [
            ["/introduction/unikname-solutions", "Unikname Solutions"],
          ]
        },
        // Key Concepts group
        {
          title: "Key Concepts",
          path: "/key-concepts/",
          sidebarDepth: 0,
          children: [
            ["/key-concepts/openidconnect", "Open ID Connect"],
            ["/key-concepts/uns-network", "uns.network blockchain"],
            ["/key-concepts/safetypo", "Safe Typo"],
            ["/key-concepts/security", "Security"],
          ]
        },
        // quick jump to content summary for My Unikname
        ["/my-unikname/", "My Unikname"],
        // Main group
        {
          title: "Unikname Connect",
          path: "/unikname-connect/",
          children: [
            ["0.GettingStarted-unikname-connect-installation", "Getting Started installation"],
            ["1.CreateAnIndividualUniknameForBusiness", "Create An Individual Unikname For Business"],
            ["2.creating-unikname-organization", "Creating unikname organization"],
            ["3.configuring-organization-unikname", "Configuring organization unikname"],
            ["4.HowToIntegrateUniknameConnect", "How To Integrate Unikname Connect"],
          ]
        },
        // environment group 
        { 
          title: "Integration Technologies",
          path: "/unikname-connect/environments/",
          children: [
            ["/unikname-connect/environments/auth0/", "authO"],
            ["/unikname-connect/environments/discourse/", "Discourse"],
            ["/unikname-connect/environments/nodejs/", "nodejs"],
            ["/unikname-connect/environments/oauth2.0-openidconnect/", "OAuth2.0 / Open ID Connect"],
            ["/unikname-connect/environments/office365/", "Office 365"],
            ["/unikname-connect/environments/wordpress/", "Wordpress"],
          ]
        },
        // extra group
        {
          title: "Support",
          children: [
            ["/support/qna", "Q&A"],
            ["/support/glossary", "Glossary"],
            ["/support/vulnerabilities", "Vulnerabilities"],
            ["/support/powered-by-ark-io", "Powered by ARK.io"],
            ["https://forum.unikname.com/", "Forum uns.network"],
          ]
        } 
      ],

      // Default Sidebar, enabled for all other pages 
      '/': [
        // Introduction group
        {
          title: "Introduction",
          path: "/introduction/",
          sidebarDepth: 0,
          children: [
            ["/introduction/unikname-solutions", "Unikname Solutions"],
          ]
        },
        // Key Concepts group
        {
          title: "Key Concepts",
          path: "/key-concepts/",
          sidebarDepth: 0,
          children: [
            ["/key-concepts/openidconnect", "Open ID Connect"],
            ["/key-concepts/uns-network", "uns.network blockchain"],
            ["/key-concepts/safetypo", "Safe Typo"],
            ["/key-concepts/security", "Security"],
          ]
        },
        ["/my-unikname/", "My Unikname"],
        ["/unikname-connect/", "Unikname Connect"],
        {
          title: "Support",
          children: [
            ["/support/qna", "Q&A"],
            ["/support/glossary", "Glossary"],
            ["/support/vulnerabilities", "Vulnerabilities"],
            ["/support/powered-by-ark-io", "Powered by ARK"],
            ["https://forum.unikname.com/", "Forum uns.network"],
          ]
        } 
      ]
    }
  }
};
