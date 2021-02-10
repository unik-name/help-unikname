---
prev: false
next: false 
---

# How to integrate Unikname Connect with OAuth 2.0 or OpenID Connect?

![install-unikname-connect-step](./../../images/install-unikname-connect-step5.png)

<hpicture noshadow>![OAuth2.0 / OpenID Connect](./oauth2.0-openidconnect-logo-full.png)</hpicture>

<br/>

<brand name="UNC"/> can be easily integrated with any website using Auth2.0 or OpenID Connect Authorization protocols.

[[TOC]]

<hseparator/>

:::warning Prerequisites
:heavy_check_mark: You've signed-up for a Unikname-Connect account
<hbox>_See [How to sign-up for a Unikname-Connect account?](./../../howto-signup-unconnect-account)_</hbox>
:heavy_check_mark: You've got and setup the Trust certificate for your website
<hbox>_See [How to get and setup the trust certificate for your website?](./../../howto-get-unikname-trust-certificate-organization)_</hbox>
:heavy_check_mark: During the sign-up process you've received your Unikname-Connect Account ID and your API secret key.

:book: We assume you're familiar with the Auth2.0 or OpenID protocol.
:::

<!-- 2021-02-10
Do not remove this DOT below (broken menu on left otherwise)
Ask for DLE or FAB for explanations
No time to fix it properly ...
 -->
.

## Unikname Connect OAuth2.0 / OIDC features

The current implementation of Unikname Connect provides support for:

- Authorization Code Flow
- Implicit Flow
- Standard OAuth2.0 and OIDC endpoints

## OAuth2.0 / OIDC setup

Here are the informations you have to code or set up on your OAuth2.0 service:

| Attribut | Value/Description |
|--------|-----------|
| OIDC discovery document | <UncServerUrl/> |
| OIDC client id | The Unikname-Connect Account ID you have received from Unikname's support request |
| OIDC client secret | The API secret key you have received from Unikname's support request |
| OIDC authorize scopes |`openid` by default. |

### Detailed OAuth 2.0 / OIDC Endpoints

If the generic discovery document URL doesn't work for you, you can configure individual endpoints:

| Endpoint | URL |
|-|-|
| Authorize | `https://connect.unikname.com/oidc/authorize` |
| Token     | `https://connect.unikname.com/oidc/accessToken`    |
| Userinfo  | `https://connect.unikname.com/oidc/profile`    |

<hseparator/>

## Troubleshooting

If you’re having issues when connecting (access denied ...), check that the credentials (the @unikname of your organization, Unikname Connect secret, client id/secret ...) you are using to connect to <brand name="UNC"/> authentication server are the good one.
