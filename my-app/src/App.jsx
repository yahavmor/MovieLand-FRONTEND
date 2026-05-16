import { useSelector } from "react-redux";
import { NavBar } from "./cmp/NavBar.jsx";
import { Footer } from "./cmp/Footer.jsx";
import { RootCmp } from "./RootCmp.jsx";
import { UserMsg } from "./cmp/UserMsg.jsx";

export function App() {
  const msg = useSelector(state => state.user.msg);

  return (
    <div className="general-layout">
      <NavBar />
      <RootCmp />
      <Footer />
      <UserMsg msg={msg.text} condition={msg.condition} />
    </div>
  );
}
