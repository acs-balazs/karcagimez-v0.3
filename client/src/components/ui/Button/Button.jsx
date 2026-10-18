function Button({
	as: Element = "button",
	children,
	className = "",
	disabled = false,
	type = "button",
	variant = "primary",
	...props
}) {
	const baseClassName =
		//"font-pop inline-flex select-none transition-all items-center justify-center whitespace-nowrap rounded-xl ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground active:border-b-2 active:scale-y-95 border-x-2 border-t-2 border-b-4 origin-bottom";

		"h-10 px-4 py-2 font-pop inline-flex select-none transition-all items-center justify-center whitespace-nowrap rounded-xl ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground active:border-b-2 active:scale-y-95 border-x-2 border-t-2 border-b-4 origin-bottom";
	const variantClassNames = {
		primary:
			"bg-primary-500 text-neutral-800 font-medium border-primary-900 hover:not-disabled:bg-primary-400",
		//bg-yellow-500 hover:bg-yellow-600 border-yellow-800 text-white
		secondary:
			"bg-neutral-800 hover:bg-neutral-700 border-neutral-600 text-neutral-100",
		danger: "border-system-red-200 bg-system-red-50 text-system-red-900",
	};

	return (
		<Element
			className={`${baseClassName} ${variantClassNames[variant]} ${className}`.trim()}
			{...(Element === "button" ? { disabled } : {})}
			type={Element === "button" ? type : undefined}
			{...props}
		>
			{children}
		</Element>
	);
}

export default Button;
