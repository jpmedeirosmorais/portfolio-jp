import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./hooks";
import { Public } from "./routes";
import GlobalStyles from "./common/styles/global";

function Bootstrap() {
  return (
    <AppProvider>
      <>
        <BrowserRouter>
          <Public />
        </BrowserRouter>

        <GlobalStyles />
      </>
    </AppProvider>
  );
}

export default Bootstrap;