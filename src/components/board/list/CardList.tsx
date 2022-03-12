import { CardTypes, useBoardData } from "../../../context/boardData";
import TaskListItem from "./TaskListItem";
import TaskUpdate from "./TaskUpdate";

type PropType = {
	cardIndex: number;
	boardIndex: number;
	card: CardTypes;
};

export default function CardList({ boardIndex, cardIndex, card }: PropType) {
	const { updateCardIndex } = useBoardData();
	return (
		<>
			{updateCardIndex === card.id ? (
				<TaskUpdate boardIndex={boardIndex} cardIndex={cardIndex} />
			) : (
				<TaskListItem
					card={card}
					boardIndex={boardIndex}
					cardIndex={cardIndex}
				/>
			)}
		</>
	);
}
