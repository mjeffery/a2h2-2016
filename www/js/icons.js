angular.module('a2h2')

.filter('icons', function($sce, IconService) {
	return function(text) {
		if( !angular.isString(text) ) return text; 

		var html = text.replace(/\*([^*]+)\*/g, function(str, iconName) {
			return '<img src="' + IconService.getUrl(iconName) + '"></img>';
		});

		return $sce.trustAsHtml(html);
	}
})

.config(function(IconServiceProvider) {
	IconServiceProvider
		.icon('sad', 'img/sad face.png');
});
