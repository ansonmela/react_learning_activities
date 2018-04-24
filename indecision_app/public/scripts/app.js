"use strict";

console.log("App.js is running");

// JSX - JavaScript XML

// wrapper div needed to render adjacent html tags into react DOM

var app = {
	title: "INDECISION",
	subtitle: "decide here!",
	options: ['One', 'Two']
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	React.createElement(
		"p",
		null,
		"app.subtitle"
	) && app.subtitle,
	React.createElement(
		"ol",
		null,
		app.options.length > 0 ? React.createElement(
			"li",
			null,
			app.options
		) : "No options",
		React.createElement(
			"li",
			null,
			"Item one"
		),
		React.createElement(
			"li",
			null,
			"Item two"
		)
	)
);

var user = {
	name: "Anson",
	age: 24,
	location: 'Raleigh'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			"p",
			null,
			"Location: ",
			location
		);
	}
}

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('app2');

ReactDOM.render(templateTwo, appRoot);

ReactDOM.render(template, appRootTwo);
