import { CardTypes, useBoardData } from "../../../context/boardData";
import SVG from "../../SVG";

type PropType = {
	cardIndex: number;
	boardIndex: number;
	card: CardTypes;
};

export default function ItemDropdown({
	card,
	boardIndex,
	cardIndex,
}: PropType) {
	const {
		setDropdownId,
		setShowDropdown,
		showDropdown,
		dropdownId,
		handleLock,
		deleteCard,
		setUpdateCardIndex,
		setUpdateCardValue,
	} = useBoardData();
	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md bg-white text-sm font-medium text-gray-700"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={() => {
						setDropdownId(card.id);
						setShowDropdown(!showDropdown);
					}}
				>
					<SVG
						svgd={
							"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
						}
					/>
				</button>
			</div>
			{showDropdown && card.id === dropdownId && (
				<div
					className="origin-top-right absolute right-0 mt-1 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabIndex={-1}
				>
					<div className="p-2 items-center text-center gap-2 flex" role="none">
						<button onClick={() => handleLock(boardIndex, cardIndex)}>
							{card.isLocked ? (
								<SVG
									svgd={
										"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									}
								/>
							) : (
								<SVG
									svgd={
										"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
									}
								/>
							)}
						</button>

						<button onClick={() => deleteCard(boardIndex, card.id)}>
							<SVG
								svgd={
									"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								}
							/>
						</button>

						<button
							onClick={() => {
								setUpdateCardIndex(card.id);
								setUpdateCardValue(card.task);
							}}
						>
							<SVG
								svgd={
									"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
								}
							/>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
