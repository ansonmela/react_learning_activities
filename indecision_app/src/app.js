class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: props.options
		};
	}

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	}

	handlePick() {
		var randomOption = Math.floor(Math.random() * this.state.options.length);
		var option = this.state.options[randomOption];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter a valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option) 
			};
		});
	}

	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action handlePick={this.handlePick} hasOptions={this.hasOptions}/>
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
				<AddOptions handleAddOption={this.handleAddOption}/>
			</div>
			);
	}
}

IndecisionApp.defaultProps = {
	options: []
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
}

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
				{
					props.options.map((option) => <Option key={option} optionText={option}/>) 
				}
		</div>
	);
}

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick}>
				What Should I do?
			</button>
		</div>
	);
};

const Option = (props) => {
	return(
		<div>
			Option: {props.optionText}
		</div>
	);
}

class AddOptions extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => {
			return { error };
		});
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}


const User = () => {
	return (
		<div>
			<p>Name: </p>
			<p>Age: </p>
		</div>
	);
};




ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'));