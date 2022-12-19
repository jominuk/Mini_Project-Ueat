import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function IsToken({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    // if (localStorage.getItem("token") === null) {
    swal("토큰이 없습니다");
    // navigate("/login");
    // }
  });
  return <>{children}</>;
}
export default IsToken;
