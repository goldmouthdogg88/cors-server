First you'll want to generate your certificates

### Linux

```sh
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
```

### Windows

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

```

Then add the certificates to the trusted root authority

win + r to open run command

open: mmc

Then open Chrome

navigate to the following link:

chrome://flags/#allow-insecure-localhost

then enable "Allow invalid certificates for resources loaded from localhost".

then import the certificate to chrome

chrome://settings/security?search=certificate

then browse to the directory that holds your selfsigned certificate

Then you'll want to load the certificate

navigate your browser to the following:

chrome://extensions/

enable developer mode (in the top right corner)

Then click load unpacked

browse to the directory that holds the chrome extension for the server application.

close and re-open chrome

navigate to any url you desire.
