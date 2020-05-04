---
home: false
---

# Integration Unikname Connect with Auth0

If you not have auth0 application yet, please follow the [Get Started](https://auth0.com/docs/quickstarts) auth0 tutorial to create one.

Once your application is created, you can add an `Enterprise Connection`. Use `Open Id Connect` link.

For <uniknameconnect/> configuration fill those required fields:
- `Connection name`: It's an internal name (Ex: `unikname-connect`)
- `Display name`: Unikname (Will display `Continue with Unikname`, on the connection button)
- `Logo url`: you can add 20x20 <uniknameconnect/> logo image url
- `Issuer URL`: <UncServerUrl/>
- `Client ID`: your organisation did in base64URL (Follow instructions bellow to generate your Client ID)
- `Client Secret`: your client secret

## Generate you Client ID

Encode your organization did in base64URL, you can easily find online encoders

Your did looks like: `did:unik:unid:{your UNIK token id}`

Ex: `did:unik:unid:aad289fdfa8ab05fadf68f0f59b134f357e1d49a8bb5aeda3d2d45071777cd6f`

Your Client ID should look like this: `ZGlkOnVuaWs6dW5pZDphYWQyODlmZGZhOGFiMDVmYWRmNjhmMGY1OWIxMzRmMzU3ZTFkNDlhOGJiNWFlZGEzZDJkNDUwNzE3NzdjZDZm`

## Activate your connection with <uniknameconnect/> team

Contact <uniknameconnect/> team to activate your service.

## Enable your `Open ID Connect` Connection for your auth0 application

Go to your application connections list and enable your `unikname-connect` `Open ID Connect` connection. Your customers can now use <uniknameconnect/> to connect to your website.


