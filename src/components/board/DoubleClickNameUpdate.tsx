import React from "react";
import { useBoardData } from "../../context/boardData";

export default function DoubleClickNameUpdate() {
	const { handleDblClickNameSubmit, dblClickedName, setDblClickedName } =
		useBoardData();
	return (
		<form onSubmit={handleDblClickNameSubmit}>
			<input
				type="text"
				className=" text-sm font-medium w-full rounded-md p-2"
				placeholder="enter board name"
				value={dblClickedName}
				onChange={(e) => setDblClickedName(e.target.value)}
			/>
		</form>
	);
}
