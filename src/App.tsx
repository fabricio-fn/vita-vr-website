import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Discover from "./components/Discover/Discover";
import Commitment from "./components/Commitment/Commitment";
import BuildingWorld from "./components/BuildingWorld/BuildingWorld";
import Depositions from "./components/Depositions/Depositions";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Discover />
      <Commitment />
      <BuildingWorld />
      <Depositions />
      <GetStarted />
      <Footer />
    </>
  )
}