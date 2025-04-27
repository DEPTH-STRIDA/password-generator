import Nav from "./Components/Nav";
import Body from "./Components/Body";

const App: React.FC = () => {


  return (
    <div className="h-screen flex w-screen flex-col">
      <Nav />
      <Body></Body>
    </div>
  );
};

export default App;
