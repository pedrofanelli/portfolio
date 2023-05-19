import "./Contact.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Contact = () => {
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
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          sx={{m:1, width:"600px"}}
        />
        <TextField
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          sx={{m:1, width:"600px"}}
        />
      </Box>
    </div>
  );
};

export default Contact;
