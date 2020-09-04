#  Creating your organization @unikname

This step is about creating your organization @unikname.
It will require to install a dedicated tool, named "UNS CLI".

[[toc]]

## Installing the <uns/> CLI

The <uns/> Command Line Interface (CLI) makes it easy to manage your @unikname and Unikname apps directly from the terminal.
It’s an essential part of using <uns/>.

| <h1><vp-icon name="windows-brands" size="2em" /><br/>Windows</h1> | <h1><vp-icon name="apple-brands" size="2em" /><br/>macOS</h1> | <h1><vp-icon name="linux-brands" size="2em" /><br/>Linux</h1> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-darwin-x64.tar.gz)</h3>      | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the 64-bit tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3>or<h3>[Download the ARMv7+ tarball*](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-arm.tar.gz)</h3>      |

*: you should then add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to be able to run `uns` command.

[Alternate installation modes are also available in the CLI documentation](https://docs.uns.network/uns-use-the-network/cli.html#download-and-installation).

:::tip On Windows
Execute the file downloaded to procede to installation.
Windows may display a warning, but don't worry, just continue the procedure.*
:::

You can check that your installation is finished by entering `uns` into your command prompt.
You should see the following menu :

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

If you want more details about the CLI and tips to use it, check the [CLI documentation](/uns-use-the-network/cli).
You are now ready for the next step !

### Creating and saving the cryptoaccount information

A cryptoaccount is required for all the following steps. To create it, just execute the following command: `cryptoaccount:create`.
Here is an example of what you are supposed to see on your command prompt.

```bash
uns cryptoaccount:create
» :warn: This information is not saved anywhere. You need to copy and save it by your own.;
{
  "address": "XXXXXXXXXXXXXXXXXXXXXXXXX",
  "publicKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "privateKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "passphrase": "XXXXX XXXXX XXXX XXXXXXXX XXXXXX XXXXXXX XXXX XXXXX",
  "network": "livenet"
}
```

:::warning Backup these informations
**You have to copy and save preciously these informations! If you lose these informations, you also lose access to this cryptoaccount and its @unikname.**
:::

## Using a COUPON to create the organization @unikname 

Creating an organization @unikname requires a COUPON.
If you have one, you can continue.

Otherwise, it's time [to get in contact with the Unikname team](https://www.unikname.com/get-started/) to discuss about your Unikname Connect integration, your specific needs...

You will get a COUPON in return.

## Creating the organization @unikname

Once you have a coupon, all you have to do is to create the @unikname!

**Don't forget to backup and secure the passphrase**, it will allow you to retrieve access to your @unikname in case you change your device.
Neither <uns/>, nor Unikname will be able to give you back access to your @unikname.

With <uns/> CLI you can create the @unikname using [`unik:create`](https://docs.uns.network/uns-use-the-network/cli.html#unik-create) command.

:::warning Choosing the @unikname
Choose the @unikname wisely.
Indeed, it'll be disclosed to other people and they'll know your business by this @unikname and once you've chosen a name, you won't be able to change it.
:::

As example, for creating the `organization` @unikname `mycompany` with a received coupon:

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

## Checking the creation of the @unikname in the Explorer

You can check the @unikname creation through [UNS Network explorer](https://explorer.uns.network/), where all data of @unikname are recorded forever.

:::tip 💡

When browsing the [UNS Network explorer](https://explorer.uns.network/), just hit the @unikname of your organization by its value in the search bar on the top.

![fqsf](./images/explorer-search-@organization_mycompany.png)

:warning: Don't forget:
- to specify the `organization` type of this @unikname: `@organization:mycompany`
- to replace `mycompany` by the @unikname value you are looking for 😀
:::

In the next and final section, you will configure the @unikname.
