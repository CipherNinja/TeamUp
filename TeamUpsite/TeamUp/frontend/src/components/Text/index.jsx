import React from "react";

const sizeClasses = {
  txtNotoSansMedium16Gray800: "font-medium font-notosans",
  txtNotoSansSemiBold36: "font-notosans font-semibold",
  txtEpilogueExtraBold72: "font-epilogue font-extrabold",
  txtNotoSansMedium16: "font-medium font-notosans",
  txtNotoSansRegular16: "font-normal font-notosans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
