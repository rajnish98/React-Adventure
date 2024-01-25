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
// Config Driven UI

const RestrauntList = [{
  data: {
    id: "37968",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Growel's 101",
    areaName: "Kandivali East",
    costForTwo: "₹350 for two",
    cuisines: [
      "Burgers",
      "American"
    ],
    avgRating: 4.3,
    "parentId": "166",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 1,
      "serviceability": "SERVICEABLE",
      "slaString": "26 mins",
      "lastMileTravelString": "1.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-26 03:45:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  }
},
{
  data:{
    id: "11089",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Akurli Mall",
    areaName: "Kandivali East",
    costForTwo: "₹350 for two",
    cuisines: [
      "Pizzas"
    ],
    avgRating: 3.8,
    "parentId": "721",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-26 05:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  }
},
{
  data: {
    id: "70697",
    name: "Theobroma",
    cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
    locality: "Borivali West",
    areaName: "Borivali West",
    costForTwo: "₹400 for two",
    cuisines: [
      "Bakery",
      "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "1040",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-25 23:59:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
          "shortDescription": "Perfect Cake Delivery",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                "shortDescription": "Perfect Cake Delivery"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  }

},
{
  data: {
    id: "60195",
    name: "Starbucks Coffee",
    cloudinaryImageId: "182191ab163770437b62861a6f987709",
    locality: "Growels Mall",
    areaName: "Malad Kan East",
    costForTwo: "₹400 for two",
    cuisines: [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Bakery",
      "Ice Cream"
    ],
    "avgRating": 4.5,
    "parentId": "195515",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 24,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-25 22:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  }
},
{
  data: {
    id: "23738",
    name: "McDonald's",
    cloudinaryImageId: "405645b3118d83e89db4c65361e43733",
    locality: "Growell Mall",
    areaName: "Kandivali East",
    costForTwo: "₹400 for two",
    cuisines: [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "630",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-25 23:45:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹199"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  }
},
{
  data: {
    id: "24499",
    name: "Domino's Pizza",
    cloudinaryImageId: "sslqxrdr6e93xwwqldao",
  locality: "Kandivli (E)",
    areaName: "Thakur Village",
    costForTwo: "₹400 for two",
    cuisines: [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "2456",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 25,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-26 02:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  }
},
]

const RestrauntCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
  
  return(
    <div className="card">
      <img 
      src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId
      }
       />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
    )
}
const Body = () => {
  return(<div className="restaurant-list">
    {RestrauntList.map((restaurant) => {
      return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
    })}

  </div>
  );
};

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