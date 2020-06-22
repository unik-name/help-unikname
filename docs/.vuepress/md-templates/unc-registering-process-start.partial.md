## Testing Unikname Connect with your own individual @unikname

[After getting your individual @unikname](/get-unikname/creating-your-unikname-individual), to can try it out on our partner's websites, such as:

- [https://forum.unikname.com](https://forum.unikname.com)
- [https://www.demo.labandeducoin.com](https://www.labandeducoin.fr)
- [https://privatememo.online](https://privatememo.online)

## Registering your service

### Activation of Unikname Connect service

In order to activate Unikname Connect for your service, [contact us by fill in the dedicated form](https://www.unikname.com/get-started/).

We will contact you back as soon as possible.

### Check the received data

After being contacted by the Unikname Team, you should have the following information to go further:

- your organization @unikname
- the URL of the website you want to integrate with Unikname Connect
- a pair of `client_id/client_secret` credentials to configure in your application
- a `coupon` to get your organization @unikname

They are necessary to setup your account to display a such login screen when your clients will connect:

![Example of organization @unikname on](/connect/connect-with-your-private-unikname-screen.png)

#### Your organization @unikname

Your users will see your organization @unikname when they connect on your service.
For example, `@Unikname-Forum` above.

#### The URL of your website

Your users will see your website URL when they connect on your service.
For example, `https://forum.unikname.com` above.


#### The `client_id/client_secret` credentials

These credentials will be necessary to configure the link between your service and Unikname Connect.

#### The UNIK `coupon`

This information will be used to create your organization @unikname.
 
## Setup of your organization @unikname

To setup your organization @unikname, [you first need to create it with the `coupon`](/get-unikname/creating-unikname-organization).

Then go back here.

### Disclose your organization @unikname and verify the URL of your website

As shown before, your users will be able to check and verify information about your service.
So you need to disclose and reveal them to the world.

They will be publicly readable in the UNS.network.

The CLI installed before to create your organization @unikname, disclose and verify your information:

    $ uns unik:disclose "@organization:MyCompany" -e "MyCompany"
    $ uns unik:verify-url "@organization:MyCompany" --url "https://www.mycompany.com" --url-name "corp-website"

In these lines, you must replace:

| Data to replace | Explanation |
|:----:|:-----------:|
| `MyCompany`     |  The @unikname you want to show to your users           |
| `https://www.mycompany.com`     | The URL of your website you have declared with the Unikname Team.<br/>**:warning: The URL verification will fail if your try with another URL.**  |

You can check you information by looking for your organization @unikname in the [UNS Network Explorer](https://explorer.uns.network).
