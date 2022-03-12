import { useBoardData } from "../../../context/boardData";
import SVG from "../../SVG";

type PropType = {
	boardIndex: number;
	cardIndex: number;
};

export default function TaskUpdate({ boardIndex, cardIndex }: PropType) {
	const { updateCardValue, setUpdateCardValue, updateCard } = useBoardData();
	return (
		<form className="mt-3">
			<textarea
				placeholder="type here.."
				id=""
				rows={3}
				className="rounded-md w-full p-2 text-sm text-gray-900"
				value={updateCardValue}
				onChange={(e) => setUpdateCardValue(e.target.value)}
			/>
			<button
				className="flex mt-1 mx-auto w-full items-center justify-center text-sm font-medium bg-gray-700 text-white rounded-md pl-3 pr-4 py-2 mb-3"
				onClick={() => updateCard(boardIndex, cardIndex)}
			>
				<SVG
					svgd={
						"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					}
				/>
				<span className=" ml-3">Update</span>
			</button>
		</form>
	);
}
