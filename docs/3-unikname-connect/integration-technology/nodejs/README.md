---
prev: false
next: false 
---

# How to integrate Unikname Connect with NodeJS?

<hpicture noshadow>![Node JS](./nodejs-logo-full.png)</hpicture>

<br/>

**Table of content**

[[TOC]]

<hseparator/>

## Prerequistes

:::warning Prerequisite
:heavy_check_mark: You've already obtained your own @unikname SSID
<hbox>_See [How to get your personal @unikname with the CLI?](./howto-get-my-unikname-via-cli)_</hbox>
:heavy_check_mark: You've signed-up for a business account
<hbox>_See [How to sign-up for a business account?](./howto-signup-business-account)_</hbox>
:heavy_check_mark: You've got and setup the Trust certificate for your website
<hbox>_See [How to get and setup the trust certificate for your website?](./howto-get-unikname-trust-certificate-organization)_</hbox>
:heavy_check_mark: During the sign-up process you've received your Business Account ID and your API secret key.

:book: We assume you're familiar with Node JS programming language.
:::

## Step 1. Setup your service 



## Step 2. Test Unikname Connect on your website

Go to your website and click on the button that should trigger <brand name="UNC"/>, e.g ``sign-up/Login` or `Connect with your private @unikname`.

You should see the Unikname Login screen similar to this:

<hpicture>![enter-your-unikname](../../images/unc-enter-unikname.png)</hpicture>

Then enter your personal @unikname and validate the authentication on your smartphone. Then you're automatically redirected to your website and authenticated.

**All done!**

<hseparator/>

## Troubleshooting

If you’re having issues when connecting (access denied ...), check that the credentials (the @unikname of your organization, Unikname Connect secret, client id/secret ...) you are using to connect to <brand name="UNC"/> authentication server are the good one.

You can also check that you’re using the latest version of the OpenID Connect SDK, library, plugin or service embedded in your application.

!!!include(.vuepress/md-templates/need-help.md)!!!
