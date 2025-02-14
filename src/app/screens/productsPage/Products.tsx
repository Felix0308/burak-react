import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)), 
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

const products = [
  { productName: "Cutlet", imagePath: "img/cutlet.webp" },
  { productName: "Kebab", imagePath: "img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "img/kebab.webp" },
  { productName: "Lavash", imagePath: "img/lavash.webp" },
  { productName: "Lavash", imagePath: "img/lavash.webp" },
  { productName: "Cutlet", imagePath: "img/cutlet.webp" },
  { productName: "Kebab", imagePath: "img/kebab.webp" },
  { productName: "Kebab", imagePath: "img/kebab-fresh.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className="text">Burak Restaurant</Box>
            <Stack className="search">
              <TextField
                id="outlined-basic"
                label="Type here"
                variant="outlined"
              />

              <Button
                variant="contained"
                className="searchButton"
                type="submit"
                endIcon={<SearchIcon />}
              >
                SEARCH
              </Button>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"btn"}
                >
                  Other
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"btn"}
                >
                  Dessert
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"btn"}
                >
                  Drink
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"btn"}
                >
                  Salad
                </Button>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  className={"btn"}
                >
                  Dish
                </Button>
              </div>
            </Stack>
            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className="product-card">
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"products-sale"}>Normal size</div>
                        <Button className={"shop-btn"}>
                          <img
                            src="/icons/shopping-cart.svg"
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{ color: 20 ? "gray" : "white" }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon /> {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box className={"review-box"}>
              <img src={"/img/gurme.webp"} className="box-img" alt="" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/seafood.webp"} className="box-img" alt="" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/sweets.webp"} className="box-img" alt="" />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/doner.webp"} className="box-img" alt="" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className="address-area">
            <Box className="title">Our Address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.6814328836186!2d28.98446661557534!3d41.10559787929211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab56ac7ff7009%3A0x84c6097c80637640!2sCzn%20Burak%20Vadi%20%C4%B0stanbul!5e0!3m2!1sen!2str!4v1634742459931!5m2!1sen!2str"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
