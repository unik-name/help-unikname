---
home: false
title: "howto-get-unikname-verified-status"
---
 
# Add An HTML Tag to Verify Your Web Address of Service

1. Add a `<meta>` tag to the HTML code of a specified page. 

**Example:** 

Here, we can see that the `meta` tag  `<meta name="uns-url-checker-verification" content="your verificationKey"> ` has been added correctly in the `<head>` section of a webpage from `https://www.mycompany.com/`

```html
<html>
  <head>
    <title>Page Title</title>
    <meta name="uns-url-checker-verification" content="your verificationKey">
  </head>
<body>
...
```

2. In UNS CLI, type the following command to finish the verification process:
```bash
  `$ uns properties:verify "@organization:mycompany" --url-channel html`
```
A **UNS URL Checker** will crawl your website, within 72 hours, to check the verification package and HTML tag/file upload.

:::warning
Keep the HTML tag into the webpage as long as possible. An URL Checker may need up to 72 hours to check your website. Removing this HTML tag too soon from your site will cause you to lose verification for the site.
:::
 
## 2. Check your organization @unikname configuration information with the UNS Network explorer
Refer to [Check the creation of your organization @unikname identifier with the UNS explorer](creating-unikname-organization.html#checking-the-creation-of-the-unikname-in-the-explorer).


# Upload a file to Your Website to Verify Your Web Address of Service

You can verify ownership of your website by generating a verification package, in a `uns-verification.txt` file you will upload to your site.

## 1. Generate a verification package

1. Type the following command to generate a verification package:
```bash
$ uns properties:register "@organization:mycompany" --value "www.mycompany.com" 
```
2. Replace `www.mycompany.com` by the URL of your website.

:::warning
 Do not include the `https` protocol. It is added by default to the URL.
:::

:::tip 
This command provides a `verificationKey` and writes a verification package in `uns-verification.txt` file. These data will be used in the next steps.
:::

 ## 2. Upload the `uns-verification.txt` file to your website

1. Upload the `uns-verification.txt` file to a place where the URL Checker can download it, using the following URL: `https://www.mycompany.com/.well-known/uns-verification.txt`

⚠️ Make sure you store the `uns-verification.txt` file in the **.well-known** directory.

2. In UNS CLI, type the following command to finish the verification process:
```bash
  `$ uns properties:verify "@organization:mycompany" --url-channel file`
  ```

3. If the file has been correctly added to your website, a **Verified/URL** property is added to your unikname properties.

A **UNS URL Checker** will crawl your website, within 72 hours, to check the verification package and HTML tag/file upload.

:::warning
 Keep the file on your website as long as possible. An URL Checker may need up to 72 hours to check your website. Removing this verification file too soon from your site will cause you to lose verification for the site.
:::

## 3. Check your organization @unikname configuration information with the UNS Network explorer
Refer to [Check the creation of your organization @unikname identifier with the UNS explorer](creating-unikname-organization.html#checking-the-creation-of-the-unikname-in-the-explorer).


👏 Voilà! Your organization @unikname identifier is now ready to use! 

