import React, { Component } from "react";
import "./SearchInput.css";

export default class SearchInput extends Component {
	state = {
		term: "",
	};
	onSearchChange = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onSearchChange(term);
	};
	render() {
		const { id } = this.props;
		return (
			<input
				placeholder="Поиск"
				className="todo-input "
				id={id}
				value={this.state.term}
				onChange={this.onSearchChange}
			/>
		);
	}
}
