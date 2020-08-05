import React, { Component } from "react";

export default class ButtonsFiltersItem extends Component {
	render() {
		const { id } = this.props;
		return <input type="radio" name="options" id={id} />;
	}
}
