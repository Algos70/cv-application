import styles from "./cv-header.module.scss";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiPhoneOutline } from "@mdi/js";
import { mdilMapMarker } from "@mdi/light-js";

function CvHeader() {
  return (
    <div className={styles["container"]}>
      <div className={styles["name-field"]}>
        <h1>John Doe</h1>
      </div>
      <div className={styles["contact-field"]}>
        <div className={styles["mail"]}>
          <Icon path={mdiEmailOutline} size={1} />
          <div>mail@gmail.com</div>
        </div>
        <div className={styles["phone"]}>
          <Icon path={mdiPhoneOutline} size={1} />
          <div>546 123 456</div>
        </div>
        <div className={styles["address"]}>
          <Icon path={mdilMapMarker} size={1} />
          <div>Antalya/Konyaltı</div>
        </div>
      </div>
    </div>
  );
}

export default CvHeader;
