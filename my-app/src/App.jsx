import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "./cmp/NavBar.jsx";
import { Footer } from "./cmp/Footer.jsx";
import { RootCmp } from "./RootCmp.jsx";
import { UserMsg } from "./cmp/UserMsg.jsx";
import { updateUser } from "./store/userSlice.js";
import { useEffect } from "react";
import { authService } from "./services/auth.service.js";

export function App() {
  const msg = useSelector(state => state.user.msg);
  const dispatch = useDispatch();

  useEffect(() => {
    loadLoggedInUser();
  }, []);

  async function loadLoggedInUser() {
    try {
      const loggedUser = await authService.getLoggedInUser();
      if (loggedUser) {
        dispatch(updateUser(loggedUser));
      }
    } catch (err) {
      console.log("No logged user");
    }
  }

  return (
    <div className="general-layout">
      <NavBar />
      <RootCmp />
      <Footer />
      <UserMsg msg={msg.text} condition={msg.condition} />
    </div>
  );
}
