import { Routes, Route } from "react-router-dom";
import Home from "./router/home/home.component";
import Navigation from "./router/navigation/navigation.conponent";
import SignIn from "./router/sign-in/sign-in.component";
const Shop = () => {
  return <h1>I am the Shop page</h1>;
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
