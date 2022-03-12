type PropTypes = {
	svgd: string;
	color?: string;
};

export default function SVG({ svgd, color }: PropTypes) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`h-4 w-4 ${color ? color : "text-gray-600"}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d={svgd} />
		</svg>
	);
}
