import { Button } from "@mui/material";
import "./Contact.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, MouseEvent } from "react";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleContact = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(text);
    console.log(email);

    const mailValidation = new RegExp(
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/
    );
    if (!mailValidation.test(email)) return console.log("ERROR");
    

    setEmail("");
    setText("");
  };

  return (
    <div id="contactContainer">
      <div id="contactTitle">
        <h1>Contact</h1>
      </div>
      <Box
        component="form"
        sx={{
          //"& .MuiTextField-root": { m: 1, width: "75ch" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          zIndex: 5,
          "& label.Mui-focused": {
            color: "whitesmoke",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "yellow",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "whitesmoke",
            },
            "&:hover fieldset": {
              borderColor: "whitesmoke",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f03a47",
            },
          },
          "& label": {
            color: "whitesmoke",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          className="contactInput"
          id="outlined-required"
          label="Your email"
          //defaultValue="Hello World"
          sx={{ m: 1 }}
          inputProps={{
            style: {
              color: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            },
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          className="contactInput"
          required
          id="outlined-multiline-flexible"
          label="Text"
          multiline
          rows={8}
          sx={{
            m: 1,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          inputProps={{ style: { color: "white" } }}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          onClick={(e) => handleContact(e)}
          sx={{
            textTransform: "none",
            m: 2,
            backgroundColor: "#f03a47",
            ":hover": { backgroundColor: "#f03a47", opacity: 0.9 },
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          SEND
        </Button>
      </Box>
    </div>
  );
};

export default Contact;
