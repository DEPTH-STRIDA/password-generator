import Nav from "./Components/Nav";
import Body from "./Components/Body";

const App: React.FC = () => {


  return (
    <div className="flex flex-col overflow-x-hidden">
      <Nav />
      <Body></Body>
    </div>
  );
};

export default App;
