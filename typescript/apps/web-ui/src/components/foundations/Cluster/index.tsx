import type { CSSProperties } from "react";

type Gap = "4px" | "8px" | "16px";

type Props = {
	children: React.ReactNode;
	gap?: Gap;
	align?: CSSProperties["alignItems"];
	justify?: CSSProperties["justifyContent"];
};

const Cluster: React.FC<Props> = (props) => {
	return (
		<div
			className="flex flex-row"
			style={{
				gap: props.gap,
				justifyContent: props.justify,
				alignItems: props.align,
			}}
		>
			{props.children}
		</div>
	);
};

export { Cluster };
