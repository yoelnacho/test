angular.module('FilmsModel', []) // si no agrego los [] significa que lo estoy llamando, no creando

.factory('Film', function(){

    function Film(name){
        this.name = name;
    }

    // Función para crear un campo Film
    Film.build = function(data){
        // si no viene deata
        if(!data){
            // devuelve null
            return null;
        }
        return new Film(data.Name);
    }

    Film.prototype.toJson = function(){
        return angular.toJdon(this);
    }

    // tomar un array de ojeto json y convertilos en un objeto Film
    Film.fromJsonBunch = function(data){
        if(angular.isArray(data)){
            // construye un nuevo objeto de film partiendo den un array
            return data.map(Film.build).filter(Boolean);

        }
        return Fil.build(data);
    }

    return Film;

});
