import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import EditNewsPage from "./pages/EditNewsPage";
import CreateNewsPage from "./pages/CreateNewsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/detail/:id" element={<DetailPage />}></Route>
      <Route path="/edit/:id" element={<EditNewsPage />}></Route>
      <Route path="/create" element={<CreateNewsPage />}></Route>

    </Routes>
  );
}

export default App;
