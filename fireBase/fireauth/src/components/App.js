import { useState } from "react";
import MyRouter from "./Router";


function App() {
  console.log(currentUser)
  const [isLogin, setIsLogin] = useState(false);
  return (
    <MyRouter isLogin={isLogin}></MyRouter>
  );
}

export default App;