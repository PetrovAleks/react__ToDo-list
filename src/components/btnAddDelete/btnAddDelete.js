import React, { Component } from "react";
import "./btnAddDelete.css";

export default class BtnAddDelete extends Component {
	render() {
		let classNames = "btn btn-outline-success btn-size ";
		const { deleteItem } = this.props;

		return (
			<div className="btnAddDelete">
				<button type="button" className={classNames}>
					<i className="fa fa-exclamation" />
				</button>
				<button
					onClick={deleteItem}
					type="button"
					className="btn  btn-outline-danger btn-size   "
				>
					<i className="fa fa-trash-o" />
				</button>
			</div>
		);
	}
}
