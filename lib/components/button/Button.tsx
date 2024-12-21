import * as React from "react";
import stylesModule from "./Button.module.css";
import { ButtonProps } from "./buttonTypes";

export const Button: React.FC<ButtonProps> = ({
  children = <></>,
  variant = "primary",
  size = "small",
  isLoading = false,
  isFullWidth = false,
  className,
  disabled,
  leftIcon = <></>,
  rightIcon = <></>,
  iconOnly,
  value,
  radius ="sm",
  styles,
  ...props
}) => {
  const buttonClasses = [
    stylesModule.button,
    stylesModule[variant],
    iconOnly ? stylesModule[`icon_${size}`] : stylesModule[size],
    isFullWidth ? stylesModule.fullWidth : "",
    isLoading ? stylesModule.loading : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const borderRadius = {
     none: "0px",
     xs : "2px",
     sm : "4px",
     md : "5px",
     lg : "6px",
     full : "100%"
  }
  const iconsSize = {
    small: 16,
    medium: 20,
    large: 24,
  };

  return (
    <button
      className={`${buttonClasses}`}
      disabled={disabled || isLoading}
      style={{borderRadius:borderRadius[radius], ...styles?.body}}
      {...props}
    >
      {isLoading ? (
        <div
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            contain: "space-between",
            alignItems: "center",
            ...styles?.loading
          }}
        >
          <span className={`${stylesModule.loader} ${stylesModule[variant]} `} style={{...styles?.loader}}></span>
          <span
            className={`${stylesModule[variant]}`}
            style={{
              marginLeft: `${size == "small" ? "22px" : "24px"}`,
              display:"flex",
              alignItems:"center",
              paddingRight: 0,
              border: 0,
              ...styles?.loaderText
            }}
          >
            {value}
          </span>
        </div>
      ) : (
        <>
          {leftIcon && (
            <span
              className={``}
              style={{
                marginRight: `${size == "small" ? "4px" : "8px"}`,
                paddingRight: 0,
                border: 0,
                ...styles?.leftIconStyle
              }}
            >
              {React.cloneElement(leftIcon, { size: `${iconsSize[size]}px` })}
            </span>
          )}
          {iconOnly ? (
            <span className={""} style={styles?.iconOnlyStyle}>
              {React.cloneElement(children, { size: `${iconsSize[size]}px` })}
            </span>
          ) : (
            value
          )}
          {rightIcon && (
            <span
              className={``}
              style={{
                marginLeft: `${size == "small" ? "4px" : "8px"}`,
                paddingRight: 0,
                border: 0,
                ...styles?.rightIconStyle
              }}
            >
              {React.cloneElement(rightIcon, { size: `${iconsSize[size]}px` })}
            </span>
          )}
        </>
      )}
    </button>
  );
};
