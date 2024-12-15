import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	maxWidth?: CSSProperties["maxWidth"];
	className?: string;
};

export const Container: React.FC<Props> = (props) => {
	return (
		<div
			className={cn("mx-auto", props.className)}
			style={{ maxWidth: props.maxWidth, width: "100%" }}
		>
			{props.children}
		</div>
	);
};
