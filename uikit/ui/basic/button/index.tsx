import { cn } from "@/uikit/cn";
import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success" | "default";
  size?: "sm" | "md" | "lg";
  className?: string;
  isLoading?: boolean;
  icon?: ReactNode;
  ariaLabel?: string;
  as?: "button" | "a";
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  isLoading = false,
  icon,
  ariaLabel,
  as = "button",
  ...props
}: BaseProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none";

  const sizeMap = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3"
  };

  const variantMap = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    default: "text-blue-500"
  };

  const composed = cn(
    variant !== "default" && base,
    variant !== "default" && sizeMap[size],
    variantMap[variant],
    className,
    isLoading && "opacity-50 cursor-not-allowed"
  );

  if (as === "a" || "href" in props) {
    const { href="#", ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={composed}
        {...rest}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={isLoading || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      className={cn("cursor-pointer",composed)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {isLoading ? "Loading..." : children}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  ariaLabel?: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  isLoading = false,
  ariaLabel,
  prefetch,
  replace,
  scroll,
}: LinkButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none";

  const sizeMap = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const variantMap = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  const composed = cn(
    base,
    sizeMap[size],
    variantMap[variant],
    className,
    isLoading && "opacity-50 cursor-not-allowed"
  );

  return (
    <Link
      href={href}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      aria-label={ariaLabel}
    >
      <span className={composed}>
        {icon && <span className="mr-2">{icon}</span>}
        {isLoading ? "Loading..." : children}
      </span>
    </Link>
  );
}


Button.Link = LinkButton