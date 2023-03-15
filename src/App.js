import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CadastroPage from "./pages/TelaInicial/CadastroPage";
import HabitosPage from "./pages/Habitos/HabitosPage";
import HistoricoPage from "./pages/Habitos/HistoricoPage";
import HojePage from "./pages/Habitos/HojePage";
import LoginPage from "./pages/TelaInicial/LoginPage";
import { useContext } from "react";
import { UserContext } from "./context/authUser";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> }/>
          <Route path="/cadastro" element={ <CadastroPage /> }/>
          <Route path="/habitos" element={ <HabitosPage /> }/>
          <Route path="/hoje" element={ <HojePage /> }/>
          <Route path="/historico" element={ <HistoricoPage /> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
