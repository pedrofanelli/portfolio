import "./Contact.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Contact = () => {
  return (
    <div id="contactContainer">
      <div id="contactTitle">
        <h1>Contact</h1>
      </div>
      <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        </div>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
