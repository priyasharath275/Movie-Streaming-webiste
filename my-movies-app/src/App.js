import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Components/utility/store";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WatchPage from './Components/WatchPage';
import MainContainer from './Components/MainContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>

  );
}

const AppRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    { path: "/", element: <MainContainer /> },
    { path: "watch", element: <WatchPage /> },
  ],
}]);

export default App;
