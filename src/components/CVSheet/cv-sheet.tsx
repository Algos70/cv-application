import CvHeader from "../cv-header/cv-header";
import styles from "./cv-sheet.module.scss";


function CvSheet() {
    return ( 
        <div className={styles["container"]}>
            <CvHeader />
        </div>
     );
}

export default CvSheet;
