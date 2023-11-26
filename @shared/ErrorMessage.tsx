import React, { FC } from "react";

interface Props {
  messsage: string;
}

const ErrorMessage: FC<Props> = ({ messsage }) => {
  return <p className="text-sm text-center text-rose-700">{messsage}</p>;
};

export default ErrorMessage;
