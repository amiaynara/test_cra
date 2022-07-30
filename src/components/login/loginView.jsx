import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";


// Import material-ui components
import { Box , Stack , Typography, IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import CloseIcon from "@mui/icons-material/Close";


//icons
import SendIcon from "@mui/icons-material/Send";

// Import css
import "./loginView.css";

// // Import Google Login component
// import { GoogleLogin } from 'react-google-login';
// // https://github.com/anthonyjgrove/react-google-login

const label = { inputProps: { "aria-label": "Checkbox demo" } };


// Constants
// const { Control, Group, Text } = Form;
class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      otp: 0,
      showOtp: "none",
      navigate: false,
      alert: false,
      checked : false ,
    };
    this.player = React.createRef();
  }

  render() {
    const { showOtp, navigate, alert, checked} = this.state;
    return (
      <Box paddingTop={10}>
        <div>
          <Player
            ref={this.player} // set the ref to your class instance
            autoplay={false}
            loop={true}
            controls={true}
            src={lottie}
            style={{ height: "300px", width: "300px" }}
          ></Player>
          
        </div>{" "}
        <Grid container justifyContent="center" rowSpacing={1}>
          <Grid item xs={12} lg={12} md={2}>
            <TextField
              label="Enter your Mobile No."
              id="outlined-size-small"
              size="small"
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ color: "#2fb6ad " }}
                  >
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} lg={12} md={2}>
            <TextField
              label="Enter the otp ."
              id="OTP-Field"
              size="small"
              sx={{ display: `${showOtp}` }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ color: "#2fb6ad " }}
                    onClick={this.handleOtp}
                  >
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ display: `${showOtp}` }}
            >
              <Checkbox
                {...label}
                checked={checked}
                onChange={this.handleChecked}
              />
              <Typography variant="caption">{` Remember me`}</Typography>
            </Stack>
          </Grid>
          {navigate ? <Navigate to="/home" replace={true} /> : null}
          {alert ? (
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    this.handleAlert();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              sending otp please wait !
            </Alert>
          ) : null}
        </Grid>
      </Box>
    );
  }

  async _loadWalletData() {
    console.log('Loading data...');
  }
}

export default LoginView;


