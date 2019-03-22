import React from 'react';
import ReactDOM from 'react-dom';
import AddOptions from './components/AddOption';
import Action from './components/Action';
import Header from './components/Header';
import Option from './components/Option';

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options: options }));
			}

		} catch (e) {
			console.log(e);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option )
		}));
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

		this.setState((prevState) => ({ options: prevState.options.concat(option)}));
	}

	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header 
					title={title} 
					subtitle={subtitle}
				/>
				<Action 
					handlePick={this.handlePick} 
					hasOptions={this.hasOptions}
				/>
				<Options 
					options={this.state.options} 
					handleDeleteOptions={this.handleDeleteOptions} 
					handleDeleteOption = {this.handleDeleteOption}
				/>
				<AddOptions 
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}


const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started</p>}
				{
					props.options.map((option) => (
						<Option 
							key={option} 
							optionText={option}
							handleDeleteOption = {props.handleDeleteOption}
						/>
					)) 
				}
		</div>
	);
};

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'));