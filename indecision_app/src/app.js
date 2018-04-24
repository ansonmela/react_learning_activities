console.log("App.js is running");

// JSX - JavaScript XML

// wrapper div needed to render adjacent html tags into react DOM

var app = {
	title: "INDECISION",
	subtitle: "decide here!",
	options: ['One', 'Two']
};

var template = ( 
	<div> 
		<h1>{app.title}</h1> 
		{(<p>app.subtitle</p>) && app.subtitle} 
		<ol>
		{app.options.length > 0 ? <li>{app.options}</li> : "No options"}
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);


var user = {
	name: "Anson",
	age: 24,
	location: 'Raleigh'
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('app2');

ReactDOM.render(templateTwo, appRoot);

ReactDOM.render(template, appRootTwo);
