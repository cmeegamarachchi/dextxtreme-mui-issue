import { Typography } from "@material-ui/core";
import React from "react";

const ApplicationTitle = ({ text }: { text: string }) => (
  <Typography variant="h1" component="h2">
    {text}
  </Typography>
);

const App = () => {
  return <ApplicationTitle text="Application title" />;
};

export default App;
