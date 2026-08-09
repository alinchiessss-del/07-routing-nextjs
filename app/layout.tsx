import type { Metadata } from 'next';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'NoteHub application',
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          {children}
          {modal}
        </TanStackProvider>
      </body>
    </html>
  );
}