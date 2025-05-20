import { useEffect } from "react";

export default function Piazza() {
  useEffect(() => {
    window.open("https://piazza.com/class/ma9phx9zbl41i2", "_blank");
  }, []);

  return (
    <div className="container text-center py-5">
      <h2>Opening Piazza...</h2>
      <p>
        If you are not redirected,{" "}
        <a
          href="https://piazza.com/class/ma9phx9zbl41i2"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>
        .
      </p>
    </div>
  );
}
