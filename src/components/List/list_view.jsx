import React from "react";
const ListView = (props) => {
	return (
		<form onSubmit={props.AddCheckBox}>
			<div>
				<input
					type="text"
					value={props.value}
					placeholder="e.g Learn Portuguese in Atlanta"
				></input>
			</div>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default ListView;
