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

	$scope.addGif = function (gif) {
		var addForm = false;

		if ($scope.validateName(gif.name) && $scope.validateURL(gif.url)) {
			console.log('addGif runs the validation block (1 of 3)'); 
			addForm = true;
		} 

		if (addForm) {
			$http.post(SERVER_URL, gif).then(function(response){
				console.log('addGif runs the POST block (2 of 3)'); 
				let gif = response.data;
				$scope.gifs.push(gif); 
			});
		} else {
			console.log('addGif runs the else block (3 of 3)'); 
			$scope.errors.submit = "The form cannot be submitted with 1 or more missing fields.";
		}; 
	};

	$scope.deleteGif = function(gif){
		console.log("Deleted gif -->", gif); 
		$http.delete(SERVER_URL + gif._id).then(function(response){
			console.log("DB response -->", response); 
		}); 
	}; 
}; 

GifController.$inject = ['$scope', '$http'];
export { GifController }; 