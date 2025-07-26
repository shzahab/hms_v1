
"use client";

import { Button } from "@/components/ui/button";

interface BuyNowButtonProps {
  paymentLink: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BuyNowButton({ 
  paymentLink, 
  className = "w-full sm:w-auto h-[42px] bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200",
  children = "🛒 BUY NOW!" 
}: BuyNowButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(paymentLink, '_blank');
    }
  };

  return (
    <Button
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
