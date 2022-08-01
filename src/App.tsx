import { memo } from "react";

import GlobalStyles from "./globalStyles";
import Body from "components/body";
import Header from "components/header";
import CountdownContext from "context/CountdownContext";
import ThemeContext from "context/ThemeContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <CountdownContext>
        <ThemeContext>
          <div
            className="App"
            style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
          >
            <Header />
            <Body />
          </div>
        </ThemeContext>
      </CountdownContext>
    </>
  );
}

export default memo(App);
