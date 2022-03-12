import React from "react";
import { useBoardData } from "../../context/boardData";

export default function Header() {
	const { data, setData } = useBoardData();
	const addNewData = () => {
		setData([
			...data,
			{
				id: Math.floor(Math.random() * 100000),
				name: "",
				cards: [],
			},
		]);
	};
	return (
		<div className="border-b-2 border-gray-200">
			<header className="px-5 ">
				<div className="flex items-center justify-between border-b border-gray-200 py-3">
					<div>
						<div className="relative">
							<span className="absolute items-center flex inset-y-0 pl-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</span>
							<input
								className=" rounded-md border border-gray-400 py-2  pl-10 pr-3 leading-tight placeholder-gray-500 text-gray-900 text-sm"
								type="text"
								placeholder="Search"
							/>
						</div>
					</div>
					<div className="flex gap-3">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>
						<button>
							<img
								className=" w-10 h-10 rounded-full border-2 border-gray-600 object-cover"
								src="/images/me.jpg"
								alt="profile"
							/>
						</button>
					</div>
				</div>

				<div className="flex items-center justify-between py-2">
					<div>
						<h1 className=" font-bold text-2xl text-gray-900 leading-tight">
							All Issues
						</h1>
					</div>
					<div className=" flex">
						<span className=" border bg-gray-200 rounded-md flex items-center p-1">
							<button className=" px-2 py-1 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4 6h16M4 10h16M4 14h16M4 18h16"
									/>
								</svg>
							</button>
							<button className=" px-2 py-1 bg-white shadow rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
									/>
								</svg>
							</button>
						</span>

						<span className="ml-5">
							<button
								className="flex items-center text-sm font-medium bg-gray-700 text-white rounded-md pl-3 pr-4 py-3"
								onClick={addNewData}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-white mr-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 4v16m8-8H4"
									/>
								</svg>{" "}
								New Board
							</button>
						</span>
					</div>
				</div>
			</header>
		</div>
	);
}
