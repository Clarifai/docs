---
description: Use 2FA to add an extra layer of security to your account
pagination_next: null
sidebar_position: 5
---

# Two-Factor Authentication

**Use 2FA to add an extra layer of security to your account**
<hr />

Two-factor authentication (2FA) is an optional sign-in security feature that provides an additional layer of security to your account.

## Why 2FA?

Passwords have been the main form of authentication since the start of the digital revolution. However, this security measure is far from infallible. 

Here are some concerns about the traditional password-based authentication:

* 90% of passwords can be cracked in less than six hours;
* 2/3 of people use the same password everywhere;
* Sophisticated cyber attackers have the power to test billions of passwords every second.

The vulnerability of passwords is the main reason for requiring and using 2FA.

### Who Needs 2FA?

As a security best practice, you should enable 2FA to minimize the risk of cybersecurity attacks on your account. Despite the interruption in the sign-in process, the additional security benefit is significant.

For enterprise users, 2FA might fall under security-related controls for compliance reasons. Organizations might want to enforce 2FA for their users to ensure account and data safety.

### How 2FA Works on the Clarifai Platform

Clarifai offers two-factor authentication to add an extra layer of security to your account.  When enabled, 2FA prompts you for a unique code in addition to your username and password during login.

Here's what to expect:

- **Simple activation**: You can enable or disable 2FA directly from your user security settings;
- **Recovery option**: A 2FA recovery method is available in case you lose your authentication device;
- **Seamless workflow**: Enabling 2FA only adds a single step to the standard sign-in process, ensuring a smooth user experience.

## 2FA Set Up

To enable 2FA, sign in to the platform first. Then, click your profile icon element. A drop-down list will appear with items that point to various pages within the platform. 

Select the **Security** option. You'll be directed to the **Security** settings page.

![](/img/others-2/2fa-1.png)

To set up 2FA, scroll down on that **Security** page and toggle the **Two Factor Authentication** "Enable" button.

![](/img/others-2/2fa-2.png)

Once the button is enabled:

**1.** Scan the given image with a two-factor authentication app, such as Duo, Google Authenticator, or Authy.

**2.** After scanning the image, the app will display a six-digit code that you can enter in the provided field. 

Then, click the **Verify** button. 

After enabling 2FA for your account, you'll receive a recovery code. This code serves as a backup to reset two-factor authentication in case you lose access to your authenticator app. It's important to copy, print, or download your recovery code and store it in a secure location.
 
![](/img/others-2/2fa-3.png)

Lastly, click the **Close** button to finish the two-factor authentication setup.

### 2FA Sign-In

When signing in to the Clarifai platform with the correct username and password, 2FA is activated. A pop-up prompt will appear on the screen requesting the authentication code. 

Enter the six-digit code from the authenticator app and click the **Verify** button. You will be successfully signed in to the platform.

![](/img/others-2/2fa-4.png)

### 2FA Disabling

To disable 2FA, follow these steps:

**1.** Go to the **Security** settings page, as earlier described;

**2.** Toggle the **Two Factor Authentication** "Disable" button;

**3.** You will be prompted to enter a six-digit code from your authenticator application;

![](/img/others-2/2fa-8.png)

**4.** Once you enter the correct code and click the **Disable** button, 2FA will be successfully removed from your account.

## 2FA Recovery

### Self-Serve

If you lose access to your authentication app, you won't be able to sign in with 2FA.

To regain access to the Clarifai platform, follow these steps:

**1.** Go to the sign-in page;

**2.** Enter your correct username and password;

**3.** When prompted for the 2FA code, click on the **Enter recovery code** link;

![](/img/others-2/2fa-5.png)

**4.** A window will appear, asking for the recovery code that was created during the initial setup process;

![](/img/others-2/2fa-6.png)

**5.** Enter the recovery code and click the **Recover** button;

**6.** A message will be sent to your account's email address to confirm the TOTP reset. Click the link provided in the email;

![](/img/others-2/2fa-7.png)

**7.** 2FA will be disabled for your account, allowing you to set up a new two-factor authentication process. 

### Last-Resort

If you lose your recovery code, no self-serve method exists for regaining access to the Clarifai platform. In this case, you'll need to contact support@clarifai.com for assistance in recovering access.

