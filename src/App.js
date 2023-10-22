import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { appStore } from "./utils/redux-store/store";
import { MainContentContainer } from "./components/MainContentContainer";
import { WatchVideoPage } from "./components/WatchVideoPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <MainContentContainer />,
      },
      {
        path: "watch",
        element: <WatchVideoPage />,
      },
    ],
  },
]);

function AppLayout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <Body />
    </div>
  );
}
function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
