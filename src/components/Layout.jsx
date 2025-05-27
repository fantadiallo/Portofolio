import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="text-white text-decoration-none h4">Fatou.dev</Link>
          <nav>
            <Link to="/" className="text-white me-3 text-decoration-none">Home</Link>
          </nav>
        </div>
      </header>

      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-light text-center py-3 mt-auto">
        <small>© {new Date().getFullYear()} Fanta — All rights reserved.</small>
      </footer>
    </div>
  );
}
