import { Button, buttonVariants } from "@/components/foundations/Button";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<p>
				<Button>Click me!</Button>
				<Button variant="destructive">Click me!</Button>
			</p>
		</div>
	);
}
