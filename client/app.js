var courseraApp = angular.module('courseraApp', []);

// courseraApp.config(function($routeProvider){
// 	$routeProvider
// 		.when('/courses', {
// 			templateUrl: 'app/courses.html',
// 			controller: 'coursesController'
// 		});

// 		.when('/universities', {
// 			templateUrl: 'app/universities.html',
// 			controller: 'universityController'
// 		});

// 		.when('/categories', {
// 			templateUrl: 'app/categories.html',
// 			controller: 'categoryController'
// 		});

// 		.when('/instructors', {
// 			templateUrl: 'app/instructors.html',
// 			controller: 'instructorController'
// 		});

// 		.when('/sessions', {
// 			templateUrl: 'app/sessions.html',
// 			controller: 'sessionController'
// 		});
// });

courseraApp.controller('coursesController', function($scope){
	$scope.getCourses = function() {
		$.ajax({
				    url: "courses.json",
				    type: "GET",
				    contentType: "application/json",

				    success: function(data) {

				    	$('.course').empty();
				    	$('.university').empty();
				    	$('.category').empty();
				    	$('.instructor').empty();
				    	$('.session').empty();

				    	console.log(data);
				    	for (var i = 0; i < data.elements.length; i++) {
				   
				    		var $course = '<div class="course">'+'<a href="https://www.coursera.org/courses?query='+data.elements[i].name+'" target="_blank">' + data.elements[i].name + " (" + data.elements[i].shortName + ")" + '</div>';
				    		$('#courses').append($course);
				    	}

				    },
				    error: function() {
				    	console.log("Failed to retrieve data");
				    }
				  }); 
	}
});

courseraApp.controller('universityController', function($scope){
	$scope.getUniversities = function() {
		$.ajax({
				    url: "universities.json",
				    type: "GET",
				    contentType: "application/json",

				    success: function(data) {

				    	$('.course').empty();
				    	$('.university').empty();
				    	$('.category').empty();
				    	$('.instructor').empty();
				    	$('.session').empty();

				    	//console.log(data);
				    	for (var i = 0; i < data.elements.length; i++) {
				   
				    		var $course = '<div class="university">'+'<a href="https://www.coursera.org/'+data.elements[i].shortName+'" target="_blank">' + data.elements[i].shortName + '</div>';
				    		$('#courses').append($course);
				    	}

				    },
				    error: function() {
				    	console.log("Failed to retrieve data");
				    }
				  }); 
	}
});


courseraApp.controller('categoryController', function($scope){
	$scope.getCategories = function() {
		$.ajax({
				    url: "categories.json",
				    type: "GET",
				    contentType: "application/json",

				    success: function(data) {

				    	$('.course').empty();
				    	$('.university').empty();
				    	$('.category').empty();
				    	$('.instructor').empty();
				    	$('.session').empty();

				    	console.log(data);
				    	for (var i = 0; i < data.elements.length; i++) {
				   
				    		var $course = '<div class=category>'+'<a href="https://www.coursera.org/courses?query='+data.elements[i].name+'&categories='+data.elements[i].shortName+'" target="_blank" >' + data.elements[i].name + '</div>';
				    		$('#courses').append($course);
				    	}

				    },
				    error: function() {
				    	console.log("Failed to retrieve data");
				    }
				  }); 
	}
});

courseraApp.controller('instructorController', function($scope){
	$scope.getInstructors = function() {
		$.ajax({
				    url: "instructors.json",
				    type: "GET",
				    contentType: "application/json",

				    success: function(data) {

				    	$('.course').empty();
				    	$('.university').empty();
				    	$('.category').empty();
				    	$('.instructor').empty();
				    	$('.session').empty();

				    	console.log(data);
				    	for (var i = 0; i < data.elements.length; i++) {
				   
				    		var $course = '<div class=instructor>'+'<a href="https://www.coursera.org/instructor/'+data.elements[i].firstName.toLowerCase() + data.elements[i].lastName.toLowerCase()+'" target="_blank" >' + data.elements[i].firstName + " " + data.elements[i].lastName + '</div>';
				    		$('#courses').append($course);
				    	}

				    },
				    error: function() {
				    	console.log("Failed to retrieve data");
				    }
				  }); 
	}
});


courseraApp.controller('sessionController', function($scope){
	$scope.getSessions = function() {
		$.ajax({
				    url: "sessions.json",
				    type: "GET",
				    contentType: "application/json",

				    success: function(data) {

				    	$('.course').empty();
				    	$('.university').empty();
				    	$('.category').empty();
				    	$('.instructor').empty();
				    	$('.session').empty();

				    	console.log(data);
				    	for (var i = 0; i < data.elements.length; i++) {
				   
				    		var $course = '<div class=session>'+'<a href="'+data.elements[i].homeLink+'" target="_blank">' + data.elements[i].homeLink + '</div>';
				    		$('#courses').append($course);
				    	}

				    },
				    error: function() {
				    	console.log("Failed to retrieve data");
				    }
				  }); 
	}
});



