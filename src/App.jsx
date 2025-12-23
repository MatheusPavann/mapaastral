import Home from "./pages/Home";
import UserNotRegisteredError from "./pages/UserNotRegisteredError";

function App() {
  const userIsRegistered = true;
  return userIsRegistered ? <Home /> : <UserNotRegisteredError />;
}

export default App;
