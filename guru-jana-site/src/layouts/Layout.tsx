import { ReactNode } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-surface-muted text-slate-900">
    <Navbar />
    <main className="pt-24">{children}</main>
    <Footer />
  </div>
);

export default Layout;
