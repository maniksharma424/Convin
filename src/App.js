import "./index.css"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./store";
function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
