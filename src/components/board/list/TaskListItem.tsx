import React from "react";
import { CardTypes, useBoardData } from "../../../context/boardData";
import ItemDropdown from "./ItemDropdown";

type PropType = {
	cardIndex: number;
	boardIndex: number;
	card: CardTypes;
};

export default function TaskListItem({
	boardIndex,
	cardIndex,
	card,
}: PropType) {
	const { sourceCard, setSourceCard, setSourceBoard, handleDrop } =
		useBoardData();
	return (
		<li
			key={cardIndex}
			className={`p-3 mt-3 bg-white rounded-md shadow  ${
				sourceCard === card.id ? "opacity-25 cursor-grab" : ""
			} ${card.isLocked ? "" : "cursor-move"}`}
			draggable={!card.isLocked}
			onDrag={(e) => {
				setSourceCard(card.id);
				setSourceBoard(boardIndex);
			}}
			onDragEnd={(e) => {
				setSourceCard("");
				setSourceBoard("");
			}}
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => handleDrop(boardIndex, card.id)}
		>
			<div className="flex justify-between items-start">
				<p className=" text-sm font-medium leading-snug">{card.task}</p>

				<ItemDropdown
					card={card}
					boardIndex={boardIndex}
					cardIndex={cardIndex}
				/>
			</div>
		</li>
	);
}
