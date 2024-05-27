import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// import { useState, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const location = useLocation();
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [showDialog, setShowDialog] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 1000);
  //     AccessTokenExpirationStatus()
  //       .then((data) => {
  //         if (!data.data.valid) {
  //           console.log("hi");
  //           setShowDialog(true);
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   }, [dispatch, navigate, location]);
  console.log("In protected Loader");
  console.log(isAuthenticated);
  if (loading) {
    return <>Loading.....</>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
