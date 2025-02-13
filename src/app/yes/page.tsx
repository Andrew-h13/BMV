"use client";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/navigation";

export default function Yes() {
  const hearts = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 30 + 15}px`,
  }));

  const router = useRouter();

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
        background: "linear-gradient(to bottom, #FF9A9E, #FAD0C4)",
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
            color: "#FF2D75",
            opacity: Math.random() * 0.5 + 0.5,
            animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out`,
          }}
        />
      ))}

      <h2
        style={{
          color: "#FFF5F7",
          fontFamily: "'Pacifico', cursive",
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          marginBottom: "1rem",
        }}
      >
        Yay! You Said Yes! ❤️
      </h2>

      <p
        style={{
          color: "#FFE5EC",
          fontSize: "1.5rem",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        You just made my day! Let&apos;s celebrate this special moment! 🎉
      </p>

      <Button
        onClick={() => router.push("/")}
        sx={{
          backgroundColor: "#FF2D75",
          color: "#FFF",
          fontSize: "1rem",
          padding: "0.8rem 2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(255, 45, 117, 0.3)",
          "&:hover": {
            backgroundColor: "#D72660",
          },
        }}
      >
        Go Back Home
      </Button>

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            width: 370,
            height: 500,
            border: "5px solid #FF2D75",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Image
            src="https://media1.tenor.com/m/Km11GYbvYY0AAAAd/good-morning.gif"
            alt="its a  GIF"
            width={370}
            height={500}
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

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(200px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
}
