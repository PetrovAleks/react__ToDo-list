import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import ButtonsFilters from "../buttunsFilter/buttunsFilter";
import SearchInput from "../SearchInput/SearchInput";
import TodoList from "../TodoList/TodoList";
import ItemsAddForm from "../itemsADdForm/itemsADdForm";
import MoreToDo from "../MoreToDo/MoreToDo";
import "./App.css";

export default class App extends Component {
	maxId = 100;
	state = {
		todoData: [
			this.createToDoItem("Спать"),
			this.createToDoItem("Есть"),
			this.createToDoItem("Пить"),
		],

		btn: [
			{ id: "option1", text: "All", filter: "All" },
			{ id: "option2", text: "Active", filter: "Active" },
			{ id: "option3", text: "Done", filter: "Done" },
		],
		term: "",
		filter: "All",
	};

	render() {
		const { todoData, btn, term, filter } = this.state;
		const visibleItems = this.filter(this.search(todoData, term), filter);
		return (
			<div className=" shadow-lg bg-white rounded wrapper-todo ">
				<AppHeader />
				<MoreToDo
					showCompletedTasks={() => this.showCompletedTasks()}
					showNeedToDoTasks={() => this.showNeedToDoTasks()}
				/>
				<form className="form">
					<SearchInput onSearchChange={this.onSearchChange} />

					<ButtonsFilters
						btns={btn}
						filter={filter}
						onFilterChange={this.onFilterChange}
					/>
				</form>
				<TodoList
					todos={visibleItems}
					deleteItem={(id) => this.deleteItem(id)}
					onItemDone={(id, event) => this.onItemDone(id, event)}
				/>
				<ItemsAddForm addItem={(task) => this.addItem(task)} />
			</div>
		);
	}
	filter(items, filter) {
		switch (filter) {
			case "all":
				return items;
			case "Active":
				return items.filter((item) => !item.done);
			case "Done":
				return items.filter((item) => item.done);
			default:
				return items;
		}
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	};

	onSearchChange = (term) => {
		this.setState({ term });
	};
	search = (items, term) => {
		if (term !== "") {
			return items;
		}
		const toLowerTerm = term.toLowerCase();
		return items.filter((item) => {
			return item.label.toLowerCase().includes(toLowerTerm);
		});
	};

	showCompletedTasks = () => {
		const taskDone = this.state.todoData.filter((el) => el.done);
		return taskDone.length;
	};

	showNeedToDoTasks = () => {
		const taskDone = this.state.todoData.filter((el) => !el.done);
		return taskDone.length;
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const deletedIndex = todoData.findIndex((el) => el.id === id);
			const newArr = [...todoData];
			newArr.splice(deletedIndex, 1);

			return {
				todoData: newArr,
			};
		});
	};

	createToDoItem (label)  {
		const newItem = {
			label,
			done: false,
			important: false,
			id: this.maxId++,
		};

		return newItem;
	}

	addItem = (task) => {
		const newItem = this.createToDoItem(task);
		console.dir(task)
		this.setState(({ todoData })=>{
			return {
				todoData :[...todoData,newItem]
			}

		})
		// this.setState(({ todoData }) => {
		// 	const newData = [...todoData];
		// 	newData.push(newItem);
		// 	return { todoData: newData };
		// });
	};

	onItemDone = (id, event) => {
		event.persist();
		this.setState(({ todoData }) => {
			const deletedIndex = todoData.findIndex((el) => el.id === id);
			const newArr = [...todoData];
			const targetInnerHTML = '<i class="fa fa-exclamation"></i>';
			const target = event.target;

			if (target.tagName === "SPAN") {
				newArr[deletedIndex].done = !newArr[deletedIndex].done;
			} else if (
				target.innerHTML === targetInnerHTML ||
				target.className === "fa fa-exclamation"
			) {
				newArr[deletedIndex].important = !newArr[deletedIndex].important;
			}

			return {
				todoData: newArr,
			};
		});
	};
}
