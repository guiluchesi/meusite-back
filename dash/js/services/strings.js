"use strict";

angular.module('Dashboard')
.factory('StringTools', ['$sce', function StringToolsFactory($sce){
	return {
		toSlug: function(title){
			return title.replace(/ /g, '-').replace(/[.*+?^${}()|[\]\\]/g, '').toLowerCase();
		},
		toTitle: function(slug){
			// var small = slug.charAt(0).toUpperCase() + slug.slice(1);
			return slug.replace(/-/g, ' ');
		},
		toPlain: function(html){
			return html.replace(/<(?:.|\n)*?>/gm, '');
		},
		toHtml: function(md){
			return $sce.trustAsHtml(markdown.toHTML(md));
		}
	}
}]);