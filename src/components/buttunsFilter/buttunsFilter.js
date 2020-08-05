import React, { Component } from "react";
import "./buttunsFilter.css";
import ButtonsFiltersItem from "../buttunsFilterItem/buttunsFilterItem";

export default class ButtonsFilters extends Component {
	render() {
		const { btns, filter, onFilterChange } = this.props;

		const elements = btns.map((item) => {
			const { text, id } = item;
			const isActive = item.filter === filter;
			const classActive = isActive ? "btn-info" : "btn-outline-secondary";
			return (
				<label
					key={btns.indexOf(item)}
					className={` btn  ${classActive} `}
					onChange={() => onFilterChange(item.filter)}
				>
					<ButtonsFiltersItem id={id} />
					{text}
				</label>
			);
		});

		return (
			<div
				className="btn-group btn-group-toggle btn-filters "
				data-toggle="buttons"
			>
				{elements}
			</div>
		);
	}
}
