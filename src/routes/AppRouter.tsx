import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
