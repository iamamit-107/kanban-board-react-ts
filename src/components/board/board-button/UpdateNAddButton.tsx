import React from "react";
import { useBoardData } from "../../../context/boardData";
import SVG from "../../SVG";

export default function UpdateNAddButton({ boardIndex }: any) {
	const { targetTaskBoard, handleAddNewTask, setTargetTaskBoard, setTask } =
		useBoardData();
	return (
		<>
			{targetTaskBoard === boardIndex ? (
				<button
					className="flex mt-3 mx-auto w-full items-center text-sm font-medium bg-gray-700 text-white rounded-md pl-3 pr-4 py-2"
					onClick={() => {
						handleAddNewTask(boardIndex);
					}}
				>
					<div className=" flex justify-center w-full items-center">
						<SVG
							svgd={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}
							color="text-white"
						/>

						<span className=" ml-3">Submit Task</span>
					</div>
				</button>
			) : (
				<button
					className="flex mt-3 mx-auto w-full items-center text-sm font-medium bg-gray-700 text-white rounded-md pl-3 pr-4 py-2"
					onClick={() => {
						setTargetTaskBoard(boardIndex);
						setTask("");
					}}
				>
					<div className=" flex justify-center w-full items-center">
						<SVG svgd={"M12 4v16m8-8H4"} color="text-white" />{" "}
						<span className=" ml-3">New Task</span>
					</div>
				</button>
			)}
		</>
	);
}
