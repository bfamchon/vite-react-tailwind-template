import { buttonVariants } from '@/components/ui/buttonVariants';
import { cn } from '@/shared/utils';
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkAsButtonProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkAsButton: React.FC<LinkAsButtonProps> = ({ to, className, children }) => {
  return (
    <Link to={to} className={cn(buttonVariants({ variant: 'default', size: 'default' }), className)}>
      {children}
    </Link>
  );
};

export default LinkAsButton;
