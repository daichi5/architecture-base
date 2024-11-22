import { Button } from "@/components/foundations/Button";
import { Cluster } from "@/components/foundations/Cluster";
import { Stack } from "@/components/foundations/Stack";

export default function Home() {
	return (
		<Stack>
			<h1>Home</h1>
			<Cluster>
				<Button>Click me!</Button>
				<Button variant="destructive">Click me!</Button>
			</Cluster>
		</Stack>
	);
}
