import React from "react";

type PropTypes = {
  value: string | undefined | null;
};

const ErrorText = ({ value }: PropTypes) => {
  return <small className="text-red-500">{value}</small>;
};

export default ErrorText;
