import React, { useContext, useState } from "react";
export interface CardTypes {
	id: number;
	task: string;
	isLocked: boolean;
}
export interface BoardTypes {
	id: number;
	name: string;
	cards: CardTypes[];
}

interface AppContextInterface {
	data: BoardTypes[];
	setData: React.Dispatch<React.SetStateAction<BoardTypes[]>>;
	sourceBoard: string | number;
	setSourceBoard: React.Dispatch<React.SetStateAction<string | number>>;
	sourceCard: string | number;
	setSourceCard: React.Dispatch<React.SetStateAction<string | number>>;
	showDropdown: boolean;
	setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
	dropdownId: number;
	setDropdownId: React.Dispatch<React.SetStateAction<number>>;
	handleDrop: (boardIndex: number | string, id: number | string) => void;
	handleBoardDrop: (boardIndex: number) => void;
	handleLock: (boardIndex: number, cardIndex: number) => void;
	deleteCard: (boardIndex: number, cardid: number) => void;
	dblClickedName: string;
	setDblClickedName: React.Dispatch<React.SetStateAction<string>>;
	dblClickIndex: string | number;
	setDblClickIndex: React.Dispatch<React.SetStateAction<string | number>>;
	handleBoardNameDblClick: (index: number, name: string) => void;
	handleDblClickNameSubmit: () => void;
	handleBoardDelete: (id: number) => void;
	boardName: string;
	setBoardName: React.Dispatch<React.SetStateAction<string>>;
	handleNameSubmit: (boardIndex: number) => void;
	task: string;
	setTask: React.Dispatch<React.SetStateAction<string>>;
	targetTaskBoard: string | number;
	setTargetTaskBoard: React.Dispatch<React.SetStateAction<string | number>>;
	handleAddNewTask: (boardIndex: number) => void;
	updateCardValue: string;
	setUpdateCardValue: React.Dispatch<React.SetStateAction<string>>;
	updateCardIndex: string | number;
	setUpdateCardIndex: React.Dispatch<React.SetStateAction<string | number>>;
	updateCard: (boardIndex: number, cardIndex: number) => void;
}

type providerProps = {
	children: React.ReactNode;
};

export const DataContext = React.createContext<AppContextInterface | undefined>(
	undefined
);

export const BoardDataProvider = ({ children }: providerProps) => {
	const [data, setData] = useState<BoardTypes[]>([]);
	const [sourceCard, setSourceCard] = useState<string | number>("");
	const [sourceBoard, setSourceBoard] = useState<string | number>("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [dropdownId, setDropdownId] = useState(-1);

	// drop method start
	const handleDrop = (
		boardIndex: number | string,
		id: number | string
	): void => {
		const sourceBoardCardsFilter = data[sourceBoard].cards.filter(
			(card: CardTypes) => card.id != sourceCard
		);
		const sourceCardItem = data[sourceBoard].cards.find(
			(card: CardTypes) => card.id === sourceCard
		);
		const targetCardIndex = data[boardIndex].cards.findIndex(
			(card: CardTypes) => card.id === id
		);
		if (sourceCardItem.id === id) {
			return;
		}
		if (boardIndex === sourceBoard) {
			sourceBoardCardsFilter.splice(targetCardIndex, 0, sourceCardItem);
			data[boardIndex].cards = sourceBoardCardsFilter;
			setData([...data]);
			setSourceCard("");
			setSourceBoard("");
		} else {
			data[sourceBoard].cards = sourceBoardCardsFilter;
			data[boardIndex].cards.splice(targetCardIndex, 0, sourceCardItem);
			setData([...data]);
			setSourceCard("");
			setSourceBoard("");
		}
	};
	const handleBoardDrop = (boardIndex: number): void => {
		const sourceBoardCardsFilter = data[sourceBoard].cards.filter(
			(card: CardTypes) => card.id !== sourceCard
		);
		const sourceCardItem = data[sourceBoard].cards.find(
			(card: CardTypes) => card.id === sourceCard
		);
		if (sourceCardItem !== undefined) {
			data[sourceBoard].cards = sourceBoardCardsFilter;
			data[boardIndex].cards.push(sourceCardItem);
			setData([...data]);
			setSourceCard("");
			setSourceBoard("");
		}
	};

	// drop method end
	const handleLock = (boardIndex: number, cardIndex: number): void => {
		data[boardIndex].cards[cardIndex] = {
			...data[boardIndex].cards[cardIndex],
			isLocked: !data[boardIndex].cards[cardIndex].isLocked,
		};
		setData([...data]);
	};
	const deleteCard = (boardIndex: number, cardid: number) => {
		const filtercards = data[boardIndex].cards.filter(
			(card) => card.id !== cardid
		);
		data[boardIndex].cards = filtercards;
		setData([...data]);
	};

	// double click title
	const [dblClickedName, setDblClickedName] = useState<string>("");
	const [dblClickIndex, setDblClickIndex] = useState<string | number>("");
	const handleBoardNameDblClick = (index: number, name: string): void => {
		setDblClickIndex(index);
		setDblClickedName(name);
	};
	const handleDblClickNameSubmit = (): void => {
		data[dblClickIndex] = { ...data[dblClickIndex], name: dblClickedName };
		setData([...data]);
		setDblClickIndex("");
		setDblClickedName("");
	};

	// board delete
	const handleBoardDelete = (id: number): void => {
		const filterBoard = data.filter((board) => board.id !== id);
		setData([...filterBoard]);
	};
	// board name
	const [boardName, setBoardName] = useState<string>("");
	const handleNameSubmit = (boardIndex: number): void => {
		data[boardIndex] = { ...data[boardIndex], name: boardName };
		setData([...data]);
		setBoardName("");
	};

	// add new task
	const [task, setTask] = useState<string>("");
	const [targetTaskBoard, setTargetTaskBoard] = useState<number | string>("");
	const handleAddNewTask = (boardIndex: number): void => {
		const newTask = {
			id: Math.floor(Math.random() * 100000),
			task: task,
			isLocked: false,
		};
		data[boardIndex].cards.push(newTask);
		setData([...data]);
		setTargetTaskBoard("");
		setTask("");
	};

	// update Card
	const [updateCardValue, setUpdateCardValue] = useState<string>("");
	const [updateCardIndex, setUpdateCardIndex] = useState<number | string>("");
	const updateCard = (boardIndex: number, cardIndex: number): void => {
		data[boardIndex].cards[cardIndex] = {
			...data[boardIndex].cards[cardIndex],
			task: updateCardValue,
		};
		setData([...data]);
		setUpdateCardIndex("");
		setUpdateCardValue("");
		setDropdownId(-1);
		setShowDropdown(false);
	};
	return (
		<DataContext.Provider
			value={{
				data,
				setData,
				sourceBoard,
				setSourceBoard,
				sourceCard,
				setSourceCard,
				showDropdown,
				setShowDropdown,
				dropdownId,
				setDropdownId,
				handleDrop,
				handleBoardDrop,
				handleLock,
				deleteCard,
				dblClickedName,
				setDblClickedName,
				dblClickIndex,
				setDblClickIndex,
				handleBoardNameDblClick,
				handleDblClickNameSubmit,
				handleBoardDelete,
				boardName,
				setBoardName,
				handleNameSubmit,
				task,
				setTask,
				targetTaskBoard,
				setTargetTaskBoard,
				handleAddNewTask,
				updateCardValue,
				setUpdateCardValue,
				updateCardIndex,
				setUpdateCardIndex,
				updateCard,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

// export const useBoardData = (): AppContextInterface =>
// 	useContext(BoardDataContext) as AppContextInterface;
export const useBoardData = (): AppContextInterface =>
	useContext(DataContext) as AppContextInterface;
