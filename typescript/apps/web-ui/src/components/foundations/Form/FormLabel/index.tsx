import { Text } from "@/components/foundations/Text";

import { FormItemContext } from "../FormItem";
import { useContext } from "react";

type Props = {
	children: React.ReactNode;
};

export const FormLabel: React.FC<Props> = (props) => {
	const { id } = useContext(FormItemContext);

	return (
		<label htmlFor={id}>
			<Text weight="bold">{props.children}</Text>
		</label>
	);
};
