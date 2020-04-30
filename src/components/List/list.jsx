import React, { useState } from "react";
import uuid from "react-uuid";
import "./list_style.css";
import moment from "moment";

const List = () => {
	const [ListArray, setListArray] = useState([]);
	let [task, setTask] = useState("");
	console.log("Line 9 ", task);

	const [active, setActive] = useState(false);
	const [plusAddTaskView, setplusAddTaskView] = useState(true);

	// This Activating the Red Button when typing

	const ActivatingtheRedButton = (e) => {
		const thetask = e;

		if (thetask.length === 0) {
			setActive(false);
		} else if (thetask.length > 0) {
			setActive(true);
		}
	};

	const handleChange = (e) => {
		const thetask = e.target.value;
		setTask(thetask);
		ActivatingtheRedButton(thetask);
	};
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
		ActivatingtheRedButton("");
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
					<header className="list_header">
						<h1>Inbox</h1>
					</header>
					<div>
						<ul className="list">
							{ListArray.map((i) => (
								<li key={i.key}>
									<label className="list_box">
										<input
											type="checkbox"
											className="list_check"
											value={i.key}
											onClick={completeItem}
										/>
										<div className="checkmark"></div>
										<div className="list_text">{i.text}</div>
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
										onChange={handleChange}
										placeholder="e.g Learn Portuguese in Atlanta"
									></input>
								</div>
								<span>
									Today <span>&#8231;</span> {theDayWeek}
								</span>
								<button className={active ? " btn_red" : " "} type="submit">
									Add Task
								</button>
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
