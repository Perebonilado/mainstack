import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSelectElement> {}

const DropDown: FC<Props> = ({ ...props }) => {
  return <select {...props}></select>;
};

export default DropDown;
