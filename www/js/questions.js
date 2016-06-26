angular.module('a2h2')

.filter('choices', function(iconsFilter) {
	return function(value) {
		if( !angular.isString(value) ) return value;

		return value.split('|').map(function(substr) {
			var match = substr.match(/([^:]+):(.*)$/);

			return {
				nextId: match[2],
				text: iconsFilter(match[1])
			}
		})
	}
})

.config(function(SurveyServiceProvider) {
	SurveyServiceProvider
		.question('1', {
			text: 'How are you feeling today?',
			type: 'icon-scale',
			responses: '*sad*:2|*sad*:2|*sad*:2|*sad*:2|*sad*:2'
		})

		.question('2', {
			text: 'Are you sick with a cold today?',
			type: 'multiple-choice',
			responses: 'Yes:2a|No:3'
		})

		.question('2a', {
			text: 'Do you feel better, worse, or the same as you did yesterday?',
			type: 'multiple-choice',
			responses: 'Better:2b|Worse:2b|The Same:2b'
		})


})
