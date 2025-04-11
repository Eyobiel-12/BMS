// Fix for JSX IntrinsicElements
import React from 'react';

// Fix for GoldAccent component
interface GoldAccentProps {
  children: React.ReactNode;
  className?: string;
}

// Fix Next.js module declarations
declare module "next/link";
declare module "next/image";
declare module "lucide-react"; 