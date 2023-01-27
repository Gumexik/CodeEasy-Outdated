import MainApp from "./pages/MainApp";
import LandingPage from "./pages/LandingPage";

function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <LandingPage />
      break
    case "/learn":
      component = <MainApp />
      break
    default:
      component = <LandingPage />
  }

  return (
    <div className=" font-lato">
      {component}
    </div>
  );
}

export default App;
