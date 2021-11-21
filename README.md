<h1 align="center">Items</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000&label=Version" />
    <a href="https://github.com/rocketleagueapi/items/blob/master/LICENSE" target="_blank">
  <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/rocketleagueapi/items">
  </a>
  <a href="https://github.com/rocketleagueapi/items/blob/master/LICENSE" target="_blank">
    <img alt="License: LGPL--3.0--or--later" src="https://img.shields.io/github/license/rocketleagueapi/items?color=green" />
  </a>
</p>

A collection of JSON files.

### 🏠 [Homepage](https://github.com/rocketleagueapi/items)

## Install
Create the file `.npmrc` in order to point your package manager to the correct package repository.
```
@rocketleagueapi:registry=https://npm.pkg.github.com
```
Install this package using your package manager of choice.
```sh
 npm i @rocketleagueapi/items
```
or
```sh
 yarn add @rocketleagueapi/items
```

## Updating
The information can updated using [ItsBrank's Developer Tools Plugin](https://github.com/ItsBranK/DeveloperTools) with [Bakkesmod](https://bakkesmod.com/) to generate the raw JSON data.  Use the following console commands:

```sh
brank_dump_slots {slot_index} {slot_label} {slot_plural_Label} {slot_online_label} {slot_description} [JSON]
brank_dump_products {product_id} {product_long_label} {product_short_sort_label} {product_bool_currency} {product_bool_blueprint} {product_bool_paintable} {product_quality_id} {slot_index} {product_quality_id} {product_thumbnail_asset} [JSON]
brank_dump_paints {database_paint_id} {database_paint_name} {database_paint_label} {database_paint_colors} [JSON]
brank_dump_certifications {database_certified_id} {database_certified_name} {database_certified_label} {database_certified_description} [JSON]
brank_dump_specialeditions {database_special_id} {database_special_name} {database_special_label} [JSON]
brank_dump_series {database_series_id} {database_series_label} [JSON]
```

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Rocket League API](https://github.com/rocketleagueapi).<br />
This project is [LGPL--3.0--or--later](https://github.com/rocketleagueapi/items/blob/master/LICENSE) licensed.
