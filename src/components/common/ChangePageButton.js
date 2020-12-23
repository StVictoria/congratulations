import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import styles from "./ChangePageButton.module.scss";

export default function ChangePageButton({ preText, text, handleChangePage }) {
  return (
    <Grid container justify="center">
      <Grid item>
        <Button
          fullWidth
          color="primary"
          className={styles.Button}
          onClick={handleChangePage}
        >
          <span className={styles.PreText}>{preText}</span>
          <span>{text}</span>
        </Button>
      </Grid>
    </Grid>
  );
}
