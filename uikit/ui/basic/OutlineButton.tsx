"use client";
import { cn } from "@/uikit/cn";
import Link from "next/link";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type OutlineButtonProps = {
  className?: string;
  children?:ReactNode;
  variant?: 'default' | 'outline' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>

type OutlineButtonLinkProps = {
  className?: string;
  children?:ReactNode;
  variant?: 'default' | 'outline' | 'danger';
  href: string;
} & ButtonHTMLAttributes<HTMLAnchorElement>

const OutlineButtonComponent: FC<OutlineButtonProps> = ({className, variant, children, ...rest}) => {
  let btnClass = '';
  const variants = variant || 'default';
  if (variants) {
    btnClass = cn(
        'text-gray-500 outline-gray-500 hover:bg-gray-100 outline-1 py-2 px-6 rounded cursor-pointer transition-all duration-500 ease-in-out',
        className,
    );
  }

  if (variants === 'outline') {
    btnClass = cn(
        'text-blue-500 outline-blue-500 hover:bg-gray-100 outline-1 py-2 px-6 rounded cursor-pointer transition-all duration-500 ease-in-out',
        className,
    );
  }

  if (variants === 'danger') {
      btnClass = cn(
          'text-red-500 outline-red-500 hover:bg-red-100 outline-1 py-2 px-6 rounded cursor-pointer transition-all duration-500 ease-in-out',
          className,
      );
  }
    return (
      <button className={btnClass} {...rest}  >
        {children}
      </button>
    );
  };

const OutlineButtonLink: FC<OutlineButtonLinkProps> = ({className, variant, href = "#", children, ...rest}) => {
  let btnClass = '';
  const variants = variant || 'default';
  if (variants) {
      btnClass = cn(
          'w-full text-gray-500 outline-gray-500 hover:bg-gray-100 outline-1 py-2 rounded cursor-pointer transition-all duration-500 ease-in-out',
          className,
      );
  }

  if (variants === 'outline') {
    btnClass = cn(
        'w-full text-blue-500 outline-blue-500 hover:bg-gray-100 outline-1 py-2 rounded cursor-pointer transition-all duration-500 ease-in-out',
        className,
    );
  }

  if (variants === 'danger') {
      btnClass = cn(
          'w-full text-red-500 outline-red-500 hover:bg-gray-100 outline-1 py-2 rounded cursor-pointer transition-all duration-500 ease-in-out',
          className,
      );
  }


  return (
    <Link href={href} className={btnClass} {...rest}  >
      {children}
    </Link>
  );
};

export const OutlineButton = Object.assign(OutlineButtonComponent, { Link: OutlineButtonLink });