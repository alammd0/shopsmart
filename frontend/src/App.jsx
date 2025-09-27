import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./app/slice/counterSlice";
// import { disconnect } from "mongoose";

function App() {

  const count = useSelector( (state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      {/* <h1 className="text-3xl bg-red-900 text-white">Hello world</h1> */}

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>

        <p>count = {count}</p>

        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default App
