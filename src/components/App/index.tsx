import { Typography } from "@material-ui/core";
import { Button } from "devextreme-react";
import React from "react";

import "./../../css/dx.material.dx-mui-blue-light.css"

const ApplicationTitle = ({ text }: { text: string }) => (
  <Typography variant="h1" component="h2">
    {text}
  </Typography>
);

const App = () => {
  return (<>
	<ApplicationTitle text="Application title" />
	<Button>Click me</Button>
  </>);
};

export default App;
