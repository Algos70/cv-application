import styles from "./App.module.scss";
import CvSheet from "./components/CVSheet/cv-sheet";

function App() {
  return (
    <div className={styles["container"]}>
      <div className={styles["input-field"]}></div>
      <div className={styles["sheet-field"]}>
        <CvSheet />
      </div>
    </div>
  );
}

export default App;
