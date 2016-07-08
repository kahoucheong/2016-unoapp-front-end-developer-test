$(document).ready(function() {
	/* ==================================================================================================== */
	/* DO NOT EDIT THE CONTENT **BETWEEN** THIS MESSAGE, AND THE SIMILAR MESSAGE BELOW
	/* ==================================================================================================== */
	// DATA
	var data = {
		bio: {
			about: {
				main: { 
					title: 'About Me',
					content: "I'm a Toronto-based front-end developer, currently looking for a junior, in-office position at a great company where I grow and expand my skillset."
				}
			}
		},
		skills_and_interests: {
			title: 'My Skills and Interests',
			desc: "Included below are my core skills and competencies, as well as some of my development-related interests. While I've only listed a selection of skills, I've also had an opportunity to work with the PHP language, Wordpress, the SASS preprocessor, Gulp, Ruby, and more.",
			skills_list: [
				'Strong understanding of HTML and CSS.',
				'Experience with "vanilla" Javascript, and with the jQuery library',
				'Clear understanding of the principles and practices of Object Oriented Programming.',
				'Understanding the difference between DOM and data manipulation, and when to use one over the other.',
				'Able to spot bugs and problem areas in my own work, and in code written by others.',
				'Able to put my own coding preferences aside when working on large/collaborative projects.',
			],
			interests_list: [
				'Learning new development frameworks.',
				'Completing personal, development-related projects',
				'Working on professional projects which continue to grow and evolve.',
				'Reading up on development "best practices" and standards.'
			]
		},
		projects: {
			title: 'My Work',
			desc: "Included below are a selection of projects that I've had the opportunity to work on. Check them out!",
			content: [
				{
					image: {
						path: "./images/dev-test_placeholder_1.jpg",
						alt: "An image of a UI/UX wireframe for a mobile app."
					},
					title: "Mobile App UI/UX",
					desc: "This is a project where I was paired with a designer, and tasked with building out the front-end of an application using 'mobile first' development principles.",
					show_project: true
				},
				{
					image: {
						path: "./images/dev-test_placeholder_2.jpg",
						alt: "An image of a loading screen for a mobile app."
					},
					title: "Application Loading Screen",
					desc: "<span class='alert'>I'm not sure about this project. I think I'll leave it out of my portfolio for now.</span>",
					show_project: false
				},
				{
					image: {
						path: "./images/dev-test_placeholder_3.jpg",
						alt: "An image of a responsive website, displayed on a variety of devices."
					},
					title: "Responsive Website Build",
					desc: "For this project, the client was very specific that their website be optimized for display on mobile, tablet, and desktop devices.",
					show_project: true
				}
			]
		}
	}
	/* ==================================================================================================== */
	/* DO NOT EDIT THE CONTENT **BETWEEN** THIS MESSAGE, AND THE SIMILAR MESSAGE ABOVE
	/* ==================================================================================================== */

	// DECLARE VARS
	var name_first = $('#name_first');
	var name_last = $('#name_last');
	var about_title = $('#about_title');
	var about_content = $('#about_content');
	var skills_and_interests_title = $('#skills_and_interests_title');
	var skills_and_interests_desc = $('#skills_and_interests_desc');
	var skills_list = $('#skills_list');
	var interests_list = $('#interests_list');
	var project_title = $('#proj_title');
	var project_desc = $('#proj_desc');
	var proj_all = $('#proj_all');
	var message_content = $('#message_content');
	var message = "Hello new friends at UNOapp, I'm glad you have reached back to me. I hope I can work with all of you soon! ";

	// DECLARE FUNCTIONS
	function updateProjects() {
		var projects = data.projects.content;
		var num = 0;
		proj_all.html('');

		for (var i = 0, x = projects.length; i < x; i++) {
			var project = projects[i];
			var show_project = project.show_project;

			if (show_project === true) {
				num++;
				var project_new = '<div class="proj-wrap"><div class="proj-image"><img src="' + project.image.path+ '" alt="' + project.image.alt + '"></div><div class="proj-desc"><h4 class="proj-title">' + num + ' ' + project.title + '</h4><p class="proj-blurb">' + project.desc + '</p></div></div>';
				proj_all.append(project_new);
			}
		}
	}

	function updateSkills(clearPlaceholder) {
		if (clearPlaceholder === true) {
			skills_list.html('');
		}

		var skills_data = data.skills_and_interests.skills_list;

		for (var i = 0, x = skills_data.length; i < x; i++) {
			skill = skills_data[i];
			skills_list.append('<li><p>' + skill + '</p></li>');
		}
	}

	function updateInterests(clearPlaceholder) {
		if (clearPlaceholder === true) {
			interests_list.html('');	
		}

		var interests_data = data.skills_and_interests.interests_list;

		for (var i = 0 , x = interests_data.length; i < x; i++) {
			interest = interests_data[i];
			interests_list.append('<li><p>' + interest + '</p></li>');
		}
	}

	function myMessage(message){
		message_content.html('');
		message_content.html(message);
	}


	// UPDATE DOM
	name_first.html('Ka Hou (Michael)');
	name_last.html('Cheong');
	about_title.html(data.bio.about.main.title);
	about_content.html(data.bio.about.main.content);
	skills_and_interests_title.html(data.skills_and_interests.title);
	skills_and_interests_desc.html(data.skills_and_interests.desc);
	project_title.html(data.projects.title);
	project_desc.html(data.projects.desc);

	// CALL FUNCTIONS
	updateSkills(true);
	updateInterests(true);
	updateProjects();
	myMessage(message);

});