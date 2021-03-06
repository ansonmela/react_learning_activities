class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
		console.log('handleAddOne');
	}

	componentDidMount() {
		var count = localStorage.getItem('count');
		var int_count = parseInt(count, 10);

		if (!isNaN(int_count)) {
			this.setState(() => ( {count: int_count} ));
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}

	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
		console.log('handleMinusOne');
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
		console.log('handleReset');
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>

			</div>

		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
// 	count++;
// 	console.log('addOne', count);
// 	renderCounterApp();
// };

// const minusOne = () => {
// 	count--;
// 	console.log('minusOne', count);
// 	renderCounterApp();
// };

// const reset = () => {
// 	count = 0
// 	console.log('Reset', count);
// };

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);