import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header/header';
import './globals.css';
import { CursorProvider } from '@/context/cursor';
import Cursor from '@/components/ui/cursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leo | FullStack Developer',
  description:
    'Meu portfólio, onde mostro quem eu sou e minhas skills como dev.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <CursorProvider>
          <Header />
          {children}
          <Cursor />
        </CursorProvider>
      </body>
    </html>
  );
}
