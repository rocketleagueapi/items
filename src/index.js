"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.specials = exports.slots = exports.series = exports.products = exports.paints = exports.certs = void 0;
var certs_json_1 = require("./parsed/certs.json");
__createBinding(exports, certs_json_1, "default", "certs");
var paints_json_1 = require("./parsed/paints.json");
__createBinding(exports, paints_json_1, "default", "paints");
var products_json_1 = require("./parsed/products.json");
__createBinding(exports, products_json_1, "default", "products");
var series_json_1 = require("./parsed/series.json");
__createBinding(exports, series_json_1, "default", "series");
var slots_json_1 = require("./parsed/slots.json");
__createBinding(exports, slots_json_1, "default", "slots");
var specials_json_1 = require("./parsed/specials.json");
__createBinding(exports, specials_json_1, "default", "specials");
