import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NonLoggedUser() {
  const user = useSelector((users) => users.LoginSLice);
  return user ? <Navigate to="/" /> : <Outlet />;
}
