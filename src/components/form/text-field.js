import React from "react";

import MuiTextField from "@material-ui/core/TextField";

const TextField = ({ field, form, ...props }) => {
  return <MuiTextField {...field} {...props} />;
};

export { TextField };
