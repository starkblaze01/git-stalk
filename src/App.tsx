import React from "react";
import "antd/dist/antd.css";
import { create as createJss } from "jss";
import preset from "jss-preset-default";
import { JssProvider } from "react-jss";
import ThemeProvider from "./components/ThemeProvider";
import { Provider } from "react-redux";
import store from "./store/appStore";


const localJss = createJss({
  ...preset()
});
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <JssProvider jss={localJss}>
        <ThemeProvider />
      </JssProvider>
    </Provider>
  );
};

export default App;
