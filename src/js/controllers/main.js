const SERVER_URL = 'https://class-server.herokuapp.com/collections/alex-gifs-app/'; 

function GifController ($scope, $http) {
$scope.gifs = []; 

	$scope.addGif = function (gif) {
		$http.post(SERVER_URL, gif).then(function(response){
			console.log(response.data); 
			
			let gif = response.data;
			$scope.gifs.push(gif); 
		});
	}

}; 

GifController.$inject = ['$scope', '$http'];
export { GifController }; 