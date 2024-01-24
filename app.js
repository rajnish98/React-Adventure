  import React from "react";
  import ReactDOM from "react-dom/client";

  // React.createElement => Object => HTML(DOM)
  // jsx = React.createElement => Object => HTML(DOM)
  const head = 
  (<h1 id="title" key="h2"
  >Food Villa
  </h1>);
  

  // const container = React.createElement("div", {
  //     id: "container",
  //     hello:"world"
  //   },

  //   [React.createElement("h1", {
  //     id: "title",
  //     key: "h1",
  //   },
    // "Heading 1"
  // ),[heading1, heading2, head]]);
 //it is react element

  // console.log(heading);

  // React componenet
  // - FUNCTION - NEW
  // - CLASS BASED COMPONENT - OLD WAY OF WRITING.
  
  const HeaderComponent = () => {
    return(
    <div>
      {head}
      {/* {head()} */}
      //* <head/> //componenet composition */
      <h1>Namaste React functional componenet</h1>
      <h2>This is a h2 tage</h2>
    </div>
  )};
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing a react element inside the root
  // root.render(head); // render is modify of dom
  root.render(<HeaderComponent/>);