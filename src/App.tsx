import { toast } from "react-toastify";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-96 items-center justify-center bg-gray-100">
        <button
          className="btn btn-primary"
          onClick={() => toast("Toast working!")}
        >
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
