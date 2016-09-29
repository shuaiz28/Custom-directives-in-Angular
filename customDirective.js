var app = angular.module('directiveApp', []);
app.controller('directiveCtrl', function($scope) {
	$scope.articleDataSrc = [
		{
    		title: 'title No. 1',
            content: 'content No. 1'
        },
        {
        	title: 'title No. 2',
            content: 'content No. 2'
        },
        {
        	title: 'title No. 3',
            content: 'content No. 3'
        },
        {
        	title: 'title No. 4',
            content: 'content No. 4'
        }
    ];
})
app.directive('display', function() {
	return {
    	restrice: 'AE',
        templateUrl: 'articleTable.html'
    };
})