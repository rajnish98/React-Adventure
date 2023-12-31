  const heading = React.createElement("h1", {
      id: "title",
    },
    "Heading 1"
  );
  const heading2 = React.createElement("h2", {
      id: "title",
    },

    "Heading 2"

  );
  const container = React.createElement("div", {
      id: "container",
    },

    [heading, heading2] //it is react element
  );

  console.log(heading);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing a react element inside the root
  root.render(container); //render is modify of dom