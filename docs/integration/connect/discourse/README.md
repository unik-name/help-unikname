---
home: false
---

# Integrating Unikname Connect with Discourse

<uniknameconnect/> can be easily integrated within opensource frameworks compatible with the standard OAuth authorization protocol.

In this example, our discussion forum website is based on the famous open source Discourse solution. <unikname/> users are automaticaly signed-in for an optimal user experience.

- [Run this example](https://forum.unik-name.com/)

## Requirements
 
- you must have [installed](https://meta.discourse.org/t/install-plugins-in-discourse/19157) the [oidc plugin](https://github.com/discourse/discourse-openid-connect)
- you must be connected as admin

## Setup
1. Go to your account preferences
1. Then in admin pannel
1. And finally in site settings (Settings tab)
1. look for openid connect settings (a.k.a oidc)
1. oidc enabled: check the box
1. oidc discovery document: <UncServerUrl/>
1. oidc client id: generate and fill the input
1. oidc client secret: generate and fill the input
1. oidc authorize scope: keep openid only
1. Finally, email us your
   1. client id
   1. client secret
   1. forum url
   We'll add your site to our service providers list and ping as soon as it's done.
