import Card from "../card/card";
import { useState, useEffect } from "react";
import SpinerJs from "./spiner/spinerHtml";

const Main = () => {
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    fetch("https://657e09263e3f5b18946377d2.mockapi.io/app")
      .then((response) => response.json())
      .then((data) => {
        setCounter(() => data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
        
    <div>
        {counter.length === 0 && <SpinerJs />}
      
      {counter.map((item) => (
        <Card
          key={item.id}  
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Main;