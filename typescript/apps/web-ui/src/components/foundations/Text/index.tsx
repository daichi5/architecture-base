type Props = {
	children: React.ReactNode;
};

export const Text: React.FC<Props> = (props) => {
	return <p>{props.children}</p>;
};
