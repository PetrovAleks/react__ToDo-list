import React, { Component } from "react";
import TodoListTtem from "../TodoList-Item/TodoList-Item";
import "./TodoList.css";
import "../style/box-shadow.css";
// import ".../index.css";

export default class TodoList extends Component {
	render() {
		const { todos, deleteItem, onItemDone } = this.props;

		const elments = todos.map((item) => {
			const { id, ...itemProps } = item;
			return (
				<li key={id} className="list-group-item">
					<TodoListTtem
						{...itemProps}
						onItemDone={(event) => onItemDone(id, event)}
						deleteItem={() => deleteItem(id)}
					/>
				</li>
			);
		});

		return <ul className="box-shadows list-group todo-list ">{elments}</ul>;
	}
}
