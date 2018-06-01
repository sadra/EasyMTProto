# EasyMTPorto

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]]

Easy Nodejs client for **Telegram Mobile Protocol** [(MTProto)](https://core.telegram.org/mtproto) in pure **javascript** on the Node.js platform


**Telegram Mobile Protocol** [(MTProto)](https://core.telegram.org/mtproto) unofficial library in pure **javascript** on the Node.js platform

## About MTProto..

**MTProto** is the [Telegram Messenger](http://www.telegram.org ) protocol
_"designed for access to a server API from applications running on mobile devices"_.

The Mobile Protocol is subdivided into three components ([from the official site](https://core.telegram.org/mtproto#general-description)):

 - High-level component (API query language): defines the method whereby API
 queries and responses are converted to binary messages.

 - Cryptographic (authorization) layer: defines the method by which messages
 are encrypted prior to being transmitted through the transport protocol.

 - Transport component: defines the method for the client and the server to transmit
 messages over some other existing network protocol (such as, http, https, tcp, udp).



## Easy-mtPort0 in short..

The **telegram-mt-node** library implements the **Mobile Protocol** and provides the following features:

 - Both **TCP** and **HTTP connections** implemented in the transport layer

 - A cipher implementation for **AES and RSA encryption** in the security layer

 - Both **plain-text and encrypted message** to communicate data with the server

<img src="https://raw.githubusercontent.com/enricostara/telegram.link/master/telegram.link.png"
    width="20" /> [**telegram.link**](http://telegram.link)  main project depends by this library.

## Installation

```bash
$ git clone --branch=master https://github.com/sadra/EasyMTPorto
$ cd EasyMTPorto
$ npm install
```


## Run

### With nodemon

First of all install `nodemon` on you global path: [**nodemo**](https://nodemon.io/)
and then run it with nodmeon
```bash
$ nodemon emtporto.js
```

### With pm2

First of all install `pm2` tool: [**pm2**](http://pm2.keymetrics.io/)
and then run it with nodmeon
```bash
$ pm2 start emtporto.js -i max
$ pm2 list
```


## License

The project is released under the [Apache License 2.0](./LICENSE)

[npm-url]: https://www.npmjs.org/package/telegram-mt-node
[npm-image]: https://badge.fury.io/js/telegram-mt-node.svg

[travis-url]: https://travis-ci.org/enricostara/telegram-mt-node
[travis-image]: https://travis-ci.org/enricostara/telegram-mt-node.svg?branch=master

[coverage-url]: https://coveralls.io/r/enricostara/telegram-mt-node?branch=master
[coverage-image]: https://img.shields.io/coveralls/enricostara/telegram-mt-node.svg

[climate-url]: https://codeclimate.com/github/enricostara/telegram-mt-node
[climate-image]: https://codeclimate.com/github/enricostara/telegram-mt-node/badges/gpa.svg

[sauce-url]: https://saucelabs.com/u/telegram-mt-node
[sauce-image]: https://saucelabs.com/browser-matrix/telegram-mt-node.svg