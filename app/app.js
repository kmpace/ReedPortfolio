// $(function(){
// 	var feed = new Instafeed({
// 		target: 'instafeed',
// 		get: 'user',
// 		userId: 6233508,
// 		accessToken: '6233508.306e98e.5dbb1a193b67474bb22533cd28983c09',
// 		useHttp: true,
// 		tagName: 'photographyportfolio',
// 		links: true,
// 		limit: 12,
// 		sortBy: 'most-recent',
// 		resolution: 'low_resolution',
// 		template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'


// 	});
// feed.run();

// });


var ReedPortfolio = angular.module('ReedPortfolio',['ngRoute']);

ReedPortfolio.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when("/", {
			templateURL: "index.html",
			controller: "IntroPageController"
		})
		.when("/photos", {
			templateURL: "partials/photos.html",
		 	controller: "PhotoPageController"

		})
		.when("/videos", {
			templateURL: "partials/videos.html",
			controller: "VideoPageController"
		})
		.otherwise({
			redirectTo: "/404"
		});
	}

	]);
