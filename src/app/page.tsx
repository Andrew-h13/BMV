"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoveButton from "./components/movingButton";

export default function Home() {
  const hearts = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 40 + 20}px`,
  }));

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
        backgroundColor: "#E4CDD3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hearts.map((heart) => (
        <FavoriteIcon
          key={heart.id}
          sx={{
            position: "absolute",
            top: heart.top,
            left: heart.left,
            fontSize: heart.size,
            color: "#FF5C8D",
            opacity: 0.8,
            animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out`,
          }}
        />
      ))}

      <h2
        style={{
          color: "#FF5C8D",
          fontFamily: "'Roboto', sans-serif",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Would You Be My Valentine?
      </h2>

      <MoveButton />

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            width: 150,
            height: 150,
            border: "5px solid #FF5C8D",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Image
            src="https://media1.tenor.com/m/OroVCOXbuUUAAAAC/sadhamstergirl.gif"
            alt="Bellingham GIF"
            width={150}
            height={150}
          />
        </Box>

        <Box
          sx={{
            width: 150,
            height: 150,
            border: "5px solid #FF5C8D",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Image
            src="https://media1.tenor.com/m/Km11GYbvYY0AAAAd/good-morning.gif"
            alt="Good Morning GIF"
            width={150}
            height={150}
          />
        </Box>
      </Box>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}
