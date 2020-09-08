import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import PublicRoutes from "./router";
import { ThemeProvider } from "styled-components";
import themes from "./settings/themes";
import { themeConfig } from "./settings";
import GlobalStyles from "./styles/globalStyle";

const DashApp = () => (
    <ThemeProvider theme={themes[themeConfig.theme]}>
         {/* <GlobalStyles> */}
            <Provider store={store}>
                <PublicRoutes history={history} />
            </Provider>
         {/* </GlobalStyles> */}
    </ThemeProvider>
);

export default DashApp;