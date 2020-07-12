import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./ListOfProducts";
import ProductDetails from "./ProductDetails";
import menuData from "../menu-data.json";
var resultArray = Object.keys(menuData).map(function (personNamedIndex) {
  let product = menuData[personNamedIndex];
  return product;
});

export default function RouterContainer() {
  const [arr, setArr] = React.useState(resultArray);
  const handleUpdate = (item) => {
    let copyArr = [...arr];
    let result = copyArr.map((x) =>
      x.itemId === item.itemId
        ? item.type === "price"
          ? { ...x, price: item.updatedVal }
          : { ...x, available: item.updatedVal }
        : x
    );
    setArr(result);
  };
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:productId">
            <ProductDetails allProducts={arr} updateItem={handleUpdate} />
          </Route>
          <Route path="/">
            <ProductList allProducts={arr} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
