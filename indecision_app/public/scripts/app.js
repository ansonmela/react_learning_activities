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
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.options.length > 0 ? 'Here are your options' : 'No options'
	),
	React.createElement(
		"ol",
		null,
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

var count = 0;

var addOne = function addOne() {
	console.log('addOne');
};

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Count: ",
		count
	),
	React.createElement(
		"button",
		{ onClick: addOne },
		"+1"
	)
);

console.log(templateTwo);

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('app2');

ReactDOM.render(templateTwo, appRoot);

ReactDOM.render(template, appRootTwo);
