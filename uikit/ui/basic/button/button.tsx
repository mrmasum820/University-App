import { cn } from '@/uikit/cn';
import type { ComponentProps, ElementType, ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  CiCircleCheck,
  CiCircleChevLeft,
  CiCircleChevRight,
  CiEdit,
} from 'react-icons/ci';
import {
  LuArrowLeft,
  LuArrowRight,
  LuDownload,
  LuLoaderCircle,
  LuPlus,
  LuSaveAll,
  LuTrash,
  LuX,
} from 'react-icons/lu';
import { MdUpdate } from 'react-icons/md';
import { VscIssueDraft } from 'react-icons/vsc';

const iconMap: Record<string, IconType> = {
  'chevronRight': CiCircleChevRight,
  'chevronLeft': CiCircleChevLeft,
  check: CiCircleCheck,
  x: LuX,
  'arrowRight': LuArrowRight,
  'arrowLeft': LuArrowLeft,
  plus: LuPlus,
  download: LuDownload,
  save: LuSaveAll,
  update: MdUpdate,
  delete: LuTrash,
  draft: VscIssueDraft,
  edit: CiEdit,

};

const colorVariants = {
  primary: {
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:text-blue-700',
    gradient:
      'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800',
  },
  secondary: {
    solid: 'bg-gray-600 text-white hover:bg-gray-700 ',
    outline: 'border border-gray-600 text-gray-600 hover:bg-gray-50 ',
    ghost: 'text-gray-600 hover:text-gray-700 ',
    gradient:
      'bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:from-gray-600 hover:to-gray-800 ',
  },
  success: {
    solid: 'bg-green-600 text-white hover:bg-green-700',
    outline: 'border border-green-600 text-green-600 hover:bg-green-50',
    ghost: 'text-green-600 hover:bg-green-50',
    gradient:
      'bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800',
  },
  danger: {
    solid: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-red-600 text-red-600 hover:bg-red-50',
    ghost: 'text-red-600 hover:text-red-700',
    gradient:
      'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800',
  },
  warning: {
    solid: 'bg-yellow-500 text-white hover:bg-yellow-600',
    outline: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-50',
    ghost: 'text-yellow-500 hover:text-yellow-600',
    gradient:
      'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700',
  },
  purple: {
    solid: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50',
    ghost: 'text-purple-600 hover:bg-purple-50',
    gradient:
      'bg-gradient-to-r from-purple-500 to-purple-800 text-white hover:from-purple-600 hover:to-purple-900',
  },
  indigo: {
    solid: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    ghost: 'text-indigo-600 hover:bg-indigo-50',
    gradient:
      'bg-gradient-to-r from-indigo-500 to-indigo-800 text-white hover:from-indigo-600 hover:to-indigo-900',
  },
  fancy: {
    gradient:
      'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600',
  },
  sunset: {
    gradient:
      'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:from-orange-600 hover:via-red-600 hover:to-pink-600',
  },
  ocean: {
    gradient:
      'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600',
  },
  forest: {
    gradient:
      'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white hover:from-green-600 hover:via-emerald-600 hover:to-teal-600',
  },
};
const sizeVariants = {
  none: 'px-0 py-1 text-base',
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

type Variant = 'solid' | 'outline' | 'ghost' | 'gradient';
type Color = keyof typeof colorVariants;
type Size = keyof typeof sizeVariants;
type Rounded = 'sm' | 'md' | 'lg' | 'full';
type IconName = keyof typeof iconMap;

type ButtonProps = {
    children?: React.ReactNode;
    color?: Color;
    variant?: Variant;
    size?: Size;
    startIcon?: IconName | keyof typeof iconMap | React.ElementType;
    endIcon?: IconName | keyof typeof iconMap | React.ElementType;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    rounded?: Rounded;
    className?: string;
    type?:string
  } & React.ComponentProps<'button'>;
  
  export const Button = ({
    children,
    color = 'primary',
    variant = 'solid',
    size = 'md',
    startIcon,
    endIcon,
    disabled = false,
    loading = false,
    fullWidth = false,
    rounded = 'md',
    className,
    type = "button",
    ...rest
  }: ButtonProps) => {
    const colorClass = (colorVariants[color] as Record<Variant, string>)[variant] || colorVariants.primary[variant];
    const sizeClass = sizeVariants[size];
    const roundedClass = rounded === 'full' ? 'rounded-full' : `rounded-${rounded}`;
    const widthClass = fullWidth ? 'w-full' : 'w-auto';
  
    const buttonClasses = cn(
      'inline-flex items-center justify-center',
      sizeClass,
      colorClass,
      roundedClass,
      widthClass,
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      'transition-colors duration-200 focus:outline-none',
      className
    );
  
    const resolveIcon = (icon: keyof typeof iconMap | React.ElementType | undefined) => {
      if (!icon) return null;
      const IconComponent: React.ElementType | undefined = typeof icon === 'string' ? iconMap[icon] : icon;
      return IconComponent ? <IconComponent size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} /> : null;
    };
  
    const resolvedStartIcon = resolveIcon(startIcon);
  
    return (
      <button type={type} className={buttonClasses} disabled={disabled} {...rest}>
        {loading && (
          <LuLoaderCircle
            className="animate-spin"
            size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
          />
        )}
        {!loading && (
          children ? (
            <>
              {startIcon && <span className="mr-2 flex items-center">{resolvedStartIcon}</span>}
              {children}
              {endIcon && <span className="ml-2 flex items-center">{resolveIcon(endIcon)}</span>}
            </>
          ) : (
            startIcon && <span className="flex items-center justify-center">{resolvedStartIcon}</span>
          )
        )}
      </button>
    );
  };
  


type LinkButtonProps = {
    children?: ReactNode;
    color?: Color;
    variant?: Variant;
    size?: Size;
    startIcon?: keyof typeof iconMap | ElementType;
    endIcon?: keyof typeof iconMap | ElementType;
    loading?: boolean;
    fullWidth?: boolean;
    rounded?: Rounded;
    className?: string;
    as?: ElementType;
    href: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
  } & ComponentProps<'a'>;
  
export const LinkButton = ({
    children,
    color = 'primary',
    variant = 'solid',
    size = 'md',
    startIcon,
    endIcon,
    loading = false,
    fullWidth = false,
    rounded = 'md',
    className,
    href,
    target,
    rel,
    onClick,
    as: Component = 'a',
    ...rest
  }: LinkButtonProps) => {
    const colorClass = (colorVariants[color] as Record<Variant, string>)[variant] || colorVariants.primary[variant];
    const sizeClass = sizeVariants[size];
    const roundedClass = rounded === 'full' ? 'rounded-full' : `rounded-${rounded}`;
    const widthClass = fullWidth ? 'w-full' : 'w-auto';
  
    const buttonClasses = cn(
      'inline-flex items-center justify-center',
      sizeClass,
      colorClass,
      roundedClass,
      widthClass,
      'transition-colors duration-200 focus:outline-none',
      className
    );
  
    const resolveIcon = (icon: keyof typeof iconMap | ElementType | undefined) => {
      if (!icon) return null;
      const IconComponent: ElementType | undefined = typeof icon === 'string' ? iconMap[icon] : icon;
      return IconComponent ? <IconComponent size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} /> : null;
    };
  
    return (
        <Component
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
        onClick={onClick}
        {...rest}
      >
        {loading && <LuLoaderCircle className="animate-spin" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
        {!loading && (children ? (
          <>
            {startIcon && <span className="mr-2 flex items-center">{resolveIcon(startIcon)}</span>}
            {children}
            {endIcon && <span className="ml-2 flex items-center">{resolveIcon(endIcon)}</span>}
          </>
        ) : (
          <span className="flex items-center">{resolveIcon(startIcon)}</span>
        ))}
      </Component>
    );
  }
  

  
Button.displayName = "Button"
Button.Link = LinkButton