const SERVER_URL = 'https://class-server.herokuapp.com/collections/alex-gifs-app/'; 

function GifController ($scope, $http) {
$scope.gifs = []; 
$scope.errors = {}; 
// var form = false;

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

	$scope.validateURL = function(url){
		
		if(!url.startsWith('http') || url === undefined || url === ''){
			$scope.errors.url = "Must be a valid URL starting with http or https."; 
			return false; 
		}

		if(url === ''){
			$scope.errors.url = ''; 
		}

		return true;
	}; 

	$scope.validateEmail = function(email){
		console.log('email', email); 

		if(!email.includes('@') || email === undefined || email === ''){
			$scope.errors.email = "Must be a valid email including @ symbol."; 
			return false;
		}

		return true;
	}; 

	$scope.validateMessage = function(message){
		if (message === undefined || message === ''){
			$scope.errors.message = "You must include a message."; 
			return false; 
		} else {
			return true;
		}
	};

	// var validateForm  = function (form){
	// 	if ($scope.validateName(gif.name) && $scope.validateURL(gif.url) 
	// 		&& $scope.validateEmail(gif.email) && $scope.validateMessage(gif.message)) {
	// 		form = true;
	// 	} else {
	// 		form = false;
	// 	}
	// }; 

	// validateForm(); 

	$scope.addGif = function (gif) {
		if ($scope.validateName(gif.name) && $scope.validateURL(gif.url) 
			&& $scope.validateEmail(gif.email) && $scope.validateMessage(gif.message)) {
			$http.post(SERVER_URL, gif).then(function(response){
				let gif = response.data;
				$scope.gifs.push(gif); 
			});
		}; 
	};

// 	$scope.deleteGif = function (gif){
// 		$http.delete(SERVER_URL + gif._id).then(function(){
// 			$scope.gifs = $scope.gifs.filter(function(x){
// 				return x._id !== gif._id;
// 			});
// 		}); 
// 	}; 

// }; 

GifController.$inject = ['$scope', '$http'];
export { GifController }; 