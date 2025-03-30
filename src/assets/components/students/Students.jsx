import { Button } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Tables from "../table/Tables";

function Students() {
  const [open, setOpen] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentContact, setStudentContact] = useState("");

  const openStudnet = () => setOpen(true);
  const closeStudent = () => setOpen(false);

  const saveStudent = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const response = await axios.post(
        "https://student-api.acpt.lk/api/student/save",
        {
          student_name: studentName,
          student_age: studentAge,
          student_address: studentAddress,
          student_contact: studentContact,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setOpen(false);
      window.location.href = "/home";
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <div
        style={{
          fontFamily: "Bebas Neue",
          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        My Student
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={openStudnet}
          variant="outlined"
          sx={{
            fontFamily: "Bebas Neue",
            height: "25px",
            borderRadius: "20px",
            backgroundColor: "#F2BA1D",
            color: "black",
            border: "none",
            "&:hover": {
              backgroundColor: "#dfa401",
            },
          }}
        >
          <img
            src="/images/addStudent.png"
            alt=""
            width="24px"
            height="20px"
            style={{ marginLeft: "-10px", marginRight: "10px" }}
          />
          ADD STUDENT
        </Button>
        <Modal
          open={open}
          onClose={closeStudent}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <Box
            sx={{
              width: "400px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Student
            </Typography>
            <TextField
              label="Student Name"
              variant="outlined"
              sx={{ marginTop: "10px", width: "230px" }}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <TextField
              label="Student Age"
              variant="outlined"
              sx={{ marginTop: "10px", width: "230px" }}
              onChange={(e) => setStudentAge(e.target.value)}
            />
            <TextField
              label="Student Address"
              variant="outlined"
              sx={{ marginTop: "10px", width: "230px" }}
              onChange={(e) => setStudentAddress(e.target.value)}
            />
            <TextField
              label="Student Contact"
              variant="outlined"
              sx={{ marginTop: "10px", width: "230px" }}
              onChange={(e) => setStudentContact(e.target.value)}
            />
            <Button
              onClick={saveStudent}
              sx={{
                backgroundColor: "#F2BA1D",
                color: "black",
                border: "none",
                "&:hover": { backgroundColor: "#dfa401" },
                marginTop: "20px",
              }}
            >
              Save
            </Button>
          </Box>
        </Modal>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tables />
      </div>

      <Button
        onClick={logOut}
        sx={{
          fontFamily: "Bebas Neue",
          height: "25px",
          borderRadius: "20px",
          backgroundColor: "#F2BA1D",
          color: "black",
          border: "none",
          "&:hover": {
            backgroundColor: "#dfa401",
          },
          position: "fixed",
          bottom: 20,
          left: 20,
        }}
      >
        Log Out
      </Button>
    </div>
  );
}

export default Students;
