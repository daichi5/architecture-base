import { Button } from "@/components/foundations/Button";
import { Cluster } from "@/components/foundations/Cluster";
import { Stack } from "@/components/foundations/Stack";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/foundations/Container";
import {
	Table,
	TableBody,
	TableCell,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/foundations/Table";

export default function Home() {
	return (
		<Stack gap="8px">
			<Header />
			<Container maxWidth="1200px" className="py-8">
				<Stack gap="8px">
					<h1 className="text-4xl font-bold text-stone-400">Users</h1>
					<Table>
						<TableCaption>A list of users.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">userId</TableHead>
								<TableHead>userName</TableHead>
								<TableHead>email</TableHead>
								<TableHead className="text-right">createdAt</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">1</TableCell>
								<TableCell>John Doe</TableCell>
								<TableCell>sample@xxxxx</TableCell>
								<TableCell className="text-right">
									2021-10-10 10:10:10
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Stack>
			</Container>
		</Stack>
	);
}
