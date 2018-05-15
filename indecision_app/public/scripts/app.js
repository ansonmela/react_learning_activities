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
	count++;
	console.log('addOne', count);
	renderCounterApp();
};

var minusOne = function minusOne() {
	console.log('minusOne');
};

var reset = function reset() {
	console.log('reset');
};

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('app2');

ReactDOM.render(template, appRootTwo);

var renderCounterApp = function renderCounterApp() {
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
		),
		React.createElement(
			"button",
			{ onClick: minusOne },
			"-1"
		),
		React.createElement(
			"button",
			{ onClick: reset },
			"reset"
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
