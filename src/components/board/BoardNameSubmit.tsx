import React from "react";
import { useBoardData } from "../../context/boardData";

type PropType = {
	boardIndex: number;
};

export default function BoardNameSubmit({ boardIndex }: PropType) {
	const { handleNameSubmit, setBoardName, boardName } = useBoardData();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleNameSubmit(boardIndex);
				console.log("board index: ", boardIndex);
			}}
		>
			<input
				type="text"
				className=" text-sm font-medium w-full rounded-md p-2"
				placeholder="enter board name"
				value={boardName}
				onChange={(e) => setBoardName(e.target.value)}
			/>
		</form>
	);
}
