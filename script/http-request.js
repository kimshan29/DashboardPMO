//Http Request

var webServiceBaseUrl = "http://192.168.100.185:65080";

mainApp.factory("HttpRequest", function ($http, $q) {
    var get = function (query) {
        return $http.get(webServiceBaseUrl + query);

    };
    var post = function (query, data) {
        return $http.post(webServiceBaseUrl + query, data);
    };
    var del = function (query) {
        return $http.delete(webServiceBaseUrl + query);
    };

    return {
        get: get,
        post: post,
        del: del
    };
});