var app = {};
// app.getCourses = function() {
// 			$.ajax({
// 				    url: "courses.json",
// 				    type: "GET",
// 				    contentType: "application/json",

// 				    success: function(data) {

// 				    	$('.course').empty();
// 				    	$('.university').empty();
// 				    	$('.category').empty();
// 				    	$('.instructor').empty();
// 				    	$('.session').empty();

// 				    	//console.log(data);
// 				    	for (var i = 0; i < data.elements.length; i++) {
				   
// 				    		var $course = '<div><a href="https://www.coursera.org/courses?query=" target="_blank" class=course>' + data.elements[i].name + '</div>';
// 				    		$('#courses').append($course);
// 				    	}

// 				    },
// 				    error: function() {
// 				    	console.log("Failed to retrieve data");
// 				    }
// 				  }); 
// }


// app.getUniversities = function() {
// 			$.ajax({
// 				    url: "universities.json",
// 				    type: "GET",
// 				    contentType: "application/json",

// 				    success: function(data) {
				    	
// 				    	$('.course').empty();
// 				    	$('.university').empty();
// 				    	$('.category').empty();
// 				    	$('.instructor').empty();
// 				    	$('.session').empty();
// 				    	for (var i = 0; i < data.elements.length; i++) {
// 				    		var $track = '<div><a href="https://www.coursera.org/courses?query=" class= university>' + data.elements[i].shortName + '</div>';
// 				    		$('#universities').append($track);
// 				    	}

// 				    },
// 				    error: function() {
// 				    	console.log("Failed to retrieve data");
// 				    }
// 				  }); 
// }

// app.getCategories = function() {
// 			$.ajax({
// 				    url: "categories.json",
// 				    type: "GET",
// 				    contentType: "application/json",

// 				    success: function(data) {
				    	
// 				    	$('.course').empty();
// 				    	$('.university').empty();
// 				    	$('.category').empty();
// 				    	$('.instructor').empty();
// 				    	$('.session').empty();

// 				    	console.log(data.elements[0].name);
// 				    	for (var i = 0; i < data.elements.length; i++) {
// 				    		var $degree = '<div><a href="https://www.coursera.org/courses?query=" class = category>' + data.elements[i].name + '</div>';
// 				    		$('#categories').append($degree);
// 				    	}

// 				    },
// 				    error: function() {
// 				    	console.log("Failed to retrieve data");
// 				    }
// 				  }); 
// }

// app.getInstructors = function() {
// 			$.ajax({
// 				    url: "instructors.json",
// 				    type: "GET",
// 				    contentType: "application/json",

// 				    success: function(data) {
				    	
// 				    	$('.course').empty();
// 				    	$('.university').empty();
// 				    	$('.category').empty();
// 				    	$('.instructor').empty();
// 				    	$('.session').empty();

// 				    	console.log(data.elements);
// 				    	for (var i = 0; i < data.elements.length; i++) {
// 				    		var $degree = '<div><a href="https://www.coursera.org/courses?query=" class = instructor>' + data.elements[i].firstName + " " + data.elements[i].lastName + '</div>';
// 				    		$('#instructors').append($degree);
// 				    	}

// 				    },
// 				    error: function() {
// 				    	console.log("Failed to retrieve data");
// 				    }
// 				  }); 
// }

// app.getSessions = function() {
// 			$.ajax({
// 				    url: "sessions.json",
// 				    type: "GET",
// 				    contentType: "application/json",

// 				    success: function(data) {
				    	
// 				    	$('.course').empty();
// 				    	$('.university').empty();
// 				    	$('.category').empty();
// 				    	$('.instructor').empty();
// 				    	$('.session').empty();

// 				    	//console.log(data.elements[0]);
// 				    	for (var i = 0; i < data.elements.length; i++) {
// 				    		var $degree = '<div><a href="https://www.coursera.org/courses?query=" class = session>' + data.elements[i].homeLink + '</div>';
// 				    		$('#sessions').append($degree);
// 				    	}

// 				    },
// 				    error: function() {
// 				    	console.log("Failed to retrieve data");
// 				    }
// 				  }); 
// }

// app.aboutPage = function() {

// }

// $(document).ready(function(){
// 	$('button.getCourses').on('click', function(){
// 		app.getCourses();
// 	});

// 	$('button.getUniversities').on('click', function(){
// 		app.getUniversities();
// 	});

// 	$('button.getCategories').on('click', function(){
// 		app.getCategories();
// 	});

// 	$('button.getInstructors').on('click', function(){
// 		app.getInstructors();
// 	});

// 	$('button.getSessions').on('click', function(){
// 		app.getSessions();
// 	});

// 	$('a').on('click', function(){

// 	});


// });

