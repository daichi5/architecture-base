import { Link } from "@/components/foundations/Link";
import { Cluster } from "@/components/foundations/Cluster";

export const Header: React.FC = () => {
	return (
		<header className="p-4 bg-gray-800 text-white">
			<Cluster gap="16px">
				<h1>Your name</h1>
				<nav>
					<Cluster gap="16px">
						<Link href="/">Home</Link>
						<Link href="/users">Users</Link>
					</Cluster>
				</nav>
			</Cluster>
		</header>
	);
};
