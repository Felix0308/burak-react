import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { DescriptionOutlined } from "@mui/icons-material";

const list = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame" direction="row" spacing={2}>
            {list.length !== 0 ? (
              list.map((ele, index) => (
                <CssVarsProvider key={index}>
                  <Card className="card" sx={{ width: 250 }}>
                    <CardCover>
                      <img src={ele.imagePath} alt={ele.productName} />
                    </CardCover>
                    <CardCover className="card-cover" />
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          level="h2"
                          fontSize="lg"
                          textColor="#fff"
                          mb={1}
                        >
                          {ele.productName}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "neutral.300",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          20
                          <VisibilityIcon sx={{ marginLeft: 1 }} />
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        borderColor: "neutral.outlinedBorder",
                        height: "60px",
                      }}
                    >
                      <Typography
                        startDecorator={<DescriptionOutlined />}
                        textColor="neutral.300"
                      >
                        This is a delicious meal
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              ))
            ) : (
              <Box className="no-data">Popular products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}