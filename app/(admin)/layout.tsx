import AppLayout from '@/layout/app-layout'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <AppLayout>{children}</AppLayout>
  )
}