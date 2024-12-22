import { Stack } from "@/components/foundations/Stack";

import { createContext, useId } from "react";

export const FormItemContext = createContext<{ id: string | undefined }>({
	id: undefined,
});

type Props = {
	children: React.ReactNode;
};

export const FormItem: React.FC<Props> = (props) => {
	const id = useId();

	return (
		<FormItemContext.Provider value={{ id }}>
			<Stack gap="8px">{props.children}</Stack>
		</FormItemContext.Provider>
	);
};
