import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearMsg } from "../store/userSlice";

export function UserMsg({ msg, condition }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!msg) return;
    const timer = setTimeout(() => {
      dispatch(clearMsg());
    }, 3000);
    return () => clearTimeout(timer);
  }, [msg]);

  if (!msg) return null;

  const state = condition ? "good" : "bad";

  return (
    <div className={`user-msg ${state}`}>
      <p>{msg}</p>
    </div>
  );
}
