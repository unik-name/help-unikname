---
home: false
title: "How to create a @unikname certificate for your organization?"
---

# How to create a @unikname certificate for your organization

To integrate **Unikname Connect** on your website, you need to be authenticated as an organization/customer, with an organization @unikname identifier. You can create your organization @unikname identifier only through our UNS Command Line Interface (CLI).

[[toc]]

## What can I do with the CLI?
The <brand name="uns"/> Command Line Interface (CLI) allows you to: 
- manage your @unikname information, 
- manage your Unikname apps.

## 1. Installing the **uns.network** CLI

| <h3>Operating system</h3> | <h3>Download</h3> | <h3>Instructions</h3> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h2><vp-icon name="windows-brands" size="2em" /><br/>Windows</h2>    | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3> | <h4>On Windows, run the installer you have downloaded. Windows may display a warning. Click **Run anyway**.</h4> |
| <h2><vp-icon name="apple-brands" size="2em" /><br/>macOS</h2>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-darwin-x64.tar.gz)</h3> | <h4>After having downloaded the tarball, add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable, in order to run `uns` command.</h4> |
| <h2><vp-icon name="linux-brands" size="2em" /><br/>Linux</h2>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3>or<h3>[Download the ARMv7+ tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-arm.tar.gz)</h3> | <h4>After having downloaded the tarball, add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to run `uns` command.</h4> |


[Alternate installation modes are also available in the CLI documentation](https://docs.uns.network/uns-use-the-network/cli.html#download-and-installation).

- Enter `uns` into your command prompt to see if your installation is finished.
- You should see the following menu:

```bash
$ uns
UNS.network CLI

VERSION
  @uns/cli/X.X.X XXX XXX

USAGE
  $ uns [COMMAND]

COMMANDS
  cryptoaccount  Manage Crypto Account (`uns cryptoaccount` to display Crypto Account commands)
  ...
```
You are now ready for the next step!

:::tip
If you want more details about the CLI and tips to use it, refer to the [CLI documentation](/uns-use-the-network/cli).
:::

## 2. Creating and saving your cryptoaccount information

To create an organization @unikname identifier, you need to create a cryptoaccount, first. 

1. Open Command Prompt.
2. Type `uns` to launch the CLI.
3. Type the following command: 
```bash 
uns cryptoaccount:create
```

The information of your newly created cryptoaccount are displayed (address, publicKey, privateKey, passphrase) in the CLI.

Here is an example of what you are supposed to see on your command prompt:

```bash
uns cryptoaccount:create
» :warn: Backup your cryptoaccount information in a secure place.
{
  "address": "XXXXXXXXXXXXXXXXXXXXXXXXX",
  "publicKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "privateKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "passphrase": "XXXXX XXXXX XXXX XXXXXXXX XXXXXX XXXXXXX XXXX XXXXX",
  "network": "livenet"
}
```
4. Backup your cryptoaccount information immediately, in a secure place. 

:::tip
If you lose your cryptoaccount information and your @unikname identifier, this backup file will help you to recover your cryptoaccount. Note that we can't retrieve your cryptoaccount information for you!
:::

## 3. Using a COUPON to create the organization @unikname identifier

Creating an organization @unikname identifier requires a COUPON.
If you already have one, skip to [3. Creating the organization unikname](##CreateOrgaUnikname) 

Otherwise, it's time [to get in contact with the Unikname team](https://www.unikname.com/get-started/) to discuss atbout your Unikname Connect integration, your specific needs... You will get a COUPON in return.

## 4. Creating the organization @unikname identifier

Once you have a coupon, all you have to do is to create the @unikname identifier!

:::warning
For security and confidentiality reasons, neither <brand name="uns"/> nor <brand name="unikname"/> can retrieve your @unikname identifier for you, in the event you lose it. That is why **you must save the passphrase, associated to your @unikname identifier**.
:::

:::warning
Choose your organization @unikname identifier wisely.
Keep in mind that once created, this @unikname identifier will be permanently associated to your business and disclosed to the other users. You can't change your organization @unikname identifier at any time. 
:::

1. **Backup the passphrase in a secure file**. 
2. In CLI, copy and paste the following piece of code, to create your organization @unikname identifier: 
```bash
$ uns unik:create --explicitValue "mycompany" --type organization --coupon "HERE_THE_COUPON"
```
4. Replace the value `mycompany` by your organization @unikname identifier.
5. Replace the value `HERE_THE_COUPON` with the coupon you received.
6. If in doubt, **refer to the CLI documentation, about the [`unik:create`](https://docs.uns.network/uns-use-the-network/cli.html#unik-create) command**, in <brand name="uns"/> to create your organization @unikname identifier.:::
7. Enter the 12 words of your passphrase manually, when asked.

"data", "transaction" and "confirmations" command lines should be displayed.

```bash
$ uns unik:create --explicitValue "mycompany" --type organization --coupon "HERE_THE_COUPON"
Enter your crypto account passphrase (12 words phrase): ***************************
{
  "data": {
    "id": "ccabe13311350a306d510c3484889a151eda9a1b61b5fe4d346fd3b1eeb42c25",
    "transaction": "4bcde02ec632bd5531aa8710b0a13f469a59caec910dc610d46f6b8ebdcaf9ac",
    "confirmations": 1
  }
}
```

## 5. Checking the creation of the organization @unikname identifier in the uns.network explorer

In the uns.network explorer, you can find all the information associated to any @unikname identifier.

To check that your organization @unikname identifier has been created correctly:

1. Launch the [UNS Network explorer](https://explorer.uns.network/).
2. In the search bar, type **@organization:mycompany**
3. Replace **mycompany** by your organization @unikname identifier.

![explorer-search-@organization_mycompany](./images/explorer-search-organization_mycompany.png)

You can access the information associated to the cryptoaccount of your organization @unikname identifier (address, UNS token amount, public key).

**You are now going to [configure your organization @unikname identifier](/3.configuring-organization-unikname)**.
