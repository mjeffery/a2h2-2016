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
});
