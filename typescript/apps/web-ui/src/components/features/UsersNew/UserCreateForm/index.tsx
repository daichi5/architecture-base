"use client";

import { Button } from "@/components/foundations/Button";
import { Input } from "@/components/foundations/Input";
import { Stack } from "@/components/foundations/Stack";
import {
	FormControl,
	FormItem,
	FormLabel,
} from "@/components/foundations/Form";

export const UserCreateForm: React.FC = () => {
	return (
		<Stack gap="32px">
			<Stack gap="16px">
				<FormItem>
					<FormLabel>Username</FormLabel>
					<FormControl>
						<Input placeholder="Username" width={"240px"} />
					</FormControl>
				</FormItem>
				<FormItem>
					<FormLabel>Email</FormLabel>
					<FormControl>
						<Input placeholder="Email" width={"240px"} />
					</FormControl>
				</FormItem>
			</Stack>
			<Button>Create</Button>
		</Stack>
	);
};