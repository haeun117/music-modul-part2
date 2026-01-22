import "./globals.css";

export const metadata = {
  title: "Harmony Stack",
  description: "Harmony Stack UI system"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-grade="mid">
      <body>{children}</body>
    </html>
  );
}
