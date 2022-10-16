import "../assets/css/App.css";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavigationBar from "../components/NavigationBar";

function HomePage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "15.1rem auto",
        width: "-webkit-fill-available",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* <header
        className="homepageHeader"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1679px",
          height: "64px",
          backgroundColor: "#201640",
          width: "1679px",
          float: "right",
          paddingInline: "32px",
        }}
      >
        <IconButton
          aria-label="Right Arrow"
          onClick={console.log("this")}
          style={{ display: "flex", gap: "16px", padding: 0 }}
        >
          <span
            style={{
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,.7)",
              color: "white",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowBackIosNewIcon fontSize="medium" />
          </span>
          <span
            style={{
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,.7)",
              color: "white",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowForwardIosIcon fontSize="medium" />
          </span>
        </IconButton>
      </header> */}
      {/* <Grid container justifyContent="flex-start"> */}
      <NavigationBar />
      <div style={{ color: "black" }}>
        <header
          className="homepageHeader"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1679px",
            height: "64px",
            backgroundColor: "#201640",
            width: "1679px",
            // float: "right",
            paddingInline: "32px",
          }}
        >
          <IconButton
            aria-label="Right Arrow"
            onClick={console.log("this")}
            style={{ display: "flex", gap: "16px", padding: 0 }}
          >
            <span
              style={{
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,.7)",
                color: "white",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowBackIosNewIcon fontSize="medium" />
            </span>
            <span
              style={{
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,.7)",
                color: "white",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowForwardIosIcon fontSize="medium" />
            </span>
          </IconButton>
        </header>
      </div>
      {/* </Grid> */}
    </div>
  );
}

export default HomePage;
