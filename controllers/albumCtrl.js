var app = angular.module('app');

app.controller('AlbumController', function($scope, $http) {
	$scope.albums = [];
	$scope.name = 'my name';
	// var config = {
	// 	params :  { 
			// 'client_id':'9bbf002f037c4812a65c1b0cc671e22a',
			// 'response_type':'token',
			// 'redirect_uri':'http://localhost:8888/callback/'
	// 	},
	// 	headers: {
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
	// 		'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
	// 	}
	// }
	// $http.get('https://accounts.spotify.com/authorize', config)
	// 	.success(function(data) {
	// 		alert('oh yeah!');
	// 	})
	// 	.error(function() {
	// 		alert('error!');
	// 	});

	$http({
		url: 'https://accounts.spotify.com/authorize',
		method: 'GET',
		params: {
			'client_id':'9bbf002f037c4812a65c1b0cc671e22a',
			'response_type':'token',
			'redirect_uri':'http://localhost:8888/callback/'
		},
		headers: {
			'Content-Type':'application/x-www-form-urlencoded'
		}
	}).then(function() {
		alert('woop');
	}, function() {
		alert('nay');
	});
});