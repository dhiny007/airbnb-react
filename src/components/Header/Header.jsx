import { Button } from "@mui/material";
import airBnbLogo from "../../assets/airbnb-logo.svg";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./Header.module.scss"; // Import CSS Module
import HeaderFilters from "./HeaderFilters/HeaderFilters";

function Header() {
  return (
    <>
    <div>
      <div className={styles.headerContentAlign}>
        <div>
          <img src={airBnbLogo} className={styles.logoAlign} />
        </div>
        <div>
          <div className={styles.navButtons}>
            <Button
              sx={{
                textTransform: "none",
                color: "black",
                fontWeight: 550,
                fontSize: "1rem",
                marginTop: "0.4rem",
              }}
              variant="text"
            >
              Stays
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "black",
                fontWeight: 550,
                fontSize: "1rem",
                marginTop: "0.4rem",
              }}
              variant="text"
            >
              Experiences
            </Button>
          </div>
        </div>
        <div>
          <div className={styles.rightSection}>
            <p className={styles.rightContentText}>Airbnb your home</p>
            <LanguageIcon />
            <Button
              className={styles.outlinedButton}
              sx = {{borderRadius: "35px", border: "1px solid #c5c7c9", color: "#525151", padding: "0.5rem 1rem"}}
              variant="outlined"
              startIcon={<MenuIcon />}
              endIcon={<AccountCircleIcon sx={{fontSize: "35px !important"}}/>}
            ></Button>
          </div>
        </div>
      </div>
    </div>
    <HeaderFilters />
    <hr className={styles.bottomLine}></hr>
    </>
  );
}

export default Header;
