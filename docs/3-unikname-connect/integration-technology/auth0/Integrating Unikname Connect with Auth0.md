---
home: false
title: "Auth0"
---

# Integrating Unikname Connect with Auth0

## About Auth0

![Auth0](./auth0-logo-full.png)

[Auth0](https://auth0.com) is a flexible, drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users.

You can connect any application (written in any language or on any stack) to Auth0 and define the identity providers you want to use (how you want your users to log in).

We are running a live example of integrating Unikname Connect with Auth0, [**platform103.net**](https://www.platform103.net).
This demo website has been coded and setup to sign-in with Automatic Connect.

👉 [Run this example](https://www.platform103.net)

**Table of Content**

[[TOC]]

!!!include(.vuepress/md-templates/unc-registering-process-start.partial.md)!!!

## Auth0 - Configure your service

If you not have auth0 application yet, please follow the [Get Started](https://auth0.com/docs/quickstarts) Auth0 tutorial to create one.

Once your application is created, you can add an `Enterprise Connection`. Use `Open Id Connect` link.

For <brand name="UNC"/> configuration, fill-in these required fields:

| Attribut | Value / Description |
|--------|-----------|
| `Connection name` | It's an internal name (Ex: `unikname-connect`) |
| `Display name` | `your private @unikname`<br/>It will display `Continue with your private @nikname`, on the connection button |
| `Logo url` | Add this ![Unikname logo](https://cdn.unikname.com/logos/20/un-blue-nbt.png) as image to display to the user<br/>URL: `https://cdn.unikname.com/logos/20/un-blue-nbt.png` |
| `Issuer URL` | <UncServerUrl/> |
| `Client ID` | The client id you have received from Unikname's support request |
| `Client Secret` | The client secret you have received from Unikname's support request |

## Auth0 - Enable your `Open ID Connect` Connection for your Auth0 application

Go to your application connections list and enable the `unikname-connect` `Open ID Connect` connection.

## Auth0 - Check user login

Your customers should now be able to use <brand name="UNC"/> to connect to your website, and to see this kind of login screen:

![Auth0 with Unikname Connect](./auth0-login-screen-with-unc.png)

!!!include(.vuepress/md-templates/unc-registering-process-end.partial.md)!!!
