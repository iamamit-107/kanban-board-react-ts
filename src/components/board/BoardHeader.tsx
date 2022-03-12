import React from "react";
import { BoardTypes, useBoardData } from "../../context/boardData";
import SVG from "../SVG";

type PropType = {
	board: BoardTypes;
	boardIndex: number;
};

export default function BoardHeader({ board, boardIndex }: PropType) {
	const { handleBoardNameDblClick, handleBoardDelete } = useBoardData();
	return (
		<div className="flex justify-between items-center">
			<h3
				className="text-md font-medium text-gray-900 cursor-pointer uppercase"
				onDoubleClick={() => handleBoardNameDblClick(boardIndex, board.name)}
			>
				{board.name}
			</h3>
			<button onClick={() => handleBoardDelete(board.id)}>
				<SVG
					svgd={
						"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					}
				/>
			</button>
		</div>
	);
}
