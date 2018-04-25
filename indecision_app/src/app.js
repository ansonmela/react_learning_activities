console.log("App.js is running");

// JSX - JavaScript XML

// wrapper div needed to render adjacent html tags into react DOM

const app = {
	title: "INDECISION",
	subtitle: "decide here!",
	options: ['One', 'Two']
};

const template = ( 
	<div> 
		<h1>{app.title}</h1> 
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

let count = 0;

const addOne = () => {
	console.log('addOne');
};

const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
	</div>
);

console.log(templateTwo);

const appRoot = document.getElementById('app');
const appRootTwo = document.getElementById('app2');

ReactDOM.render(templateTwo, appRoot);

ReactDOM.render(template, appRootTwo);
