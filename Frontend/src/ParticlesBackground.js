import { useEffect } from "react";
import particlesJS from "particles.js";

export default function ParticlesBackground() {
  useEffect(() => {
    window.particlesJS.load("particles-js", "/particles.json", function () {
      console.log("Particles.js config loaded");
    });
  }, []);
  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(15, 10, 10, 1)"   // black background
      }}
    />
  );
}
