import NextLink from "next/link";

type Props = {
	href: string;
	children: React.ReactNode;
};

export const TextLink: React.FC<Props> = (props) => {
	return (
		<NextLink href={props.href} className="hover:underline">
			{props.children}
		</NextLink>
	);
};
