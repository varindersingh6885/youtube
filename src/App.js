import { Provider } from "react-redux";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { appStore } from "./utils/redux-store/store";
function App() {
  return (
    <Provider store={appStore}>
      <div className="flex flex-col h-[100vh]">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
