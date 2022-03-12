import React from "react";

export default function TextArea({ value, setValue }) {
	return (
		<div className="mt-3 w-full">
			<textarea
				placeholder="type here.."
				id=""
				rows="3"
				className="rounded-md w-full p-2 text-sm text-gray-900"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
