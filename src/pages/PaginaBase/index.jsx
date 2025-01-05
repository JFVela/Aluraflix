import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Pie from "../../components/Pie";

function PaginaBase() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renderiza las subpáginas */}
      </main>
      <Pie />
    </>
  );
}

export default PaginaBase;
