angular.module('factory', [])

// no funciona la factoria, falta completar
.factory('testRequest', function($http) { //declaramos la factory
    var path = "https://restcountries.eu/rest/v1/";//API path

    return {
        //Login
        posts : function(){ //Retornara la lista de posts
            global = $http.get(path+'posts');
            return global;
        },
        post : function(id){ //retornara el post por el id
            global = $http.get(path+'posts/'+id);
            return global;
        }
    }
});
