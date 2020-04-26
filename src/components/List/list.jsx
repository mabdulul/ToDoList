import React, { useState } from "react";
import uuid from "react-uuid";

const List = () => {
	const [ListArray, setListArray] = useState([]);
	const [task, setTask] = useState("");

	const AddCheckBox = (e) => {
		e.preventDefault();
		const theCheckBox = [
			{
				text: task,
				key: uuid(),
				date: new Date(),
			},
		];
		setListArray([...theCheckBox, ...ListArray]);
		setTask("");
	};
	const completeItem = (e) => {
		const itemcomplete = e.target.value;

		setListArray(ListArray.filter((obj) => obj.key !== itemcomplete));
		ListArray.filter((obj) => obj.key !== itemcomplete);
	};

	return (
		<div>
			{ListArray.map((i) => (
				<>
					<li key={i.key}>
						<input type="checkbox" value={i.key} onClick={completeItem} />
						<label for="vehicle1">{i.text}</label>
						{/* <button value={i.key} onClick={completeItem}>
							Done
						</button> */}
					</li>
				</>
			))}
			<form onSubmit={AddCheckBox}>
				<div>
					<label></label>
					<input
						type="text"
						value={task}
						onChange={(e) => setTask(e.target.value)}
						placeholder="e.g Learn Portuguese in Atlanta"
					></input>
				</div>
				<button type="submit">Add Task</button>
			</form>
		</div>
	);
};

export default List;
