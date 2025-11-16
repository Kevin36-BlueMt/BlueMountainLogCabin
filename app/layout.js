import "./globals.css";

export const metadata = {
  title: "Blue Mountain Log Cabin",
  description: "Rustic Appalachian log cabin retreat in Linden, Virginia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}