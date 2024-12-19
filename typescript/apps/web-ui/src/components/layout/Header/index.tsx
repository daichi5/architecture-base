import { TextLink } from "@/components/foundations/TextLink";
import { Cluster } from "@/components/foundations/Cluster";
import { Container } from "@/components/foundations/Container";
import { Button } from "@/components/foundations/Button";

export const Header: React.FC = () => {
	return (
		<header className="p-4  text-white bg-neutral-950 border-b-neutral-600 border-b-2">
			<Container maxWidth="1200px">
				<Cluster align="center" justify="space-between">
					<Cluster gap="16px">
						<h1>Your name</h1>
						<nav>
							<Cluster gap="16px">
								<TextLink href="/">Home</TextLink>
								<TextLink href="/users">Users</TextLink>
							</Cluster>
						</nav>
					</Cluster>
					<Button>Sign in</Button>
				</Cluster>
			</Container>
		</header>
	);
};
