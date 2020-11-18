---
prev: false
next: false 
---

# How to integrate Unikname Connect with WordPress?

![install-unikname-connect-step](./../../images/install-unikname-connect-step5.png)

<hpicture noshadow>![WordPress](./wordpress-logo-full.png)</hpicture>

<br/>

<brand name="UNC"/> can be easily integrated with your WordPress website with a simple plugin. [WordPress](https://wordpress.org) is a free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database.

WordPress is used by more than 60 million websites, it is one of the most popular content management system solutions in use.
WordPress was originally created as a blog-publishing system but has evolved to support other types of web content: corporate website, media galleries, online stores...

:::tip Example
Many WordPress websites are running with Unikname Connect such as [La Bande Du Coin](https://www.demo.labandeducoin.fr/) or  [Cryptomaniac](https://www.cryptomaniac.fr) to give you some examples.

👉 You're welcome to look at them and to see how they've integrated the <brand name="UNC"/> Button.
:::

**Table of content**

[[TOC]]

<hseparator/>

:::warning Prerequisites
:heavy_check_mark: You've already obtained your own @unikname SSID
<hbox>_See [How to get your personal @unikname with the CLI?](./../../howto-get-my-unikname-via-cli)_</hbox>
:heavy_check_mark: You've signed-up for a business account
<hbox>_See [How to sign-up for a business account?](./../../howto-signup-business-account)_</hbox>
:heavy_check_mark: You've got and setup the Trust certificate for your website
<hbox>_See [How to get and setup the trust certificate for your website?](./../../howto-get-unikname-trust-certificate-organization)_</hbox>
:heavy_check_mark: During the sign-up process you've received your Business Account ID and your API secret key.

:book: We assume you're familiar with the administration of your WordPress website.
:::

## Step 1. Install the WordPress plugin

Unikname Connect plugin is available **for free** [on the official WordPress plugins repository](https://wordpress.org/plugins/unikname-connect/).

There are various ways of installing the plugin, so choose the one adapted to your installation:

- From your WordPress Dashboard
- From the Github Repository
- With Composer

### Install from your WordPress Dashboard

You can install Unikname Connect directly from your WordPress Dashboard.

1. Go to your WordPress Dashboard
1. Go to the extensions/plugins manager
1. Add a new one
1. Look for `unikname connect` in the search box on right
1. Install `Unikname Connect` plugin
1. Then `enable` it

### Install from the Github Repository

1. Download [WordPress-Unikname-Connect plugin](https://github.com/unik-name/wordpress-unikname-connect/archive/master.zip)
1. Extract the downloaded ZIP archive
1. Upload the `wordpress-unikname-connect-master` directory to your `/wp-content/plugins/` directory (you can remove the trailing `-master` in the name of the directory)
1. Activate WordPress-Unikname-Connect from your Plugins page

### Install with Composer

If you're using Composer to manage WordPress, add WordPress-Unikname-Connect to your project's dependencies through the [WordPress Packagist repository](https://wpackagist.org/search?q=unikname+connect).

Run de following command:
```
$ composer require wpackagist-plugin/unikname-connect
```

## Step 2. Setup the WordPress Plugin

### Basic configuration

1. Enable the `Enable Unikname Connect`
1. Configure `Unikname Connect @unikname` with the Business Account ID given from Unikname Team Support
1. Configure `Unikname Connect Secret` with the API secret key given from Unikname Team Support

<hpicture>![Unikname Connect for WordPress basic configuration](./wordpress-config1.png)</hpicture>

### Pages options

You can then configure on which pages of your WordPress site you want to display the Unikname Connect button:

<hpicture>![Unikname Connect for WordPress pages configuration](./wordpress-config3.png)</hpicture>

### Unikname Connect buttons style

You can also fine-tune the style options of the Unikname Connect buttons:

<hpicture>![Unikname Connect for WordPress buttons style configuration](./wordpress-config4.png)</hpicture>

**All done!**

New users are now able to use their @unikname SSID to sign-up to your Wordpress website.

<hseparator/>

## Troubleshooting

If you’re having issues when connecting (access denied ...), check that the credentials (the @unikname of your organization, Unikname Connect secret, client id/secret ...) you are using to connect to <brand name="UNC"/> authentication server are the good one.

