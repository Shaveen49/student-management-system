import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Register from "../register/Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPAsswrod] = useState("");
  const [page, setPage] = useState(true);
  // console.log(email);

  const login = async () => {
    try {
      const response = await axios.post(
        "https://student-api.acpt.lk/api/login",
        {
          email: email,
          password: password,
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("token: " + token);
      window.location.href = "/home";
    } catch (e) {
      console.log(e);
    }
  };
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
            borderRadius: "30px",
            width: "70%",
            height: "80vh",
          }}
        >
          <img src="/images/background.png" alt="" />
          <div
            style={{
              backgroundColor: "white",
              // border: "1px red solid",
              width: "640px",
              borderRadius: "0px 20px 20px 00px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="loginRegisterButton" style={{ marginTop: "60px" }}>
              <Button
                onClick={() => setPage(true)}
                variant={page ? "contained" : "outlined"}
                sx={{
                  backgroundColor: page ? "#F2BA1D" : "none",
                  border: "2px solid #F2BA1D",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "20px",
                  width: "100px",
                  height: "30px",
                  fontFamily: "Bebas Neue",
                  borderRadius: "20px 0px 0px 20px",
                  marginRight: "4px",
                  "&:hover": {
                    backgroundColor: "#F2BA1D",
                    color: "black",
                  },
                }}
              >
                Log in
              </Button>
              <Button
                onClick={() => setPage(false)}
                variant={!page ? "contained" : "outlined"}
                sx={{
                  backgroundColor: !page ? "#F2BA1D" : "none",
                  border: "2px solid #F2BA1D",
                  color: "black",
                  fontWeight: "600",
                  fontSize: "20px",
                  width: "100px",
                  height: "30px",
                  fontFamily: "Bebas Neue",
                  borderRadius: "0px 20px 20px 00px",
                  "&:hover": {
                    backgroundColor: "#F2BA1D",
                    color: "black",
                  },
                }}
              >
                register
              </Button>
            </div>
            <div
              className="header"
              style={{
                marginRight: page ? "370px" : "370px",
                marginTop: "40px",
              }}
            >
              <Typography
                sx={{
                  // border: "1px red solid",
                  width: "200px",
                  fontFamily: "Bebas Neue",
                  fontWeight: "800",
                  fontSize: "34px",
                }}
              >
                Welcome {page ? "Back" : ""}
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
            {page ? (
              <>
                <div
                  className="inputSection"
                  style={{
                    marginRight: "200px",
                    marginTop: "40px",
                    marginLeft: "30px",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{ width: "140%" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ marginTop: "10px", width: "140%" }}
                    onChange={(e) => setPAsswrod(e.target.value)}
                  />
                </div>
                <div className="submit">
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
                      borderRadius: "15px",
                      marginTop: "30px",
                      marginLeft: "450px",
                      "&:hover": {
                        backgroundColor: "#F2BA1D",
                        color: "black",
                      },
                    }}
                    onClick={login}
                  >
                    Login
                  </Button>
                </div>
              </>
            ) : (
              <Register />
            )}
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
