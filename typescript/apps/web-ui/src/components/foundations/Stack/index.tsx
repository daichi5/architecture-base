type Gap = "4px" | "8px" | "16px" | "32px";

type Props = {
	children: React.ReactNode;
	gap?: Gap;
};

const Stack: React.FC<Props> = ({ gap = "4px", children }) => {
	return (
		<div className="flex flex-col" style={{ gap: gap }}>
			{children}
		</div>
	);
};

export { Stack };
