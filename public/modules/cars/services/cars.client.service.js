'use strict';

//Cars service used for communicating with the articles REST endpoints
angular.module('cars').factory('Cars', ['$resource',
	function($resource) {
		return $resource('cars/:carId', {
			carId: '@_id',
			carMake: '@make'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);