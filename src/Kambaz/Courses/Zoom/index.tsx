import { useEffect } from "react";

export default function Zoom() {
  useEffect(() => {
    window.open("https://northeastern.zoom.us/j/99602751820", "_blank");
  }, []);

  return (
    <div className="container text-center py-5">
      <h2>Opening Zoom...</h2>
      <p>
        If you are not redirected,{" "}
        <a
          href="https://northeastern.zoom.us/j/99602751820"
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
