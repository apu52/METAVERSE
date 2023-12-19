# MayMyIndia SDK for NodeJs

[![N|Solid](http://www.mapmyindia.com/api/img/mapmyindia-api.png)](http://www.mapmyindia.com/api)

This is unofficial SDK and covers basic APIs. As this is open source project, contributions and suggestions are welcome.
API's available in this package.

  - [`Autosuggest API`](http://www.mapmyindia.com/api/advanced-maps/doc/autosuggest-api.php)
  - [`Geocoding API`](http://www.mapmyindia.com/api/advanced-maps/doc/geocoding-api.php)
  - [`Reverse Geocoding API`](http://www.mapmyindia.com/api/advanced-maps/doc/reverse-geocoding-api.php)
  - [`Route / Driving Directions API`](http://www.mapmyindia.com/api/advanced-maps/doc/route-api.php)
  - [`Driving Distance Matrix API`](http://www.mapmyindia.com/api/advanced-maps/doc/distance-api.php)
  - [`Place / eLoc Details API`](http://www.mapmyindia.com/api/advanced-maps/doc/place-details-api.php)
  - [`Nearby API`](http://www.mapmyindia.com/api/advanced-maps/doc/nearby-api.php)
  - [`Still Map Image API`](http://www.mapmyindia.com/api/advanced-maps/doc/still-map-image-api.php)

# Dependencies !
Ther are just two packages which are used to make this NPM and these are :- 

  - [`node-rest-client`](https://www.npmjs.com/package/node-rest-client) - for making actual http calls behind the scene
  - [`bluebird`](https://www.npmjs.com/package/bluebird) - for making promises and return data when its available.

# Installation

Installation is pretty easy and straight forward, all you have to do is run this command and you are done.
```js
npm i mapmyindia-sdk-nodejs -S
```
# Usage
### 1. [`Autosuggest API`](http://www.mapmyindia.com/api/advanced-maps/doc/autosuggest-api.php)

Searches for and auto-suggests results as you type an address, a city or point of interest (POI) and returns available information along with its coordinates.

```js
var mapsdk = require('mapmyindia-sdk-nodejs');
//testing auto Suggestions
// Parameters are API_KEY, any valid string (in this example I was trying to get suggestions of Lovely Professional University, Punjab, India. Yes I am alumni of this lovely university :D )
// this function returns promise which can be used to handle success or failure response accrodingly.
 mapsdk.autoSuggest('YOUR-API-KEY','lovely professional').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
});
```
### 2. [`Geocoding API`](http://www.mapmyindia.com/api/advanced-maps/doc/geocoding-api.php)
The Geocoding API returns a bunch of details about a searched place which could be any of the following types - addresses, pois, phone numbers, house numbers etc.

```js
var mapsdk = require('mapmyindia-sdk-nodejs');
//testing geocoding
// Parameters are API_KEY, Address to geocode (It doesn't have to be exact address ;) )
// this function returns promise which can be used to handle success or failure response accrodingly.
 mapsdk.geoCodeGivenAddressString('YOUR-API-KEY','68, okhla phase 3, delhi').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
```
### 3. [`Reverse Geocoding API`](http://www.mapmyindia.com/api/advanced-maps/doc/reverse-geocoding-api.php)
This API returns the closest matching address to a provided latitude-longitude point.
```js
var mapsdk = require('mapmyindia-sdk-nodejs');
// testing reverse geocoding
// Parameters are API_KEY, Latitude, Longitude
// this function returns promise which can be used to handle success or failure response accrodingly.
 mapsdk.reverseGeoCodeGivenLatiLongi('YOUR-API-KEY',26.5645,85.9914).then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
```
### 4. [`Route / Driving Directions API`](http://www.mapmyindia.com/api/advanced-maps/doc/route-api.php)
A REST API that calculate driving route between specified locations including via points, with some optional route parameters.
```js
var mapsdk = require('mapmyindia-sdk-nodejs');
//testing routes
// Parameters are API_KEY, Starting point latitude, Starting point longitude, Ending point latitude, Ending point longitude
// this function returns promise which can be used to handle success or failure response accrodingly.
mapsdk.getRoute('YOUR-API-KEY',28.111,77.111,28.22,77.22).then(function(res)
{
    console.log(JSON.stringify(res));
}).catch(function(ex){
    console.log('came in catch');
    console.log(ex);
});
```
### 5. [`Driving Distance Matrix API`](http://www.mapmyindia.com/api/advanced-maps/doc/distance-api.php)
A REST API that provides driving distance and time from a given center point to any number of points.
```js
var mapsdk = require('mapmyindia-sdk-nodejs');
//Driving Distance Matrix API
 mapsdk.getDistance('YOUR-API-KEY',28.6976,77.9749,'29,78|30,78|28,79').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
```
### 6. [`Place / eLoc Details API`](http://www.mapmyindia.com/api/advanced-maps/doc/place-details-api.php)
This API can be used to extract the details of a particular place with the help of its place id.
```js
var mapsdk = require('mapmyindia-sdk-nodejs');
//Place / eLoc Details API

 mapsdk.getPlaceDetail('YOUR-API-KEY','D75CA2').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
```
### 7. [`Nearby API`](http://www.mapmyindia.com/api/advanced-maps/doc/nearby-api.php)
This API can be used to search nearby POIs either of a category using the unique code assigned to that category or using a generic keyword.

```js
var mapsdk = require('mapmyindia-sdk-nodejs');
//Nearby API
 mapsdk.getNearByPlaces('YOUR-API-KEY',28.546955020526934,77.28168801307678,'food').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
```
### 8. [`Still Map Image API`](http://www.mapmyindia.com/api/advanced-maps/doc/still-map-image-api.php)
These map tiles follow the standard Web Mercator tile format - a.k.a Spherical Mercator, and are usually supported natively by any map library that you are using, but read on if you want to know more details. The URL however does not follow standard slippy map tile names. The image is returned according to a WGS-84 position, pixel size and zoom level of the map image. The image can be a retina image and markers can be added to the image to indicate position of any object.


```js
//Still Map Image API
mapsdk.getStillImage('YOUR-API-KEY',28.546955020526934,77.28168801307678,18,'800x480').then(function(res)
 {
     console.log(JSON.stringify(res));
 }).catch(function(ex){
     console.log('came in catch');
     console.log(ex);
 });
```

Change "YOUR-API-KEY" with your API key. To get your api key you need to signup/register on [`MapMyIndia`](http://www.mapmyindia.com/api/)







