import * as React from 'react';
 
export type radiusType = "none" | "xs" | "sm" |"md" | "lg" | "full"

export type stylesType = {
     body? : React.CSSProperties,
     loading? : React.CSSProperties,
     loader?: React.CSSProperties,
     loaderText?: React.CSSProperties,
     leftIconStyle?:React.CSSProperties,
     rightIconStyle?:React.CSSProperties,
     iconOnlyStyle?:React.CSSProperties,
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning"
    | "outline-info"
    | "outline-light"
    | "outline-dark"
    | "dashed"
    | "underline";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconOnly?: React.ReactNode;
  children?: React.ReactElement; // Ensure children is a ReactElement
  value?: string;
  className?: string;
  radius?: radiusType;
  styles?: stylesType
}
