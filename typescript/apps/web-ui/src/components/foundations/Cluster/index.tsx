type Gap = "4px" | "8px";

type Props = {
	children: React.ReactNode;
	gap?: Gap;
};

const Cluster: React.FC<Props> = ({ gap = "4px", children }) => {
	return (
		<div className="flex flex-row" style={{ gap: gap }}>
			{children}
		</div>
	);
};

export { Cluster };
