import { forwardRef, type ComponentProps, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

type Props = {
	width?: CSSProperties["width"];
} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, Props>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					className,
				)}
				style={{ width: props.width }}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
