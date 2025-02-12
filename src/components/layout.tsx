'use client'

import React from 'react';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex-1 flex items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
}
