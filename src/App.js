import { Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
function App() {
  return (
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='About' element={<About/>}></Route>
</Routes>

  );
}

export default App;
