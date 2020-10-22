---
prev: false
next: false 
---

# How to sign-up to Matomo with my @unikname

<hpicture noshadow>![Matomo](./matomo.png)</hpicture>

<br/>

It's easy to connect to Matomo with my @unikname with a simple plugin and a very fast configuration.

**Table of Content**

[[TOC]]

<hseparator/>

## Prerequisites

:::warning Prerequisites
:heavy_check_mark: You've already obtained your own @unikname SSID
<hbox>_See [How to get your personal @unikname with the CLI?](./howto-get-my-unikname-via-cli)_</hbox>
:heavy_check_mark: You've setup your matomo account.

:::

## Step 1. Install Login OIDC plugin

Install it via Matomo Marketplace, or from the [original repository](https://github.com/dominik-th/matomo-plugin-LoginOIDC)


## Step 2. Setup Login OIDC plugin

As an admin, go to ???.

<hpicture>![Matomo with Unikname Connect](./unc-matomo-admin.png)</hpicture>

Then, configure the following attributes:

<hpicture>![Matomo configuration for Unikname Connect](./unc-matomo-configuration.png)</hpicture>


## Step 3. Connect with your @unikname

Go to your Matomo space and click `Login-in` button then `CONNECT WITH YOUR PRIVATE @UNIKNAME`.

<hpicture>![Discourse with Unikname Connect](./unc-matomo-connect-with-unikname.png)</hpicture>

You should see this page:

<hpicture noshadow>![enter-your-unikname](../../images/unc-enter-unikname.png)</hpicture>

Finally enter your personal @unikname and validate the authentication on your smartphone. You're automatically redirected to the signup process on your forum.


## Step 4. Link your @unikname to your Matomo account

It is very easy to associat your @unikname to your Matomo account. On Settigs / Personal Settings, then `OpenID Connect`.

<hpicture>![OpenID Connect with Matomo](./uns-openID-connect.png)</hpicture>

And enter your @unikname. That's all!

