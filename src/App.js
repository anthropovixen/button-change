import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}
	increment() {
		this.setState((state) => ({
			count: state.count + 1,
		}));
	}
	decrement() {
		this.setState((state) => ({
			count: state.count - 1,
		}));
	}
	reset() {
		this.setState({
			count: 0,
		});
	}
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<button style={style} onClick={this.increment}>
					+
				</button>
				<button style={style} id="decrement" onClick={this.decrement}>
					-
				</button>
				<button style={style} id="reset" onClick={this.reset}>
					Reset
				</button>
				<h1> Current Clicks: {this.state.count}</h1>
			</div>
		);
	}
}

const style = {
	border: '3px solid grey',
	width: '100px',
	height: '30px',
	borderRadius: '5px',
};
export default Counter;
