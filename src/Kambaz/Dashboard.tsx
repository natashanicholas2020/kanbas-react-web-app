import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algo.jpg" width={200} />
            <div>
              <h5> CS1111 Algo </h5>
              <p className="wd-dashboard-course-title">
                Algorithms  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/genchem1.jpg" width={200} />
            <div>
              <h5> CH2222 General Chemistry 1</h5>
              <p className="wd-dashboard-course-title">
                General Chemistry 1  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/genchem2.jpg" width={200} />
            <div>
              <h5> CH2221 General Chemistry 2 </h5>
              <p className="wd-dashboard-course-title">
                General Chemistry 2  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/orgo1.jpg" width={200} />
            <div>
              <h5> CH2223 Organic Chemistry 1 </h5>
              <p className="wd-dashboard-course-title">
                 Organic Chemistry 1  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/orgo2.jpg" width={200} />
            <div>
              <h5> CH2224 Organic Chemistry 2 </h5>
              <p className="wd-dashboard-course-title">
                Organic Chemistry 2  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/pdp.jpg" width={200} />
            <div>
              <h5> CS1113 Programing Design Paradigm </h5>
              <p className="wd-dashboard-course-title">
              Programing Design Paradigm  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
