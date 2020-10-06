module.exports = {
  title: "Unikname Help Center",
  title2: "Unikname Guides and Docs",
  description:
    "Comprehensive guides and documentation to help you start working with the Unikname Solutions as quickly as possible. Let's go!",
  description2: "Official documentation for Unikname",
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
    "@goy/svg-icons": {},
    "vuepress-plugin-container": {
      type: "information",
      defaultTitle: "",
      before: '<div class="information">',
      after: "</div>",
    },
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
      md.use(require("markdown-it-include"), { root: "./docs/" });
      md.use(require("markdown-it-table-of-contents"), { includeLevel: [2] });
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
    nav: [
      { text: "Get the App", link: "https://my.unikname.app" },
      { text: "Go to website", link: "https://www.unikname.com" },
    ],
    sidebar: [
      // Introduction group
      {
        title: "What is Unikname?",
        path: "/1-what-is-unikname/",
        sidebarDepth: 0,
      },
      // my @unikname
      {
        title: "@unikname Universal ID",
        //path: "/2-unikname-id/",
        sidebarDepth: 0,
        children: [
          ["/2-unikname-id/", "Getting started with @unikname ID"],
          [
            "/2-unikname-id/howto-install-my-unikname-app",
            "How to install my Unikname App?",
          ],
          [
            "/2-unikname-id/howto-get-individual-unikname",
            "How to get my own @unikname?",
          ],
          ["/2-unikname-id/howto-login", "How to use my @unikname to log in?"],
          [
            "/2-unikname-id/howto-backup-my-unikname",
            "How to backup my @unikname?",
          ],
          [
            "/2-unikname-id/howto-restore-my-unikname",
            "How to restore my @unikname?",
          ],
          // ["/2-unikname-id/howto-become-ambassador", "How to become an ambassador?"],

          [
            "/2-unikname-id/howto-get-premium-unikname",
            "How to get e premium @unikname?",
          ],

          // ["/2-unikname-id/howto-go-live", "How my @unikname goes live?"],
          // ["/2-unikname-id/howto-burn-my-unikname", "How to burn my @unikname?"],

          // ["/2-unikname-id/howto-manage-unikname-properties", "How to manage my @unikname properties?"],
          // ["/2-unikname-id/howto-get-unikname-badges", "How to get @unikname badges?"],

          // ["/2-unikname-id/howto-earn-uns-tokens", "How to earn UNS tokens?"],
        ],
      },
      // Unikname Connect
      {
        title: "Unikname Connect",
        // path: "/3-unikname-connect/",
        sidebarDepth: 0,
        children: [
          ["/3-unikname-connect/", "Getting started with Unikname Connect"],
          [
            "/3-unikname-connect/howto-install-uns-cli",
            "How to install the CLI?",
          ],
          [
            "/3-unikname-connect/howto-get-my-unikname-via-cli",
            "How to get your personal @unikname?",
          ],
          [
            "/3-unikname-connect/howto-signup-business-account",
            "How to sign-up your business account?",
          ],
          [
            "/3-unikname-connect/howto-get-unikname-trust-certificate-organization",
            "How to create your trust certificate?",
          ],
          [
            "/3-unikname-connect/integration-technology/auth0/",
            "How to integrate with Auth0",
          ],
          [
            "/3-unikname-connect/integration-technology/discourse/",
            "How to integrate with Discourse",
          ],
          [
            "/3-unikname-connect/integration-technology/nodejs/",
            "How to integrate with NodeJS",
          ],
          [
            "/3-unikname-connect/integration-technology/wordpress/",
            "How to integrate with Wordpress",
          ],
          [
            "/3-unikname-connect/integration-technology/woocommerce/",
            "How to integrate with WooCommerce",
          ],
          [
            "/3-unikname-connect/integration-technology/oauth2.0-openidconnect/",
            "How to integrate with OAuth2.0 & OIDC",
          ],
        ],
      },
      // Key Concepts group
      {
        title: "Key Concepts",
        path: "/4-key-concepts/",
        sidebarDepth: 0,
        //children: [
        // ["/4-key-concepts/what-is-ssid-cryptoaccount", "Self-Sovereign ID and Cryptoaccount"],
        // ["/4-key-concepts/what-is-unikname-trust-certificate", "Trust Certificate"],
        // ["/4-key-concepts/what-is-safetypo", "Safe Typo"],
        // ["/4-key-concepts/what-is-oidc", "Open ID Connect"],
        //]
      },
      // Security group
      {
        title: "Security",
        children: [
          // ["/5-security/securing-the-uns-network", "Securing the UNS network"],
          ["/5-security/security-hack-protections", "Hack Protections"],
          ["/5-security/security-vulnerabilities", "Vulnerabilities"],
        ],
      },
      // extra group
      {
        title: "More help",
        children: [
          ["/9-more-help/qna", "Q&A"],
          ["/9-more-help/glossary", "Glossary"],
          ["/9-more-help/powered-by-ark-io", "Powered by ARK.io"],
          ["https://forum.unikname.com/", "Forum uns.network"],
        ],
      },
    ],
  },
};
