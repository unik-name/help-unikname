---
home: false
---

# How to install the Command Line Interface (CLI)?

The <brand name="uns"/> Command Line Interface (CLI) is a powerful tool allowing you to manage your @uniknames and to interact directly with the <brand name="uns"/> blockchain. This Command Line Interface tool is required to setup a Unikname-Connect Account.

Choose the download that suits your operating system:

| <h3>Operating system</h3> | <h3>Download</h3> | <h3>Instructions</h3> |
|:-----------------------------------:|:----------------------------------------------------------------------:|:---------------------------------------:|
| <h2><vp-icon name="windows-brands" size="2em" /><br/>Windows</h2>    | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-x64.exe)</h3> | <p>Run the installer you have downloaded.</p><p>Windows may display a warning, just click **Run anyway**.</p> |
| <h2><vp-icon name="apple-brands" size="2em" /><br/>MacOS</h2>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the installer](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns.pkg)</h3> | <p>Run the installer you have downloaded.</p> |
| <h2><vp-icon name="linux-brands" size="2em" /><br/>Linux</h2>        | <h4>![GitHub version](https://badge.fury.io/gh/unik-name%2Funs-cli.svg)</h4><h3>[Download the archive](https://unikname-cli-assets.s3.fr-par.scw.cloud/uns-linux-x64.tar.gz)</h3> | <p>After having downloaded the archive, add `{TARBALL_EXTRACTION_FOLDER}/bin` into your `PATH` environment variable in order to run the `uns` command.</p> |

Once the installation is completed, open a terminal then enter the command `uns` in a Terminal to see if the CLI is running.
You should see the following:

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
You can find more details about installing and using the CLI within the [full CLI documentation](https://docs.uns.network/uns-use-the-network/cli.html#download-and-installation)

You can also request inline help with the command `uns --help`
:::

<hseparator/>

