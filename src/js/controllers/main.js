const SERVER_URL = 'https://class-server.herokuapp.com/collections/alex-gifs-app/'; 

function GifController ($scope, $http) {
$scope.gifs = []; 

	function init(){
		$http.get(SERVER_URL).then(function(response){
			console.log('Gets server response --->', response.data);
			$scope.gifs = response.data; 
		});
	};

	init();

	$scope.addGif = function (gif) {
		$http.post(SERVER_URL, gif).then(function(response){
			console.log('Posts form -->', response.data); 
			
			let gif = response.data;
			$scope.gifs.push(gif); 
		});
	}

}; 

GifController.$inject = ['$scope', '$http'];
export { GifController }; 