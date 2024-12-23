import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Container } from "@/components/foundations/Container";
import { Stack } from "@/components/foundations/Stack";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",

	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
			>
				<Stack gap="8px">
					<Header />
					<Container maxWidth="1200px" className="py-8 px-4">
						{children}
					</Container>
				</Stack>
			</body>
		</html>
	);
}
