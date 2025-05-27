export default function Home() {
  return (
    <section className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary">Hi, I’m Fanta 👋</h1>
        <p className="lead text-secondary">
          I’m a front-end developer who builds clean, responsive, and modern web experiences.
        </p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">JavaScript Frameworks</h5>
              <p className="card-text">React-based venue booking app with filter and search.</p>
              <a href="/projects/project-1" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Semester Project 2</h5>
              <p className="card-text">Pet adoption site with admin dashboard and CRUD features.</p>
              <a href="/projects/project-2" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Exam Project 2</h5>
              <p className="card-text">Old games platform using Noroff API with sorting and detail pages.</p>
              <a href="/projects/project-3" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
