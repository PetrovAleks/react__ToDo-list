import React,{useState}from "react";
import "./itemsADdForm.css";

const ItemsAddForm = (props)=>{

	const [task,setTask]=useState('')

	const onLabelChange = (e) => {
		setTask({
			task: e.target.value,
		});
	};

	const onSubmitForm = (e) => {
		e.preventDefault();		

		props.addItem(task);
		setTask({
			task: "",
		});
	};

	return (
	<form className="add-form" onSubmit={onSubmitForm}>
		<label>
			<input
				onChange={onLabelChange}
				className="form-control"
				type="text"
				placeholder="Какие планы?"
				value={task}
				/>
			</label>
	<button className="btn add-form-btn ">Add To do List</button>
	
	</form>
	);
}

export default ItemsAddForm


// export default class ItemsAddForm extends Component {
// 	state = {
// 		text: "",
// 	};

// 	render() {
// 		return (
// 			<form className="add-form" onSubmit={this.onSubmitForm}>
// 				<label>
// 					<input
// 						onChange={this.onLabelChange}
// 						className="form-control"
// 						type="text"
// 						placeholder="Какие планы?"
// 						value={this.state.text}
// 					/>
// 				</label>
// 				<button className="btn add-form-btn ">Add To do List</button>
// 			</form>
// 		);
// 	}

// 	onLabelChange = (e) => {
// 		this.setState({
// 			text: e.target.value,
// 		});
// 	};

// 	onSubmitForm = (e) => {
// 		e.preventDefault();
// 		const inputValue = this.state.text;

// 		this.props.addItem(inputValue);
// 		this.setState({
// 			text: "",
// 		});
// 	};
// }
