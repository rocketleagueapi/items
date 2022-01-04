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
const { products } = '@rocketleagueapi/items';

// Where 32 is the product ID
const alphaBoost = products[32];
console.log(alphaBoost.paintable) // false
```

## Updating
The information can updated using [ItsBranK's Developer Tools Plugin](https://github.com/ItsBranK/DeveloperTools) with [Bakkesmod](https://bakkesmod.com/) to generate the raw JSON data.  Use the following console commands:

```sh
brank_dump_slots {slot_index} {slot_label} {slot_plural_Label} {slot_online_label} {slot_description} [JSON];
brank_dump_products {product_id} {product_long_label} {product_short_sort_label} {product_bool_currency} {product_bool_blueprint} {product_bool_paintable} {product_quality_id} {slot_index} {product_quality_id} {product_thumbnail_asset} {product_trade_restrictions} [JSON];
brank_dump_paints {database_paint_id} {database_paint_name} {database_paint_label} {database_paint_colors} [JSON];
brank_dump_certifications {database_certified_id} {database_certified_name} {database_certified_label} {database_certified_description} [JSON];
brank_dump_specialeditions {database_special_id} {database_special_name} {database_special_label} [JSON];
brank_dump_series {database_series_id} {database_series_label} [JSON];
brank_dump_titles {database_title_id} {database_title_text} {database_title_color} [JSON];
brank_dump_playlists {playlist_id} {playlist_title} {playlist_description} {playlist_bool_ranked} {playlist_player_count} [JSON];
brank_dump_maps {map_base_name} {map_file_name} {map_weather_variant_id} {map_variant_name} [JSON];
```

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Rocket League API](https://github.com/rocketleagueapi).<br />
This project is [LGPL--3.0--or--later](https://github.com/rocketleagueapi/items/blob/master/LICENSE) licensed.
