import { cn } from '@/uikit/cn'
import React, { LabelHTMLAttributes } from 'react'

type InputLabelProps = {
    labelColor?: string
    children?: React.ReactNode
    className?: string
} & LabelHTMLAttributes<HTMLLabelElement>

export default function InputLabel({labelColor,className, children, ...rest }: InputLabelProps) {
  return (
    <label className={cn(
        "block font-semibold mb-1", 
        labelColor ? labelColor:"text-gray-600",
        className
     )}
     {...rest}
     >{children}</label>
  )
}