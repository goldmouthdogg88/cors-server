# cors-server

use this link chrome://extensions/ to load the companion extension that goes along with the server.

https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

```sh

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

# just remove the sudo for gitbash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

```

talks about enabling https for expresss server

https://expressjs.com/en/resources/middleware/cors.html

update the extension with the fetch api or async/await

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

https://expressjs.com/en/starter/basic-routing.html
basic routing in express 4.17^

https://asu.secure.force.com/kb/articles/FAQ/How-Do-I-Add-Certificates-to-the-Trusted-Root-Certification-Authorities-Store-for-a-Local-Computer

## Getting data out of POST request handler.

https://www.geeksforgeeks.org/how-to-get-post-data-in-node-js/#:~:text=In%20express%2C%20we%20can%20use%20the%20app.post%20%28%29,the%20callback%20function%20of%20the%20app.post%20%28%29%20method.
