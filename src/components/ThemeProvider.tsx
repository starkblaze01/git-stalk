import * as React from "react";
import { ThemeProvider as JssThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "../components/RouterOutlet";
import Header from './Header';
// refer to the link below
// https://github.com/styled-components/styled-components-experimentation/blob/master/component-libraries/shared-component-libraries.md
class ThemeProvider extends React.PureComponent<any, any> {
  render() {
    const theme = {
      componentLib: {
        // 👆😢 Users have to be aware of the namespacing which
        // makes unique names hard
        main: "black"
      }
    };
    return (
      <JssThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <RouterOutlet />
        </BrowserRouter>
      </JssThemeProvider>
    );
  }
}

export default ThemeProvider;
