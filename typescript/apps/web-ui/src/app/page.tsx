import { Button } from "@/components/foundations/Button";
import { Cluster } from "@/components/foundations/Cluster";
import { Stack } from "@/components/foundations/Stack";
import { Header } from "@/components/layout/Header";

export default function Home() {
	return (
		<Stack>
			<Header />
			<h1>Home</h1>
			<Cluster>
				<Button>Click me!</Button>
				<Button variant="destructive">Click me!</Button>
			</Cluster>
		</Stack>
	);
}
