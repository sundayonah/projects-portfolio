// app/layout.tsx
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
   title: 'My Projects',
   description: 'My Projects',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <ThemeProvider attribute="class">{children}</ThemeProvider>
         </body>
      </html>
   );
}
