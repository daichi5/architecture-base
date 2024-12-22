import { cva } from "class-variance-authority";

type Props = {
	children: React.ReactNode;
	weight?: "bold" | "normal";
	size?: "large" | "medium" | "small";
};

const variants = cva("", {
	variants: {
		size: {
			large: "text-2xl",
			medium: "text-base",
			small: "text-sm",
		},
		weight: {
			bold: "font-bold",
			normal: "font-normal",
		},
	},
	defaultVariants: {
		size: "medium",
		weight: "normal",
	},
});

export const Text: React.FC<Props> = (props) => {
	return (
		<p
			className={variants({
				size: props.size,
				weight: props.weight,
			})}
		>
			{props.children}
		</p>
	);
};
