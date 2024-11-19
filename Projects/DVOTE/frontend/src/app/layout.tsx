
import "./globals.css";
import Header from "./Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
