import { Grid, IconButton } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import navigationBar from "../assets/jss/navigationBar.js";
import { styled } from "@mui/material/styles";

// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles(navigationBar);

export default function NavigationBar() {
  // const classes = useStyles();

  // const SpotifyLogo = (
  //   <svg viewBox="0 0 1134 340" class="spotify-logo--text">
  //     <title>Spotify</title>
  //     <path
  //       fill="currentColor"
  //       d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
  //     ></path>
  //   </svg>
  // );
  return (
    // <div
    //   // style={{
    //   //   display: "grid",
    //   //   gridTemplateColumns: "15.1rem auto",
    //   //   width: "-webkit-fill-available",
    //   //   height: "100vh",
    //   // }}
    // >
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        // overflowY: "hidden",
        backgroundColor: "black",
        flexDirection: "column",
        height: "-webkit-fill-available",
        // width: "15.1rem",
        // top: 0,
        // position: "absolute",
      }}
    >
      <Grid
        container
        // justifyContent="flex-start"
        // alignItems="flex-start"
        // flex-direction="column"
        style={{
          // backgroundColor: "black",
          // width: "15.1rem",
          // position: "absolute",
          // top: 0,
          // height: "-webkit-fill-available",
          color: "white",
          // paddingTop: "24px",
          // paddingLeft: "25px",
        }}
      >
        <Grid
          item
          style={{
            marginLeft: "24px",
            marginTop: "24px",
            marginBottom: "10px",
          }}
        >
          <svg
            viewBox="0 0 1134 340"
            class="spotify-logo--text"
            style={{ width: "8.2rem" }}
          >
            <title>Spotify</title>
            <path
              fill="currentColor"
              d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
            ></path>
          </svg>
        </Grid>
        <Grid item>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: "22px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingBottom: "18px",
            }}
          >
            <li className="li-style">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".8rem",
                  backgroundColor: "unset",
                  padding: 0,
                  border: "none",
                }}
              >
                <HomeRoundedIcon
                  fontSize="large"
                  style={{ color: "white" }}
                  className="icon"
                />
                <span
                  className="buttonText"
                  // style={{
                  //   color: "white",
                  //   fontSize: ".9rem",
                  //   fontWeight: "700",
                  //   fontFamily: "Circular",
                  //   "&:hover": { fontSize: "50px" },
                  // }}
                >
                  In??cio
                </span>
              </button>
            </li>
            <li className="li-style">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".8rem",
                  backgroundColor: "unset",
                  padding: 0,
                  border: "none",
                }}
              >
                <SearchRoundedIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
                <span
                  className="buttonText"
                  // style={{
                  //   color: "white",
                  //   fontSize: ".9rem",
                  //   fontWeight: "700",
                  //   fontFamily: "Circular",
                  //   opacity: "0.6",
                  // }}
                >
                  Buscar
                </span>
              </button>
            </li>
            <li
              style={{
                gap: "1.1rem",
              }}
              class="li-style"
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.1rem",
                  backgroundColor: "unset",
                  padding: 0,
                  border: "none",
                }}
              >
                <span style={{ paddingLeft: "0.3rem" }}>
                  <svg
                    role="img"
                    height="24"
                    width="24"
                    class="Svg-ytk21e-0 jAKAlG collection-icon"
                    viewBox="0 0 24 24"
                    style={{ fill: "white" }}
                  >
                    <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
                  </svg>
                </span>
                <span
                  className="buttonText"
                  // style={{
                  //   color: "white",
                  //   fontSize: ".9rem",
                  //   fontWeight: "700",
                  //   fontFamily: "Circular",
                  //   opacity: "0.6",
                  // }}
                >
                  Sua Biblioteca
                </span>
              </button>
            </li>
          </ul>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: "22px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <li className="li-style">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                  backgroundColor: "unset",
                  padding: 0,
                  border: "none",
                }}
              >
                <AddBoxIcon
                  style={{ color: "white", fontSize: "31.5px" }}
                  className="icon"
                />
                <span
                  className="buttonText"
                  // style={{
                  //   color: "white",
                  //   fontSize: ".9rem",
                  //   fontWeight: "700",
                  //   fontFamily: "Circular",
                  //   "&:hover": { fontSize: "50px" },
                  // }}
                >
                  Criar playlist
                </span>
              </button>
            </li>
            <li className="li-style" style={{ paddingLeft: "3px" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.3rem",
                  backgroundColor: "unset",
                  padding: 0,
                  border: "none",
                }}
              >
                <div
                  style={{
                    // background: "rgb(2,0,36)",
                    background: "linear-gradient(135deg,#450af5,#c4efd9)",
                    borderRadius: "2px",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // padding: "2px",
                  }}
                >
                  <FavoriteIcon
                    style={{
                      width: "14px",
                      color: "white",
                    }}
                  />
                </div>
                <span
                  className="buttonText"
                  // style={{
                  //   color: "white",
                  //   fontSize: ".9rem",
                  //   fontWeight: "700",
                  //   fontFamily: "Circular",
                  //   opacity: "0.6",
                  // }}
                >
                  M??sicas Curtidas
                </span>
              </button>
            </li>
            <li
              style={{
                gap: "1.1rem",
              }}
              class="li-style"
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.1rem",
                  backgroundColor: "unset",
                  padding: 0,
                  border: "none",
                }}
              >
                <span style={{ paddingLeft: "0.3rem" }}>
                  <svg
                    role="img"
                    height="24"
                    width="24"
                    class="Svg-ytk21e-0 jAKAlG collection-icon"
                    viewBox="0 0 24 24"
                    style={{ fill: "white" }}
                  >
                    <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
                  </svg>
                </span>
                <span
                  className="buttonText"
                  // style={{
                  //   color: "white",
                  //   fontSize: ".9rem",
                  //   fontWeight: "700",
                  //   fontFamily: "Circular",
                  //   opacity: "0.6",
                  // }}
                >
                  Seus epis??dios
                </span>
              </button>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
    // </div>
  );
}
