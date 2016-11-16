const SERVER_URL = 'https://class-server.herokuapp.com/collections/alex-gifs-app/'; 

function GifController ($scope, $http) {
$scope.gifs = []; 
$scope.errors = {}; 

	function init(){
		$http.get(SERVER_URL).then(function(response){
			$scope.gifs = response.data; 
		});
	};

	init(); 

	$scope.validateName = function(name){
		if (name === undefined || name === ''){
			$scope.errors.name = "You must include a name."; 
			return false; 
		} else {
			return true;
		}

	};

	// $scope.validateURL = function(url){
	// 	console.log('URL', url); 
	// 	console.log('URL.url', url.url);
	// 	if(!url.startsWith('http')){
	// 		$scope.errors.url = "Must be a valid URL starting with http or https."; 
	// 		return false; 
	// 	}else{
	// 		$scope.errors.url = ""; 
	// 		return true;
	// 	}
	// }; 

	// $scope.validateEmail = function(email){
	// 	if(!email.includes('@')){
	// 		$scope.errors.email = "Must be a valid email including @ symbol."; 
	// 		return false;
	// 	}else{
	// 		$scope.errors.email = ""; 
	// 		return true;
	// 	}
	// }; 

	// $scope.validateMessage = function(message){
	// 	if (message === undefined){
	// 		$scope.errors.message = "You must include a message."; 
	// 		return false; 
	// 	} else {
	// 		return true;
	// 	}

	// };

	// $scope.validateForm = function (){
	// 	if ($scope.validateName(gif.name) && $scope.validateURL(gif.url) 
	// 		&& $scope.validateEmail(gif.email) && $scope.validateMessage(gif.message)) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }; 

	$scope.addGif = function (gif) {
		if ($scope.validateName(gif.name)) {
			$http.post(SERVER_URL, gif).then(function(response){
				let gif = response.data;
				$scope.gifs.push(gif); 
			});
		}; 
	};

	// $scope.deleteGif = function (){
	// 	$http.delete(SERVER_URL + gif._id).then(function(response){
	// 		console.log(response); 
	// 		$scope.gifs = $scope.gifs.filter(function(x){
	// 			return x._id !== gif._id;
	// 		});
	// 	}); 
	// }; 

}; 

GifController.$inject = ['$scope', '$http'];
export { GifController }; 