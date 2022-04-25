import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "hooks";
import { Public } from "routes";
import GlobalStyles, { Body } from "common/styles/global";

function Bootstrap() {
  return (
    <AppProvider>
      <Body>
        <BrowserRouter>
          <Public />
        </BrowserRouter>

        <GlobalStyles />
      </Body>
    </AppProvider>
  );
}

export default Bootstrap;