import Button from "@material-ui/core/Button";

import styles from "./Button.module.scss";

export default function SubmitButton({ name }) {
  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      color="primary"
      className={styles.Button}
    >
      {name}
    </Button>
  );
}
