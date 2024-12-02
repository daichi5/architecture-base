import { Button } from "@/components/foundations/Button";
import { Cluster } from "@/components/foundations/Cluster";
import { Stack } from "@/components/foundations/Stack";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/foundations/Container";

export default function Home() {
	return (
		<Stack>
			<Header />
			<Container maxWidth="1200px">
				<h1>Home</h1>
				<Cluster>
					<Button>Click me!</Button>
					<Button variant="destructive">Click me!</Button>
				</Cluster>
			</Container>
		</Stack>
	);
}
