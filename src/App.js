import HomePage from "./page/homepage/HomePage";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  );
}

export default App;
