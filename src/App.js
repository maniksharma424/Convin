import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, Outlet } from "react-router-dom";
import History from "./Components/History";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);
