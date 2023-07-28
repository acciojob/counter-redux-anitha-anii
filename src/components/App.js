import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./actions";
import './../styles/App.css';


const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increaseCount())}>increment</button>
      <button onClick={() => dispatch(decreaseCount())}>Decrease</button>
    </div>
  );
};

export default App;

