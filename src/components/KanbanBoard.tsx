import { useBoardData } from "../context/boardData";
import Board from "./Board";
import Header from "./layout/Header";
import Sidebar from "./layout/SideBar";

export default function KanbanBoard() {
	const { data } = useBoardData();
	return (
		<div className="h-screen flex">
			{/* Sidebar */}
			<Sidebar />

			{/* main */}
			<div className="flex-1 min-w-0 bg-white overflow-auto">
				<Header />

				{/* board */}
				<div className=" overflow-hidden h-screen">
					<main className=" p-3 flex gap-3 overflow-auto flex-row h-screen">
						{data.length > 0 &&
							data.map((board, boardIndex) => (
								<Board board={board} boardIndex={boardIndex} />
							))}
					</main>
				</div>
			</div>
		</div>
	);
}
