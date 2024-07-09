import classNames from "classnames";
import styles from "./button.module.scss";
import React from "react";

export interface ButtonProps {
  className?: string;
  buttonText: string;
  onClick?: () => void;
  color?: string;
  textColor?: string;
  size?: "small" | "large";
}

const defaultClick = () => {
  window.location.href =
    "https://airtable.com/app4cbS0gpcBdM29E/paghPNjn40HAbnLMR/form";
};

export const Button: React.FC<ButtonProps> = ({
  className,
  buttonText,
  onClick,
  color = "#ff8516", // Default color if not provided
  textColor = "#ffffff", // Default color if not provided
  size = "small",
}: ButtonProps) => {
  const handleClick = onClick || defaultClick;

  // Set the style based on the size prop
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
    width: size === "large" ? "10em" : "8em",
    height: size === "large" ? "3.5em" : "2.5em",
    lineHeight: size === "large" ? "3.5em" : "2.5em",
    fontWeight: size === "large" ? "600" : "500",
  };

  return (
    <div
      className={classNames(styles.root, className)}
      onClick={handleClick}
      style={buttonStyle}
    >
      {buttonText}
    </div>
  );
};
