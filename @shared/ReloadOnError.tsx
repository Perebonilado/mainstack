import React, { FC } from "react";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";

interface Props {
  refetch: () => void;
  errorMessage: string;
  title: string;
}

const ReloadOnError: FC<Props> = ({ refetch, errorMessage, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <ErrorMessage messsage={errorMessage} />
      <Button
        title={title}
        variant="contained"
        color="primary"
        onClick={refetch}
      />
    </div>
  );
};

export default ReloadOnError;
