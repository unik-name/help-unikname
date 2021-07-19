const { slugify: vuePressSlugify } = require("@vuepress/shared-utils");

function customSlugifyToHandleBadges(str) {
  // Remove badges
  return vuePressSlugify(str.replace(/<Badge[^>]*\/>/, ""));
}

const DOMAIN = "help.unikname.com";
const HOSTNAME = `https://${DOMAIN}`;

module.exports = {
  title: "Unikname Help Center",
  title2: "Unikname Guides and Docs",
  description:
    "Comprehensive guides and documentation to help you start working with the Unikname Solutions as quickly as possible. Let's go!",
  description2: "Official documentation for Unikname",
  plugins: {
    sitemap: {
      hostname: HOSTNAME,
    },
    robots: { host: HOSTNAME },
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
    "@spacelephantlabs/vuepress-plugin-matomo-spacelephant": {
      siteId: 5,
    },
    "@spacelephantlabs/vuepress-plugin-rocketchat-livechat": {
      rocketChatUrl: "https://spacelephant.rocket.chat/",
    },
    seo: {
      // your options
      author: (_, $site) => {
        return {
          name: $site.themeConfig.author,
          twitter: "@UniknameNews",
        };
      },
      image: ($page, $site) =>
        $site.themeConfig.domain +
        "/" +
        ($page.frontmatter.image || "opengraph-v2.png"),
    },
  },
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    ["meta", { name: "charset", content: "utf-8" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    repo: "unik-name/help-unikname",
    hostname: HOSTNAME,
    domain: HOSTNAME,
    author: "Unikname Team",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    activeHeaderLinks: true,
    sidebarDepth: 1,
    nav: [
      { text: "Join the Whitelist", link: "https://hub.unikname.network" },
      { text: "Go to website", link: "https://www.unikname.com" },
      { text: "Get the App", link: "https://my.unikname.app" },
    ],
    sidebar: [
      // Introduction group
      {
        title: "Introduction",
        //path: "/1-what-is-unikname/",
        children: [["/1-what-is-unikname/", "What is Unikname?"]],
      },
      // my @unikname
      {
        title: "@unikname Universal ID",
        //path: "/2-unikname-id/",
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
          ["/2-unikname-id/howto-connect", "How to connect to a website?"],
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
            "/2-unikname-id/can-i-get-uniknameid-for-free",
            "Can I get my @unikname ID for free?",
          ],
          ["/2-unikname-id/why-to-pay-short-id", "Why to pay for short ID?"],
          [
            "/2-unikname-id/what-are-differences-freemium-premium-unikname",
            "What are differences between Freemium and Premium?",
          ],
          [
            "/2-unikname-id/howmuch-cost-uniknameid",
            "How much does a @unikname cost?",
          ],
          [
            "/2-unikname-id/howto-get-freemium-unikname",
            "How to get a freemium @unikname?",
          ],
          [
            "/2-unikname-id/howto-get-premium-unikname",
            "How to get a premium @unikname?",
          ],
          // ["/2-unikname-id/howto-go-live", "How my @unikname goes live?"],
          // ["/2-unikname-id/howto-manage-unikname-properties", "How to manage my @unikname properties?"],
          // ["/2-unikname-id/howto-get-unikname-badges", "How to get @unikname badges?"],
          // ["/2-unikname-id/howto-buy-unikname", "How to buy @unikname?"],

          // ["/2-unikname-id/howto-earn-uns-tokens", "How to earn UNS tokens?"],
          // ["/2-unikname-id/howto-burn-my-unikname", "How to burn my @unikname?"],

          "/2-unikname-id/howto-reset-my-unikname",
          "/2-unikname-id/howto-change-pincode-my-unikname",

          {
            title: "Troubleshooting",
            children: [
              [
                "/2-unikname-id/troubleshooting/my-unikname-installation-troubleshooting.md",
                "My Unikname Installation",
              ],

              // [
              //   "/2-unikname-id/troubleshooting/my-unikname-login-troubleshooting.md",
              //   "My Unikname Login",
              // ],

              [
                "/2-unikname-id/troubleshooting/my-unikname-payment-troubleshooting.md",
                "Payments in My Unikname",
              ],
            ],
          },
        ],
      },
      // Unikname Connect
      {
        title: "Unikname Connect",
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
            "/3-unikname-connect/howto-signup-unconnect-account",
            "How to sign-up Unikname-Connect account?",
          ],
          [
            "/3-unikname-connect/howto-create-unikname-trust-certificate-organization",
            "How to create your trust certificate?",
          ],
          [
            "/3-unikname-connect/howto-vote-for-delegate-organization",
            "How to vote for your delegate?",
          ],
          [
            "/3-unikname-connect/howto-get-unikname-connect-credentials",
            "How to get your Credentials?",
          ],
          [
            "/3-unikname-connect/integration-technology/auth0/",
            "How to integrate with Auth0?",
          ],
          [
            "/3-unikname-connect/integration-technology/discourse/",
            "How to integrate with Discourse?",
          ],
          [
            "/3-unikname-connect/integration-technology/dotnet/",
            "How to integrate with .Net?",
          ],
          [
            "/3-unikname-connect/integration-technology/golang/",
            "How to integrate with Go?",
          ],
          [
            "/3-unikname-connect/integration-technology/java/",
            "How to integrate with Java?",
          ],
          [
            "/3-unikname-connect/integration-technology/matomo/",
            "How to integrate with Matomo?",
          ],
          [
            "/3-unikname-connect/integration-technology/nodejs/",
            "How to integrate with Node.js?",
          ],
          [
            "/3-unikname-connect/integration-technology/php/",
            "How to integrate with PHP?",
          ],
          [
            "/3-unikname-connect/integration-technology/python/",
            "How to integrate with Python?",
          ],
          [
            "/3-unikname-connect/integration-technology/ruby/",
            "How to integrate with Ruby?",
          ],
          [
            "/3-unikname-connect/integration-technology/spring-boot/",
            "How to integrate with Spring Boot?",
          ],
          [
            "/3-unikname-connect/integration-technology/wordpress/",
            "How to integrate with WordPress?",
          ],
          [
            "/3-unikname-connect/integration-technology/woocommerce/",
            "How to integrate with WooCommerce?",
          ],
          [
            "/3-unikname-connect/integration-technology/oauth2.0-openidconnect/",
            "How to integrate with OAuth2 & OIDC?",
          ],
          [
            "/3-unikname-connect/integration-technology/guide-lines/",
            "Integration Guide Lines",
          ],
        ],
      },
      // Key Concepts group
      {
        title: "Key Concepts",
        path: "/4-key-concepts/",
        children: [
          "/4-key-concepts/what-is-my-unikname-app",
          // ["/4-key-concepts/what-is-ssid-cryptoaccount", "Self-Sovereign ID and Cryptoaccount"],
          // ["/4-key-concepts/what-is-unikname-trust-certificate", "Trust Certificate"],
          // ["/4-key-concepts/what-is-safetypo", "Safe Typo"],
          // ["/4-key-concepts/what-is-oidc", "Open ID Connect"],
          [
            "/4-key-concepts/what-is-unikname-user-rewarding-system",
            "What is the User Rewarding system?",
          ],
        ],
      },
      // WordPress plugin
      {
        title: "WordPress Plugin",
        children: ["/6-wp-wordpress/howto-verify-url-domain.md"],
      },
      // Security group
      {
        title: "Security",
        children: [
          [
            "/5-security/securing-the-uns-network",
            "Securing the unikname.network",
          ],
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
          ["https://forum.unikname.com/", "Community forum"],
        ],
      },
    ],
  },
  markdown: {
    extendMarkdown: (md) => {
      // Required for common templates inclusion
      // They are configured in docs/.vuepress/md-templates/
      md.use(require("markdown-it-include"), { root: "./docs/" });
    },
    slugify: customSlugifyToHandleBadges,
    toc: {
      slugify: customSlugifyToHandleBadges,
    },
    extractHeaders: ["h2", "h3", "h4"],
  },
};
