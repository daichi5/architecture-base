import type { CSSProperties } from "react";

type Gap = "4px" | "8px" | "16px" | "32px";

type Props = {
	children: React.ReactNode;
	gap?: Gap;
	align?: CSSProperties["alignItems"];
};

const Stack: React.FC<Props> = (props) => {
	return (
		<div
			className="flex flex-col"
			style={{ gap: props.gap, alignItems: props.align || "stretch" }}
		>
			{props.children}
		</div>
	);
};

export { Stack };
