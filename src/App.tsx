import Details from "./components/Details";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex bg-white px-4 py-2 rounded-xl shadow-md">
      <Sidebar />
      <Details />
    </div>
  );
}

export default App;