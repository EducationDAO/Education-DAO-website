import type { Metadata } from "next";
import fraktionSansFont from "@/fonts/fraktionSans";
import styles from "./layout.module.scss";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Education DAO | Coming Soon",
  description: "Consensys Education DAO will coming soon!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fraktionSansFont.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}