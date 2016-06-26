angular.module('a2h2', ['ngRoute'])

.config(function($locationProvider, $routeProvider) {

	$routeProvider
		.when('/questions/:id', {
			redirectTo: function(params) {
				if(params.id === 'done') return '/completed'
			},
			templateUrl: 'templates/question.html',
			controller: 'SurveyQuestionController',
			resolve: {
				'question': function($route, SurveyService) {
					var id = $route.current.params.id;
					return SurveyService.getQuestion(id);
				}
			}
		})
		.when('/completed', {
			templateUrl: 'templates/completed.html'
		})
		.otherwise('/questions/1')
})

.provider('SurveyService', function() {
	var rawQuestions = {};
	var provider = {
		question: function(id, data) { 
			rawQuestions[id] = data; 
			return provider;
		},
		$get: function($q, choicesFilter) {
			var questions = _.mapValues(rawQuestions, function(question) {
				return _.extend({}, question, { responses: choicesFilter(question.responses) });
			});

			return {
				getQuestion: function(id) {
					return $q.resolve(questions[id]);			
				}
			}
		}
	}

	return provider;
})

.provider('IconService', function() {
	var icons = {};
	var provider = {
		icon: function(name, url) { 
			icons[name] = url;
			return provider;
		},
		$get: function() {
			return {
				getUrl: function(name) { 
					return icons[name] 
				}
			}
		}
	}

	return provider;
})


.controller('SurveyQuestionController', function($scope, question) {
	$scope.question = question;	
});
