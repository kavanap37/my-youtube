import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HooksDemo from "./components/HooksDemo";
import HooksDemo2 from "./components/HooksDemo2";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "demo",
          element: (
            <>
              <HooksDemo />
              <HooksDemo2 />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
    <div className="App">
     <Head/>
     <RouterProvider router={appRouter} />
    
    </div>
    </Provider>
  );
}

export default App;
