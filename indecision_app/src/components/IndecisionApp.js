import React from 'react';

import AddOptions from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option )
		}));
	};

	handlePick = () => {
		var randomOption = Math.floor(Math.random() * this.state.options.length);
		var option = this.state.options[randomOption];
		this.setState( () => (
				{ selectedOption: option}
			)
		);
	};

	handleAddOption = (option) => {
		if (!option) {
			return 'Enter a valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option)}));
	};

	componentDidMount = () => {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options: options }));
			}

		} catch (e) {
			console.log(e);
		}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	};

	componentWillUnmount = () => {
		console.log("componentWillUnmount");
	};

	clearSelectedOption = () => {
		this.setState( () => ({selectedOption: undefined}));
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
				<div className="container">
					<Action 
						handlePick={this.handlePick} 
						hasOptions={this.state.options.length > 0}
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
				<OptionModal 
					selectedOption={this.state.selectedOption}
					clearSelectedOption={this.clearSelectedOption}
				/>
			</div>
		);
	}
}