import React, { Component } from "react";
import "./TodoList-Item.css";
import BtnAddDelete from "../btnAddDelete/btnAddDelete";

export default class TodoListTtem extends Component {
	render() {
		const {
			label,
			deleteItem,

			important,
			done,
			onItemDone,
		} = this.props;

		let classNames = "todo-liste-item ";

		if (important) {
			classNames += " important";
		}

		if (done) {
			classNames += " done";
		}

		return (
			<span className={classNames} onClick={onItemDone}>
				{label}
				<BtnAddDelete deleteItem={() => deleteItem()} />
			</span>
		);
	}
}
