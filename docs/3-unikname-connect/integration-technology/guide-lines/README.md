---
prev: false
next: false
---

# Integrations guide lines

**Table of content**
[[TOC]]


## Handling weird returns from Unikname Connect
When your users return from Unikname Connect, you have to handle unexpected situations.

### Empty, unknown or expired OIDC `state`

What is an OIDC [`state`](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest)?


If the OIDC `state` is absent, expired or unknown at the end of connection process,
- you should redirect your user to your home or login page. Your user has probably bypassed a step during connection process.
- you shouldn't show them an error, just gently nudge them to the login form.

<hseparator/>