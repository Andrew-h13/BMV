"use client";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Box } from "@mui/material";
import Image from "next/image";

export default function No() {
  const tears = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 40 + 20}px`,
  }));

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
          backgroundColor: "#E4CDD3",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {tears.map((tears) => (
          <WaterDropIcon
            key={tears.id}
            sx={{
              position: "absolute",
              top: tears.top,
              left: tears.left,
              fontSize: tears.size,
              color: "#a0b3e6",
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
        ></h2>

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
    </>
  );
}
