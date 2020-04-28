import React, { useState } from "react";
import uuid from "react-uuid";
import "./list_style.css";
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
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-12 col-md-4 col-lg-3"></div>
				<div className="col-sm-12 col-md-8 col-lg-9">
					<h2>Inbox</h2>
					<div className="list">
						<ul>
							{ListArray.map((i) => (
								<li key={i.key}>
									<label className="list_box">
										{i.text}
										<input
											type="checkbox"
											className="list_check"
											value={i.key}
											onClick={completeItem}
										/>
										<span className="checkmark"></span>
									</label>
								</li>
							))}
						</ul>
					</div>

					{!!plusAddTaskView ? (
						<>
							<div>test true</div>
							<button onClick={() => setplusAddTaskView(false)}>
								Show Form
							</button>
						</>
					) : (
						<div>
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
								<button onClick={() => setplusAddTaskView(true)}>Cancel</button>

								{today}
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default List;
