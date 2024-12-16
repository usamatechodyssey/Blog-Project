import "./globals.css";

export const metadata = {
  title: "Dynamic Blog with Comments",
  description: "A professional blog built with Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-blue-600 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">My Professional Blog</h1>
        </header>
        <main className="max-w-4xl mx-auto py-8 px-4">{children}</main>
        <footer className="text-center text-sm py-4 text-gray-600">
          © {new Date().getFullYear()} Usama Bhatti | Built with Next.js
        </footer>
      </body>
    </html>
  );
}
