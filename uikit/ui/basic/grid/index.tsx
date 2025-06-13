import { cn } from '@/uikit';

type GridProps = {
    columns?:string;
    gap?:string;
    className?:string;
    children?:React.ReactNode
}

export const Grid = ({ columns = '12', gap = '4', className, children }:GridProps) => {
    return (
        <div className={cn(`grid grid-cols-${columns} gap-${gap}`, className)}>
            {children}
        </div>
    );
};

type GridColProps = {
    className?:string;
    children?:React.ReactNode
}

const Col = ({ className, children }:GridColProps) => {
    return <div className={cn(`col-span-12`, className)}>{children}</div>;
};

Grid.Col = Col;
