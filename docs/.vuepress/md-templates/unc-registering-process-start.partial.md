## Testing Unikname Connect with your own individual @unikname

[After getting your individual @unikname](/get-unikname/creating-your-unikname-individual), to can try it out on our partner's websites, such as:

- [https://forum.unikname.com](https://forum.unikname.com)
- [https://www.labandeducoin.com](https://www.demo.labandeducoin.fr)
- [https://privatememo.online](https://privatememo.online)
- [https://www.cryptomaniac.fr](https://www.cryptomaniac.fr)
- [https://kover.link](https://kover.link)

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

Use the uns CLI installed before to create your organization @unikname to disclose and verify your information:

#### Disclose your @unikname

    $ uns unik:disclose "@organization:MyCompany" -e "MyCompany"

| Data to replace | Explanation |
|:----:|:-----------:|
| `MyCompany`     |  The @unikname you want to show to your users           |

#### Verify your domain URL

Your domain URL will be verified in three steps:
1. Generate a verification package.

    $ uns properties:register "@organization:MyCompany" --value "www.mycompany.com"

| Data to replace | Explanation |
|:----:|:-----------:|
| `www.mycompany.com`     | The URL of your website to verify.<br/>**:warning: Do not include protocol. https will be used by default.**  |


This command provides a `verificationKey` and write a verification package in `uns-verification.txt` file. It will be used in next steps.

2. Expose the proof of ownership in your website:

In order to prove that you own your domain name, you will need to expose the generated verification package using one of the followings methods:
 - Html mode:

    Include the `verificationKey` in the HTML DOM of your website's landing page "https://www.mycompany.com/". The `verificationKey` can be placed in any html tag or in html source comments.
 - File mode:

    Upload the `uns-verification.txt` file to the following route of your website: "https://www.mycompany.com/.well-known/uns-verification.txt"

3. Finalize the verification process:

Use the following command according chosen verification method. The `uns-verification.txt` file should be located in the directory of the command execution.

    $ uns properties:verify "@organization:MyCompany" --url-channel {html, file}

This will add the "Verified/URL" property to your unik.


Thats it! You can check you information by looking for your organization @unikname in the [UNS Network Explorer](https://explorer.uns.network).
