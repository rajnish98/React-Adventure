  import React from "react";
  import ReactDOM, {createRoot} from "react-dom/client";

  // React.createElement => Object => HTML(DOM)
  // jsx = React.createElement => Object => HTML(DOM)
  const Title = () =>(
    <a href="/">
  <img className="logo " alt="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" />
  </a>
  );
  

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
  
  const Header = () => {
    return(
    <div className= "header">
      {/* {head} */}
      <Title/>
     {/* <head/> //componenet composition  */}
     <div className="Nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>  
      </ul>
     </div>
    </div>
  );
};

const Body = () => {
  return (
    <h4>Body</h4>
  )
}

const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}

  const AppLayout = () => {
    return(
  
  <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing a react element inside the root
  // root.render(head); // render is modify of dom
  root.render(<AppLayout/>);