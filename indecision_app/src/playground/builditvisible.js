class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props)
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}

	handleToggleVisibility() {
		console.log("it works");
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Yezzir</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.visibility && (
					<div>
						<p>Hey. These are some details you can see</p>
					</div>
				)}
			</div>
		);
	}
}

	ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));