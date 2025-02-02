import { Button, ButtonGroup, IconButton, TextField } from "@mui/material";
import styles from "./HeaderFilters.module.scss";
import classNames from "classnames";
import SearchIcon from "@mui/icons-material/Search";

function HeaderFilters() {
  return (
    <div className={styles.filterButtonsContainer}>
      <ButtonGroup
        className={styles.searchButtonGroup}
        sx={{ borderRadius: "35px" }}
        variant="outlined"
      >
        <Button
          disableRipple
          className={classNames(styles.searchButton)}
          sx={{
            borderRight: "0",
            borderColor: "#c5c7c9;",
            padding: "10px 20px 10px 35px",
          }}
        >
          <div>
            <label className={styles.labelAlign}>Where</label>
            <TextField
              variant="standard"
              placeholder="Search Destinations"
              sx={{
                "& .MuiInput-underline:before": { borderBottom: "none" }, // Removes underline
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "none !important",
                },
                "& .MuiInput-underline:after": { borderBottom: "none" },
              }}
            />
          </div>
        </Button>
        <Button
          disableRipple
          className={classNames(styles.searchButton)}
          sx={{
            borderLeft: "none",
            borderRight: "none",
            borderColor: "#c5c7c9;",
            padding: "10px 20px 10px 35px",
          }}
        >
          <div>
            <label className={styles.labelAlign}>Check In</label>
            <TextField
              variant="standard"
              placeholder="Add Dates"
              sx={{
                "& .MuiInput-underline:before": { borderBottom: "none" }, // Removes underline
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "none !important",
                },
                "& .MuiInput-underline:after": { borderBottom: "none" },
              }}
            />
          </div>
        </Button>
        <Button
          disableRipple
          className={styles.searchButton}
          sx={{
            borderLeft: "none",
            borderRight: "none",
            borderColor: "#c5c7c9;",
            padding: "10px 20px 10px 35px",
          }}
        >
          <div>
            <label className={styles.labelAlign}>Check Out</label>
            <TextField
              variant="standard"
              placeholder="Add Dates"
              sx={{
                "& .MuiInput-underline:before": { borderBottom: "none" }, // Removes underline
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "none !important",
                },
                "& .MuiInput-underline:after": { borderBottom: "none" },
              }}
            />
          </div>
        </Button>
        <Button
          disableRipple
          className={styles.searchButton}
          sx={{
            borderLeft: "none",
            borderColor: "#c5c7c9",
            padding: "10px 20px 10px 35px",
          }}
        >
          <div>
            <label className={styles.labelAlign}>Who</label>
            <TextField
              variant="standard"
              placeholder="Add Guests"
              sx={{
                "& .MuiInput-underline:before": { borderBottom: "none" }, // Removes underline
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "none !important",
                },
                "& .MuiInput-underline:after": { borderBottom: "none" },
              }}
            />
          </div>

          <IconButton
            aria-label="search"
            size="small"
            sx={{ padding: "15px", backgroundColor: "#f55a42", color: "white" }}
          >
            <SearchIcon />
          </IconButton>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default HeaderFilters;
