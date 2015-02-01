# NodeJS-Selenium-WebDriver-Programming-with-Soda
A project to learn Javascript programming of Selenium WebDriver with the NodeJS Soda Library.

## Test Locally

### Download [the Selenium RC Server .jar file](http://docs.seleniumhq.org/projects/remote-control/) to the `seleniumrc` folder.

### Run:
`run.sh`
or
`java -jar seleniumrc/selenium-server-standalone-x.x.x.jar -trustAllSSLCertificates`

This will start the selenium remote control server and make it available for node to send test sequences to.

### Then just run:
`node index.js`
