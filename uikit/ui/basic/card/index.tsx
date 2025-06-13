import { cn } from "@/uikit/cn";
import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?:string
}

export function Card({className,children}:CardProps) {

    return(
        <div className={cn("bg-white shadow-md rounded border border-gray-200", className)}>
            {children}
        </div>
    )
}

type CardHeaderProps = {
    title?: string;
    children?: ReactNode;
}

const CardHeader = ({title, children}:CardHeaderProps) => {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 p-3">
           {title && <h2 className="text font-semibold text-gray-800 ml-2">{title}</h2>}
            <div className="flex items-center">
                {children}
            </div>
        </div>
    )
}

type CardBodyProps = {
    children: ReactNode;
    className?: string;
}

const CardBody = ({className, children}: CardBodyProps) => {
    return (
        <div className={cn("p-4", className)}>
            {children}
        </div>
    )
}

Card.Header = CardHeader;
Card.Body = CardBody;