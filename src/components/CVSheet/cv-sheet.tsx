import CvHeader from "../CvHeader/cv-header";
import styles from "./cv-sheet.module.scss";

interface CvSheetProps {
  name: string;
  mail: string;
  phone: string;
  address: string;
}

function CvSheet({ name, mail, phone, address }: CvSheetProps) {
  return (
    <div className={styles["container"]}>
      <CvHeader name={name} address={address} mail={mail} phone={phone} />
    </div>
  );
}

export default CvSheet;
