import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLElement>


export * from './primary';
