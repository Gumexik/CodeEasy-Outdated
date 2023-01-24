import MainApp from "./components/app/MainApp";
import LandingPage from "./components/LandingPage";

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
