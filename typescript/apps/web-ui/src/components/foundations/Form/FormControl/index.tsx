import { FormItemContext } from "../FormItem";

import {
	useContext,
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from "react";

import { Slot } from "@radix-ui/react-slot";

type Props = {
	children: React.ReactNode;
};

export const FormControl: React.FC<Props> = forwardRef<
	ElementRef<typeof Slot>,
	ComponentPropsWithoutRef<typeof Slot>
>((props, ref) => {
	const { id } = useContext(FormItemContext);

	return <Slot ref={ref} id={id} {...props} />;
});
