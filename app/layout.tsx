// app/layout.tsx
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
         <body className='px-8'>
            <ThemeProvider attribute="class">
               <div className="max-w-5xl mx-auto bg-white dark:bg-[#18181b] shadow-md">
                  <Header />
                  <div className='max-w-4xl mx-auto px-4'>
                     {children}
                     <Footer />
                  </div>
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
