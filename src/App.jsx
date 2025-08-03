import { Container } from "./components/Container";
import Header from "./shared/Header";
import "./App.css";
import AppRoutes from "../routes/AppRoutes";

function App() {
  const authentication = localStorage.getItem("user");

  return (
    <>
      {authentication ? (
        <>
          <Header />
          <Container>
            <div className="pt-16">
              <AppRoutes authentication={authentication} />
            </div>
          </Container>
        </>
      ) : (
        <Container>
          <AppRoutes authentication={authentication} />
        </Container>
      )}
    </>
  );
}

export default App;
