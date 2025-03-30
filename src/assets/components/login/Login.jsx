import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Login() {
  return (
    <div>
      <Box
        component="section"
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/backgroundwhole.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="section"
          sx={{
            border: "5px white solid",
            display: "flex",
            borderRadius: "20px",
            width: "70%",
            height: "80vh",
          }}
        >
          <img src="/images/background.png" alt="" />
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="loginRegisterButton" style={{ marginTop: "60px" }}>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #F2BA1D",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "20px",
                  width: "100px",
                  height: "30px",
                  fontFamily: "Bebas Neue",
                  borderRadius: "20px 0px 0px 20px",
                  marginRight: "4px",
                }}
              >
                Log in
              </Button>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #F2BA1D",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "20px",
                  width: "100px",
                  height: "30px",
                  fontFamily: "Bebas Neue",
                  borderRadius: "0px 20px 20px 00px",
                }}
              >
                register
              </Button>
            </div>
            <div
              className="header"
              style={{ marginRight: "400px", marginTop: "40px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Bebas Neue",
                  fontWeight: "800",
                  fontSize: "34px",
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Bebas Neue",
                  fontSize: "19px",
                }}
              >
                acpt institute
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
