<h1 align="center">Rocket League Items Data</h1>
<p align="center">
    <a href="https://github.com/rocketleagueapi/items/packages/1108141" target="_blank">
  <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/rocketleagueapi/items?label=Version">
  </a>
  <a href="https://github.com/rocketleagueapi/items/blob/master/LICENSE" target="_blank">
    <img alt="License: LGPL--3.0--or--later" src="https://img.shields.io/github/license/rocketleagueapi/items?color=green" />
  </a>
</p>
A collection of JSON files including all items, paints, certifications, slots, special editions, maps, titles, qualities, series and playlists. 

### 🏠 [Homepage](https://github.com/rocketleagueapi/items)

## Install

Install this package using your package manager of choice.
```sh
 npm i @rocketleagueapi/items
```
or
```sh
 yarn add @rocketleagueapi/items
```

## Example Usage
```js
const { products } = require('@rocketleagueapi/items');

// Where 32 is the product ID
const alphaBoost = products[32];
console.log(alphaBoost.paintable) // false
```

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Rocket League API](https://github.com/rocketleagueapi).<br />
This project is [LGPL--3.0--or--later](https://github.com/rocketleagueapi/items/blob/master/LICENSE) licensed.
