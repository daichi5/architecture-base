import type { CSSProperties } from "react";

type Props = {
	children: React.ReactNode;
	maxWidth?: CSSProperties["maxWidth"];
};

export const Container: React.FC<Props> = (props) => {
	return (
		<div
			className="mx-auto"
			style={{ maxWidth: props.maxWidth, width: "100%" }}
		>
			{props.children}
		</div>
	);
};
