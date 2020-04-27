import React, { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";

const List = () => {
	const [ListArray, setListArray] = useState([]);
	const [task, setTask] = useState("");
	const [plusAddTaskView, setplusAddTaskView] = useState(true);

	const day = moment();
	const today = day.format("MMM Do");
	const theDayWeek = day.format("ddd MMM Do");

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
			<h2>Inbox</h2>
			{ListArray.map((i) => (
				<li key={i.key}>
					<input type="checkbox" value={i.key} onClick={completeItem} />
					<label>{i.text}</label>
				</li>
			))}
			{!!plusAddTaskView ? (
				<>
					<div>test true</div>
					<button onClick={() => setplusAddTaskView(false)}>Show Form</button>
				</>
			) : (
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
					<span>
						Today <span>&#8231;</span> {theDayWeek}
					</span>
					<button type="submit">Add Task</button>
					<button onClick={() => setplusAddTaskView(true)}>Canceal</button>

					{today}
				</form>
			)}
		</div>
	);
};

export default List;
