// import Confetti from "react-confetti";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import styles from "./Dialog.module.scss";

export default function CustomDialog({ isOpen, handleDialogOpen }) {
  return (
    <Dialog
      open={isOpen}
      className={styles.Dialog}
      onClose={() => handleDialogOpen(false)}
    >
      <div className={styles.InnerDialog}>
        {/* <Confetti
          width={window.matchMedia("(max-width: 500px)").matches ? 235 : 435}
          height={window.matchMedia("(max-width: 500px)").matches ? 335 : 265}
          gravity={0.3}
          run={this.state.animationDone}
          numberOfPieces={100}
        /> */}
        <h2 className={styles.Title}>Готово!</h2>
        <p className={styles.DialogContent}>
          Ваше поздравление успешно сохранено!
          <br />
          С наступающим &#11088;
        </p>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          margin="normal"
          onClick={() => handleDialogOpen(false)}
        >
          Хорошо
        </Button>
      </div>
      {console.log(window.matchMedia("(max-width: 500px)").matches)}
    </Dialog>
  );
}
