angular.module('a2h2', ['ngRoute'])

.config(function($locationProvider, $routeProvider) {

	$routeProvider
		.when('/questions/:id', {
			templateUrl: 'templates/question.html',
			controller: 'SurveyQuestionController',
			resolve: {
				'question': function($route, SurveyService) {
					var id = $route.current.params.id;
					return SurveyService.getQuestion(id);
				}
			}
		})
		.otherwise('/questions/0')
})

.provider('SurveyService', function() {
	var questions = {};

	return {
		addQuestion: function(id, data) { questions[id] = data; },
		$get: function($q) {
			return {
				getQuestion: function(id) {
					return $q.resolve(questions[id]);			
				}
			}
		}
	}
})

.config(function(SurveyServiceProvider) {
	SurveyServiceProvider.addQuestion(0, {
		text: 'this is the sample data'
	});
})

.controller('SurveyQuestionController', function($scope, question) {
	$scope.text = question.text;	
})

.controller('TestController', function($scope) {
	$scope.text = 'we did it! Angular.js has happened';
});
