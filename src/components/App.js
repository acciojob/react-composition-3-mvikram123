
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip"

const App = () => {
  return (
    <div>
      <div>
      <Tooltip text="This is a tooltip">Hover over me!</Tooltip>
    </div>

<div className="">
      <Tooltip text="This is a anothre tooltip">Hover over me to see another tooltip!</Tooltip>
</div>
</div>
  );
}

export default App;
// In this example, I've used arrow functions to define the functional components and followed the same approach as the previous examples to create the Tooltip component using useState.





