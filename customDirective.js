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
app.directive('displayDataInTable', function() {
	return {
    	restrict: 'AE',
        scope: true, 
        templateUrl: 'articleTable.html'
    };
})

app.controller('isolateCtrl', function($scope) {
    $scope.customer1 = {name: 'customer1', id: 1};
    $scope.customer2 = {name: 'customer2', id: 2};
    $scope.customer3 = {name: 'customer3', id: 3};
})
app.directive('customerDisplay', function() {
    return {
        scope: {
            customerInfo: '=cInfo'      //the directive isolates everything except models(customerInfo) you added to the scope:{}
        },
        template: 'Name: {{customerInfo.name}} | id: {{customerInfo.id}}'  
        // if we use 'Name: {{customer1.name}} | id: {{customer1.id}}', won't print, because customer1 is not defined, we didn't pass it into scope:{}
    };
})

app.directive('manipulateDom', function() {
    return {
        link: function($scope, element, attrs) {
            element.bind('dblclick', function() {
                element.html('You have dblclicked me!');
            });
            element.bind('mouseenter', function() {
                element.css('color', '#ff0000');
            });
            element.bind('mouseleave', function() {
                element.css('color', '#000000');
            })
        }
    };
})