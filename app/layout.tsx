import type { Metadata } from 'next';
import { ThemeProvider } from './components/ui/theme-provider';
import Nav from './components/ui/Nav';
import './globals.css';

export const metadata: Metadata = {
  title: 'e-commerce store',
  description: 'e-commerce app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
