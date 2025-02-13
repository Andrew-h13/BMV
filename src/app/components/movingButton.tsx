"use client";

import { Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const yesButtonColor = "#FF5C8D";
const noButtonColor = "#FF9E00";

const heartPolygon = `polygon(
    50% 15%,
    61% 0%,
    80% 0%,
    100% 25%,
    100% 45%,
    50% 100%,
    0% 45%,
    0% 25%,
    20% 0%,
    39% 0%
  )`;

export default function BothButtons() {
  const [yesButtonPosition, setYesButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonSize, setNoButtonSize] = useState(100);
  const yesButtonRef = useRef<HTMLButtonElement | null>(null);
  const noButtonRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  const handleRejection = () => router.push("/no");

  useEffect(() => {
    function updatePositions() {
      if (yesButtonRef.current && noButtonRef.current) {
        const newYesX =
          Math.random() *
          (window.innerWidth - yesButtonRef.current.offsetWidth - 40);
        const newYesY =
          Math.random() *
          (window.innerHeight - yesButtonRef.current.offsetHeight - 40);

        const newNoX =
          Math.random() *
          (window.innerWidth - noButtonRef.current.offsetWidth - 40);
        const newNoY =
          Math.random() *
          (window.innerHeight - noButtonRef.current.offsetHeight - 40);

        setYesButtonPosition({ x: newYesX, y: newYesY });
        setNoButtonPosition({ x: newNoX, y: newNoY });
        setNoButtonSize((prevSize) => prevSize + 10);
      }
    }
    updatePositions();
    const intervalId = setInterval(updatePositions, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Button
        ref={yesButtonRef}
        sx={{
          position: "absolute",
          left: `${yesButtonPosition.x}px`,
          top: `${yesButtonPosition.y}px`,
          backgroundColor: yesButtonColor,
          color: "#fff",
          width: "100px",
          height: "100px",
          clipPath: heartPolygon,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        Yes! :D
      </Button>

      <Button
        ref={noButtonRef}
        onClick={handleRejection}
        sx={{
          position: "absolute",
          left: `${noButtonPosition.x}px`,
          top: `${noButtonPosition.y}px`,
          backgroundColor: noButtonColor,
          color: "#fff",
          width: `${noButtonSize}px`,
          height: `${noButtonSize}px`,
          clipPath: heartPolygon,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, width 0.3s ease, height 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        No! D:
      </Button>
    </>
  );
}
