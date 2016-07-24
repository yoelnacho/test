angular.module('CountriesModel', [])

.model('Country', function(){
    var regions = [
        { name: 'europe' },
        { name: 'americas' },
        { name: 'asia' },
        { name: 'africa' }
    ];
});
