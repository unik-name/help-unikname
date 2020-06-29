---
home: false
---

# Integrating Unikname Connect with any Auth2.0 or OpenID Connect solution

!!!include(.vuepress/md-templates/unc-registering-process-what-is-unc.md)!!!

## About Auth2.0 or OpenID Connect solution

![Discourse](./auth2.0-openidconnect-logo-full.png)

<uniknameconnect/> can be easily integrated within opensource frameworks compatible with the standard OAuth authorization protocol.

In this example, [our discussion forum website](https://forum.unikname.com/) is based on the famous open source [Discourse solution)[https://www.discourse.org]. <unikname/> users are automaticaly signed-in for an optimal user experience.

👉 [Run this example](https://forum.unikname.com/)

**Table of Content**

[[TOC]]

!!!include(.vuepress/md-templates/unc-registering-process-start.partial.md)!!!

## Setup

| Attribut | Description |
|--------|-----------|
| OIDC discovery document | <UncServerUrl/> |
| OIDC client id | The client id you have received from Unikname's support request |
| OIDC client secret | The client secret you have received from Unikname's support request |
| OIDC authorize scopes |`openid` by default |

## Check user login

Your customers should now be able to use <uniknameconnect/> to connect to your website.

!!!include(.vuepress/md-templates/unc-registering-process-end.partial.md)!!!
