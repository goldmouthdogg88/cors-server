# cors-server

Sun, May 8, 2022 5:46:25 PM

I've figured out that I've been going about this all wrong! What I need to do is deploy my app on a Heroku or some other platform. However I've got to resolve the whole not secure issue on Google.

So what I'm going to do is write a very simple version of my application that can be deployed to heroku.

Tue, May 3, 2022 7:47:10 PM

- I also want to be able to highlight my text
- add selected text to dictionary

I have another idea for a feature, so I want a way to mark the articles as good or bad
definately want to have an HTMl element.

Tue, May 3, 2022 4:37:27 PM

I just found a new feature that needs to be added.

This can be found on https://vitejs.dev/guide/#overview

it doesn't record the data when it changes from

https://vitejs.dev/
https://vitejs.dev/guide/
https://vitejs.dev/guide/#overview

So the solution is to create a handler that watches for changes in window.location.href. The current implementation only handles for cases of window reload.

Maybe I use the background

Tue, May 3, 2022 12:00:19 AM

https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/

chrome://settings/security?search=certificate

chrome://flags/#allow-insecure-localhost

https://stackoverflow.com/questions/47700269/google-chrome-localhost-neterr-cert-authority-invalid
chrome://flags/#allow-insecure-localhost

use this link chrome://extensions/ to load the companion extension that goes along with the server.

https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

### Linux

```sh

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
```

## Windows

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

```

talks about enabling https for expresss server
https://expressjs.com/en/resources/middleware/cors.html

update the extension with the fetch api or async/await

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

https://expressjs.com/en/starter/basic-routing.html
basic routing in express 4.17^

### Add Certificate to the Trusted Root Certifcation Authorties Store (Windows)
https://asu.secure.force.com/kb/articles/FAQ/How-Do-I-Add-Certificates-to-the-Trusted-Root-Certification-Authorities-Store-for-a-Local-Computer

## Getting data out of POST request handler.

https://www.geeksforgeeks.org/how-to-get-post-data-in-node-js/#:~:text=In%20express%2C%20we%20can%20use%20the%20app.post%20%28%29,the%20callback%20function%20of%20the%20app.post%20%28%29%20method.
```
