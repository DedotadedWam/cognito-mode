import * as React from "react";
import { FC, useState } from "react";

const App: FC = () => {
  const [pageView, setPageView] = useState("Home");

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default App;
