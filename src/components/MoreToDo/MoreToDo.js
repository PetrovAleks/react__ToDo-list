import React, { Component } from "react";
import "./MoreToDo.css";

export default class MoreToDo extends Component {
	render() {
		const { showCompletedTasks, showNeedToDoTasks } = this.props;
		const done = showCompletedTasks();
		const more = showNeedToDoTasks();
		return (
			<span className="more-to-do">
				{more} more to do, {done} done{" "}
			</span>
		);
	}
}
