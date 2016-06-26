angular.module('a2h2')

.filter('icons', function($sce, $interpolate, IconService) {
	var fn = $interpolate('<img src="{{url}}" class="{{cssClass}}"></img>');

	return function(text) {
		if( !angular.isString(text) ) return text; 

		var html = text.replace(/\*([^*]+)\*/g, function(str, iconName) {
			return fn(IconService.getIconData(iconName))
		});

		return $sce.trustAsHtml(html);
	}
})

.config(function(IconServiceProvider) {
	IconServiceProvider
		.icon('feeling-5', 'img/feeling-5.png', 'feeling-icon')
		.icon('feeling-4', 'img/feeling-4.png', 'feeling-icon')
		.icon('feeling-3', 'img/feeling-3.png', 'feeling-icon')
		.icon('feeling-2', 'img/feeling-2.png', 'feeling-icon')
		.icon('feeling-1', 'img/feeling-1.png', 'feeling-icon')
		.icon('body-ache', 'img/body_ache_21.gif', 'feeling-icon')
		.icon('chills', 'img/chillds_12.gif', 'feeling-icon')
		.icon('cough', 'img/cough_03.gif', 'feeling-icon')
		.icon('doctor', 'img/doctor_27.gif', 'feeling-icon')
		.icon('fever', 'img/fever_16.fig', 'feeling-icon')
		.icon('headache', 'img/headache_10.gif', 'feeling-icon')
		.icon('no-school', 'img/no_school_23.gif', 'feeling-icon')
		.icon('nose', 'img/nose_19.gif', 'feeling-icon')
		.icon('sore-throat', 'img/sore_throat_07.gif', 'feeling-icon')
});
