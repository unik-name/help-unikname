# Configuring your organization @unikname

Your users must be able to check and verify information about your service, espacially your business name and the web address of it.
You will now setup your organization @unikname to reveal them and making them publicly readable in the [UNS.network](https://explorer.uns.network).

[[toc]]

## Disclose your organization @unikname

By default, all @unikname values are obfuscated and hidden for all.
Reveal it them to the world is called "disclose your @unikname".

Use the UNS CLI [installed at a previous step](creating-unikname-organization) to disclose and verify the @unikname value.

Run:

    $ uns unik:disclose "@organization:mycompany" -e "My-Company"

| Data to replace | Comment |
|:----:|:-----------:|
| `mycompany`  | The organization @unikname you want to disclose           |
| `My-Company` | The text value you want to show to your users for your organization @unikname<br/>It must follow the [@unikname naming schema](). |

## Verify the web address of your service

The web address of your service (domain URL) must also be revealed to your users and verified.

It can be done with the following steps:
1. Generate a verification package
1. Publish this verification package to the web site of your service
1. Claim the verification of the address of your service by asking to a UNS URL Checker to check the verification package

:::warning UNC CLI version

The verification of the web address of your service requires the UNS CLI at least version 4.2.0.

You can check the version of your installed UNS CLI with `uns version ` command and update with `uns update` command to update it if necessary ([more information](https://docs.uns.network/uns-use-the-network/cli.html#staying-up-to-date)).

:::

### Generate a verification package

You must generate a verification package with the following command:

    $ uns properties:register "@organization:mycompany" --value "www.mycompany.com"

| Data to replace | Comment |
|:----:|:-----------:|
| `www.mycompany.com`     | The URL of your website to verify.<br/>**:warning: Do not include protocol. `https` will be used by default.**  |

This command provides a `verificationKey` and writes a verification package in `uns-verification.txt` file.

They will be used in next steps.

### Expose the proof of ownership to your website

In order to prove that you own your domain name, you will need to expose the generated verification package using **one of** the followings methods:
- HTML tag
- File upload

So choose either "HTML tag" or "File upload" sections below.

#### HTML tag

You can verify your ownership of a site by adding a `<meta>` tag to the HTML of a specified page.
It will be automatically verified by a UNS URL Checker who will checks within 72 hours that the meta tag exists in the correct location.
If it can't find the tag, it'll give you information about the error it encountered.

It looks for the `meta` tag in the page's `<head>` section of `https://www.mycompany.com/`.
Here is an example of correct placement is shown here:

```html
<html>
  <head>
    <title>Page Title</title>
    <meta name="uns-url-checker-verification" content="your verificationKey">
  </head>
<body>
...
```

Please let this proof installed on your web site as long as possible (an URL Checker may required at least 72 hours to check your web site).

#### File upload

You can verify ownership of a site by uploading a special file to your site.
It will be automatically verified by a UNS URL Checker who will checks within 72 hours that the file exists in the correct location.

So upload the `uns-verification.txt` file to a place where it can download by an URL Checker with the following route (URL) of your website: `https://www.mycompany.com/.well-known/uns-verification.txt`.

This route might be fine tuned in the future.

Please let this proof installed on your web site as long as possible (an URL Checker may required at least 72 hours to check your web site).

### Finalize the verification process

Finally, run **one of** the commands below to finish the verification process (⚠ the `uns-verification.txt` file should be located in the directory of the command execution).

- If you have previously chosen the "HTML tag" mode:

  `$ uns properties:verify "@organization:mycompany" --url-channel html`

- If you have previously chosen the "File upload" mode:

  `$ uns properties:verify "@organization:mycompany" --url-channel file`

This will add the "Verified/URL" property to your unik.

## Final check of your organization @unikname and use cases

👏 Voilà! Your organization @unikname is now ready to be used for log your users in your service thank to Unikname Connect!

[As previously explained](creating-unikname-organization.html#checking-the-creation-of-the-unikname-in-the-explorer), you can check the configuration information of your organization @unikname through [the UNS Network explorer](https://explorer.uns.network/).

Your next steps will be to [choose and follow the integration guide dedicated the technology of your web site](/integration/connect).
