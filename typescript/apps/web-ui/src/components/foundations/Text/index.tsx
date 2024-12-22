type Props = {
	children: React.ReactNode;
	weight?: "bold" | "normal";
};

export const Text: React.FC<Props> = (props) => {
	return (
		<p
			style={{
				fontWeight: props.weight || "normal",
			}}
		>
			{props.children}
		</p>
	);
};
