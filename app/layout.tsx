import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Чисто — химчистка мягкой мебели с выездом",
  description:
    "Бережная химчистка диванов, кресел и матрасов на дому. Рассчитайте предварительную стоимость онлайн.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
