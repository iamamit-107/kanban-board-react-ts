import React from "react";
import { BoardTypes, useBoardData } from "../context/boardData";
import UpdateNAddButton from "./board/board-button/UpdateNAddButton";
import BoardHeader from "./board/BoardHeader";
import BoardNameSubmit from "./board/BoardNameSubmit";
import DoubleClickNameUpdate from "./board/DoubleClickNameUpdate";
import CardList from "./board/list/CardList";
import TextArea from "./TextArea";

type PropType = {
	board: BoardTypes;
	boardIndex: number;
};

export default function Board({ board, boardIndex }: PropType) {
	const { dblClickIndex, handleBoardDrop, task, setTask, targetTaskBoard } =
		useBoardData();
	return (
		<div
			className={`p-3 w-80 bg-gray-100 rounded-md flex-shrink-0 h-min`}
			key={boardIndex}
			onDrop={(e) => handleBoardDrop(boardIndex)}
			onDragOver={(e) => e.preventDefault()}
		>
			{dblClickIndex === boardIndex ? (
				<DoubleClickNameUpdate />
			) : (
				<>
					{board.name === "" ? (
						<BoardNameSubmit boardIndex={boardIndex} />
					) : (
						<BoardHeader board={board} boardIndex={boardIndex} />
					)}
				</>
			)}

			{board.cards.length > 0 && (
				<ul className=" mt-3">
					{board.cards.map((card: any, cardIndex: number) => (
						<CardList
							key={cardIndex}
							card={card}
							cardIndex={cardIndex}
							boardIndex={boardIndex}
						/>
					))}
				</ul>
			)}

			{board.name !== "" && (
				<>
					{targetTaskBoard === boardIndex && (
						<TextArea value={task} setValue={setTask} />
					)}

					<UpdateNAddButton boardIndex={boardIndex} />
				</>
			)}
		</div>
	);
}
