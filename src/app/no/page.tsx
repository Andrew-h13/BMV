"use client";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function No() {
  const tears = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 30 + 15}px`,
  }));

  const router = useRouter();
  const wrongAnswer = () => router.push("/");

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "1rem",
          backgroundColor: "#1a1a1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {tears.map((tear) => (
          <WaterDropIcon
            key={tear.id}
            sx={{
              position: "absolute",
              top: tear.top,
              left: tear.left,
              fontSize: tear.size,
              color: "#5c7080",
              opacity: Math.random() * 0.5 + 0.3,
              animation: `drizzle ${
                Math.random() * 3 + 2
              }s infinite ease-in-out`,
            }}
          />
        ))}

        <h2
          style={{
            color: "#B0B3B8",
            fontFamily: "'Merriweather', serif",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1.5rem",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Wrong Answer...
        </h2>

        <Button
          onClick={wrongAnswer}
          sx={{
            backgroundColor: "#3a3f47",
            color: "#B0B3B8",
            fontSize: "1rem",
            padding: "0.8rem 2rem",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#4a4f57",
            },
          }}
        >
          Try Again...
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
              border: "5px solid #3a3f47",
              borderRadius: "15px",
              overflow: "hidden",
              filter: "grayscale(100%)",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Image
              src="https://media1.tenor.com/m/iMdhAtmimygAAAAd/para-com-isso-paraaa.gif"
              alt="Sad cat"
              width={370}
              height={500}
            />
          </Box>
        </Box>

        <style jsx>{`
          @keyframes drizzle {
            0% {
              transform: translateY(0);
              opacity: 0.5;
            }
            50% {
              transform: translateY(10px);
              opacity: 0.2;
            }
            100% {
              transform: translateY(0);
              opacity: 0.5;
            }
          }
        `}</style>
      </Box>
    </>
  );
}
