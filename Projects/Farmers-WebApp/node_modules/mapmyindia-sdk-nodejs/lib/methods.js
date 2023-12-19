/**
 * Created by msb on 24-03-2017.
 */
'use strict';
var config = require('./config');
var Client = require('node-rest-client').Client;
var client = new Client();
var Promise = require('bluebird');

// var api_key = exports.api_key = '';

var reverseGeoCodeGivenLatiLongi = exports.reverseGeoCodeGivenLatiLongi = function (api_key, lati, longi) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!lati) {
            throw new Error('You must provide latitude.');
        }
        if (!longi) {
            throw new Error('You must provide longitude.');
        }
        client.get(config.App_Base_URI + api_key + '/rev_geocode?lat=' + lati + '&lng=' + longi, function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var geoCodeGivenAddressString = exports.geoCodeGivenAddressString = function (api_key, address) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!address) {
            throw new Error('You must provide address.');
        }

        client.get(config.App_Base_URI + api_key + '/geo_code?addr=' + address , function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var autoSuggest = exports.autoSuggest = function (api_key, candidateString) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!candidateString) {
            throw new Error('You must provide candidate query.');
        }

        client.get(config.App_Base_URI + api_key + '/autosuggest?q=' + candidateString , function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var getRoute = exports.getRoute = function (api_key, startingPointLatitude, startingPointLongitude, endingPointLatitude, endgingPointLongitude) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!startingPointLatitude) {
            throw new Error('You must provide starting point latitude.');
        }
        if (!startingPointLongitude) {
            throw new Error('You must provide starting point longitude.');
        }

        if (!endingPointLatitude) {
            throw new Error('You must provide ending point latitude.');
        }

        if (!endgingPointLongitude) {
            throw new Error('You must provide ending point longitude.');
        }

        client.get(config.App_Base_URI + api_key + '/route?start=' + startingPointLatitude+','+startingPointLongitude+'&destination='+endingPointLatitude+','+endgingPointLongitude+'&alternatives=true&with_advices=1' , function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}


var getDistance = exports.getDistance = function (api_key, centerPointLatitude, centerPointLongitude, points ) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!centerPointLatitude) {
            throw new Error('You must provide centre point latitude.');
        }
        if (!centerPointLongitude) {
            throw new Error('You must provide centre point longitude.');
        }

        if (!points) {
            throw new Error('You must provide points to calculate distance from.');
        }


        client.get(config.App_Base_URI + api_key + '/distance?center=' + centerPointLatitude+','+centerPointLongitude+'&pts='+points , function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var getPlaceDetail = exports.getPlaceDetail = function (api_key, place_id) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!place_id) {
            throw new Error('You must provide place whose details you are looking for.');
        }


        client.get(config.App_Base_URI + api_key + '/place_detail?place_id=' + place_id, function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var getNearByPlaces = exports.getNearByPlaces = function (api_key, latitude, longitude, keyword) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!latitude) {
            throw new Error('You must provide latitude around which you are searching.');
        }
        if (!longitude) {
            throw new Error('You must provide longitude around which you are searching.');
        }
        if (!keyword) {
            throw new Error('You must provide keyword to narrow down search results.');
        }


        client.get(config.App_Base_URI + api_key + '/nearby_search?lat=' + latitude + '&lng='+longitude+'&keywords='+keyword+'&page=1', function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {

                reject(response);
            }
        });
    });

}

var getStillImage = exports.getStillImage = function (api_key, centreLatitude, centreLongitude, zoom,size) {
    return new Promise(function (resolve, reject) {
        if (!api_key) {
            throw new Error('You must provide api key.');
        }
        if (!centreLatitude) {
            throw new Error('You must provide centre latitude.');
        }
        if (!centreLongitude) {
            throw new Error('You must provide centre longitude.');
        }
        if (!zoom) {
            throw new Error('You must provide zoom level for which the image is requested. Ranges from 4 to 18 with 18 being the highest zoomed in level..');
        }
        if(!size)
        {
            throw new Error('You must provide the size of the image requested in pixels as “x”');
        }

        client.get(config.App_Base_URI + api_key + '/still_image?center=' + centreLatitude + ','+centreLongitude +'&zoom='+zoom+'&size='+size, function (data, response) {
            if (response.statusCode == 200) {
                resolve(data);
            }
            else {
                reject(response);
            }
        });
    });

}









