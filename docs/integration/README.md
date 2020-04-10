---
home: false
title: "Integrating Unikname"
---

# Integrating Unikname

[[TOC]]

## Unikname Connect Examples

Quickly get a project started with any of our examples ranging from a typical standalone website sign-in to a fully integrated solution into a corporate system environment.

To play with these examples you need to use your own @unikname.

### #1 Unikname only. Simply the simplest !

<Uniknameconnect/> can be used as the only way to authenticate.

In this example, **platform101.net** demo website has been coded and setup to sign-in with <unikname/> only.

You receive a notification on your smartphone to get connected with your PIN code, for the sign-up but also for every later sign-in.

- [Run this example](https://www.platform101.net/)
- [Show me the code](https://github.com/unik-name/platform10x.net/blob/35498f0b9bea3f62426f6c2a4346629df4f8c27b/server.js)

### #2 Unikname as an alternate to email/password

<uniknameconnect/> can get along with traditional email/password authentication method.

In this example, **platform101.net** demo website has been coded and setup to sign-in with the traditional user email/password and also with <uniknameconnect/>.

platform101.net is a basic HTML5 and CSS3 website.

- [Run this example](https://www.platform101.net/)
- [Show me the code](https://github.com/unik-name/platform10x.net/blob/35498f0b9bea3f62426f6c2a4346629df4f8c27b/server.js)

### #3 Unikname and Social Authentication

<uniknameconnect/> can be used as a social authentication option.

In this example, **platform101.net** demo website has been coded and setup to sign-in with social authentication. The user can choose between Facebook, Google, Twitter and @unik-name.

- [Run this example](https://www.platform101.net/)
- [Show me the code](https://github.com/unik-name/platform10x.net/blob/35498f0b9bea3f62426f6c2a4346629df4f8c27b/server.js)

### #4 Unikname Automatic Connect

<uniknameconnect/> can be used as the only way to authenticate but also as a very fast and automatic sign-in.

In this example, **platform102.net** demo website has been coded and setup to sign-in with Automatic Connect.

- [Run this example](https://www.platform102.net/connectSocialAuthent)
- [Show me the code](https://github.com/unik-name/platform10x.net/blob/35498f0b9bea3f62426f6c2a4346629df4f8c27b/server.js)

### #5 Opensource framework Integration

<uniknameconnect/> can be easily integrated within opensource frameworks compatible with the standard OAuth authorization protocol.

In this example, our discussion forum website is based on the famous open source Discourse solution. <unikname/> users are automaticaly signed-in for an optimal user experience.

- [Run this example](https://forum.unik-name.com/)

> #### Requirements
> 
> - you must have [installed](https://meta.discourse.org/t/install-plugins-in-discourse/19157) the [oidc plugin](https://github.com/discourse/discourse-openid-connect)
> - you must be connected as admin
>
> #### Setup
> 1. Go to your account preferences
> 1. Then in admin pannel
> 1. And finally in site settings (Settings tab)
> 1. look for openid connect settings (a.k.a oidc)
> 1. oidc enabled: check the box
> 1. oidc discovery document: https://auth.alza.unik-name.io/oidc/.well-known
> 1. oidc client id: generate and fill the input
> 1. oidc client secret: generate and fill the input
> 1. oidc authorize scope: keep openid only
> 1. Finally, email us your
>    1. client id
>    1. client secret
>    1. forum url
>    We'll add your site to our service providers list and ping as soon as it's done.

### #6 Corporate cloud Integration

<uniknameConnect/> provides SSO and SLI integration within cloud solutions.

In this example, <uniknameconnect/> is used to access Microsoft Office 365 accounts.

### #7 Account management for Online platforms eg. eCommerce

<uniknameconnect/> allow easy access to user accounts on Online platforms.

In this example, <nikname/> is used to connect to your Shopify account on our website.

### #8 auth0 Integration

If you not have auth0 application yet, please follow the [Get Started](https://auth0.com/docs/quickstarts) auth0 tutorial to create one.

Once your application is created, you can add an `Enterprise Connection`. Use `Open Id Connect` link.

For <uniknameconnect/> configuration fill those required fields:
- `Connection name`: It's an internal name (Ex: `unikname-connect`)
- `Display name`: Unikname (Will display `Continue with Unikname`, on the connection button)
- `Logo url`: you can add 20x20 <uniknameconnect/> logo image url
- `Issuer URL`: `{unikname connect url}/oidc/.well-known/openid-configuration` (<uniknameconnect/> IDP url)
- `Client ID`: your organisation did in base64URL (Follow instructions bellow to generate your Client ID)
- `Client Secret`: your client secret

#### Generate you Client ID

Encode your organization did in base64URL, you can easily find online encoders

Your did looks like: `did:unik:unid:{your UNIK token id}`

Ex: `did:unik:unid:aad289fdfa8ab05fadf68f0f59b134f357e1d49a8bb5aeda3d2d45071777cd6f`

Your Client ID should look like this: `ZGlkOnVuaWs6dW5pZDphYWQyODlmZGZhOGFiMDVmYWRmNjhmMGY1OWIxMzRmMzU3ZTFkNDlhOGJiNWFlZGEzZDJkNDUwNzE3NzdjZDZm`

#### Activate your connection with <uniknameconnect/> team

Contact <uniknameconnect/> team to activate your service.

#### Enable your `Open ID Connect` Connection for your auth0 application

Go to your application connections list and enable your `unikname-connect` `Open ID Connect` connection. Your customers can now use <uniknameconnect/> to connect to your website.


