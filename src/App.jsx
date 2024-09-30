import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getLogin } from "./stores/authSlice";
import Home from "@/pages/home";

function App() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getLogin());
  };
  return (
    <>
      <div className="bg-red-500 text-red-500">
        Hello
        <button onClick={handleClick}>Nhan</button>
        <Home />
      </div>
    </>
  );
}

export default App;
