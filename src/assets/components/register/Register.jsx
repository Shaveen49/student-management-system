import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [rPassword, setrPassword] = useState("");

  const register = async () => {
    if (password == rPassword) {
      const response = await axios.post(
        "https://student-api.acpt.lk/api/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      const data = await response.data.name;
      alert(data + " have been registered");
      window.location.href = "/";
    } else {
      alert("Passwords doesnt match each other");
    }
  };

  return (
    <div>
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
          label="Name"
          variant="outlined"
          sx={{ width: "140%" }}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ marginTop: "10px", width: "140%" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ marginTop: "10px", width: "140%" }}
          onChange={(e) => setPasswrod(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Re Enter Password"
          variant="outlined"
          sx={{ marginTop: "10px", width: "140%" }}
          onChange={(e) => setrPassword(e.target.value)}
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
            marginLeft: "490px",
            "&:hover": {
              backgroundColor: "#F2BA1D",
              color: "black",
            },
          }}
          onClick={register}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default Register;
