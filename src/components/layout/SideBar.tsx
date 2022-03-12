/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

export default function Sidebar() {
	return (
		<div className="hidden md:block w-64 border-r bg-gray-100 px-8 py-4 overflow-auto">
			<img className="w-9 h-9" src="/images/logo.jpg" />

			<nav className="mt-8">
				<h2 className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
					Issues
				</h2>
				<div className="mt-2 -mx-4">
					<a
						href="#"
						className="flex justify-between bg-gray-200 rounded-lg px-4 py-2"
					>
						<span className="text-sm text-gray-900 font-medium">All</span>
						<span className="text-xs text-gray-700 font-semibold">36</span>
					</a>

					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">
							Assigned to me
						</span>
						<span className="text-xs text-gray-700 font-semibold">1</span>
					</a>
					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">
							Created by me
						</span>
						<span className="text-xs text-gray-700 font-semibold">3</span>
					</a>
					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">Archieved</span>
					</a>
				</div>
			</nav>

			<nav className="mt-8">
				<h2 className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
					Tags
				</h2>
				<div className="mt-2 -mx-4">
					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">Bug</span>
					</a>

					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">
							Feature request
						</span>
					</a>
					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">Marketing</span>
					</a>
					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">
							Enhancement
						</span>
					</a>
					<a href="#" className="flex justify-between  rounded-lg px-4 py-2">
						<span className="text-sm text-gray-600 font-medium">Design</span>
					</a>
				</div>

				<button className="flex items-center text-sm font-medium text-gray-600 mt-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 text-gray-400 mr-1"
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
					New Project
				</button>
			</nav>
		</div>
	);
}
