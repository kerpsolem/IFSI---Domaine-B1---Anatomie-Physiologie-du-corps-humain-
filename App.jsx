import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Accueil Homéostasie</h1>;
}

function Page() {
  return <h2>Fonction</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fonction/:id" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

