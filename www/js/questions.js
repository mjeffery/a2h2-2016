angular.module('a2h2')

.filter('choices', function(iconsFilter) {
	return function(value) {
		if( !angular.isString(value) ) return value;

		return value.split('|').map(function(substr) {
			var match = substr.match(/([^:]+)(?::(.*))?$/);
			var response = {
				text: iconsFilter(match[1])
			}

			if( angular.isString(match[2]) )
				response.nextId = match[2];

			return response;
		})
	}
})

.config(function(SurveyServiceProvider) {
	SurveyServiceProvider
		.question('1', {
			text: 'How are you feeling today?',
			type: 'icon-scale',
			responses: '*feeling-5*:2|*feeling-4*:2|*feeling-3*:2|*feeling-2*:2|*feeling-1*:2'
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

		.question('2b', {
			text: 'Which buttons show how you feel?',
			type: 'multiple-selection',
			responses: 'Cough|Sore Throat|Headache|Chills|Fever|Stuffy Nose|Body Aches|I was too sick to go to school|I had to go see the doctor',
			nextId: '2c' 
		})

		.question('2c', {
			text: 'Is anyone else in your family sick?',
			type: 'multiple-selection',
			responses: 'No - no one else is sick|At least one grown-up|At least one little sister or brother is sick|At least one older sister or brother is sick',
			nextId: 'done'
		})

		.question('3', {
			text: 'Did any of these other things happen today?',
			type: 'multiple-selection',
			responses: 'I went to the doctor|Someone in my family has a cold, but I feel fine|I have a friend who has a cold, but I feel fine|I got a flu vaccine <br/> (It\'s also called a flu shot!)',
			nextId: 'done'
		})
})
