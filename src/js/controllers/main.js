const SERVER_URL = 'https://class-server.herokuapp.com/collections/alex-gifs-app/'; 

function GifController ($scope, $http) {

	$scope.addGif = function (gif) {
		$http.post(SERVER_URL, gif).then(function(response){
			console.log(response.data);
		});
	}

}; 

GifController.$inject = ['$scope', '$http'];
export { GifController }; 

//$http.get('/someUrl', config).then(successCallback, errorCallback);