---
prev: false
next: false
tags:
  - url verification
  - domain verification
  - wordpress
  - woocommerce
---

# How to verify the domain or URL of your WordPress website?

[Despite there are several methods to validate the domain and thus the URL of your WordPress / WooCommerce website](/3-unikname-connect/howto-create-unikname-trust-certificate-organization.html#step-4-prove-the-ownership-of-your-website), we strongly recommend you to validate it with the simpler "HTML tag" method.

If you want to understand **why** you should verify the URL ot your website, [read more about the Trust Certificate](/3-unikname-connect/howto-create-unikname-trust-certificate-organization.html#trust-appearance).

:::warning Prerequisites
:heavy_check_mark: You've already installed the Command Line Interface tool on your desktop.  
<hbox>_See [How to install the CLI?](/3-unikname-connect/howto-install-uns-cli)_</hbox>
:heavy_check_mark: You are at the Step 4 of the creation of your Trust Certificate
<hbox>_See [How to create and setup the Unikname Trust Certificate for your website?](/3-unikname-connect/howto-create-unikname-trust-certificate-organization.html#step-4-prove-the-ownership-of-your-website)_</hbox>
:::

**Table of Content**

[[TOC]]

## Generate the verification package

Run this CLI command in a terminal:

```bash
uns properties:register "@organization:my-saas-platform-101" --value "www.wordpress-domain.com" 
```
Replace :
- `my-saas-platform-101` by your @unikname of type Organization
- `www.wordpress-domain.com` by the domain of your WordPress website. (without `https://`)

It will output:

```json{5}
{
  "data": {
    ...
    "value": "www.wordpress-domain.com",
    "verificationKey": "fi5TrRlrW1Dx1jEGCCEXISVKu...MImSNDM180HPDXyvF383jYj5ki-TSMrxMDiQ-pplpJxQ",
    ...
  }
}
```

The most important part is the **`verificationKey`**/verification key entry (in the above sample: `fi5TrRl...-pplpJxQ` - without `"`).

You will need to copy/paste later in your clipboard.

## Configure the verification key in your WordPress

The verification of your domain requires to expose the verification key to the crawling of a web bot (such as a search engine bot, but dedicated to Unikname ecosystem).
The best way to do that, is to add a `meta` HTML tag in the main page of your WordPress web site.

Unfortunately, there isn't any standard way of doing that in WordPress.

So, we recommend you:
- either to use a dedicated plugin
- or to use your own custom method, for example provided by your theme builder or most SEO plugins

We will guide you by using the plugin [Meta Tag Manager](https://wordpress.org/plugins/meta-tag-manager/).
You are allowed to remove it **after** the URL/domain verification.

### Install Meta Tag Manager plugin

Use your admin panel to install and activate the plugin [Meta Tag Manager](https://wordpress.org/plugins/meta-tag-manager/).

### Configure the Meta Tag Manager plugin

In your admin panel, go to "Settings" &gt; "Meta Tag Manager"

- Add a new Meta Tag

<hpicture>![Unikname Connect trust certificate example](./images/meta-tag-manager1.png)</hpicture>

- Configure it as below:

  - Tag Type: `name`
  - Name value: `uns-url-checker-verification`
::: warning
⚠ Replace the `content Attribute` **by your own `verificationKey`** (not the one provided as an example)
:::
Keep the other configurations by default.

<hpicture>![Unikname Connect trust certificate example](./images/meta-tag-manager2.png)</hpicture>

Then "Close Meta Tag Option" and "Save Changes" on the bottom.

::: tip Cache plugin
If you have a cache plugin (Divi Rocket, WP Rocket ...), you should clear its cache NOW, before going to the next step.
:::

## Verify the URL/domain of your website

Until done, finish the process by executing the following command with the CLI:

```bash
uns properties:verify "@organization:my-saas-platform-101" --url-channel html
```

Again , replace `my-saas-platform-101` by your @unikname of type Organization.

The command will tell with you its a success or will display an error message you can try to solve by yourself by [reading the troubleshooting section of the reference documentation](/3-unikname-connect/howto-create-unikname-trust-certificate-organization.html#what-to-do-when-it-doesn-t-work).

If the verification is a success, you can safely remove the "Meta Tag Manager" plugin.

**All done!** 

<hseparator/>
