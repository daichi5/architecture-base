import { Stack } from "@/components/foundations/Stack";
import { Text } from "@/components/foundations/Text";

import { UserCreateForm } from "@/components/features/UsersNew/UserCreateForm";

export const UsersNew: React.FC = () => {
	return (
		<Stack gap="32px">
			<Text>Create User</Text>
			<UserCreateForm />
		</Stack>
	);
};
