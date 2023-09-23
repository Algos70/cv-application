import styles from "./cv-header.module.scss";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiPhoneOutline } from "@mdi/js";
import { mdilMapMarker } from "@mdi/light-js";

interface CvHeaderProps {
  name: string;
  mail: string;
  phone: string;
  address: string;
}

function CvHeader({ name, mail, phone, address }: CvHeaderProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["name-field"]}>
        <h1>{name}</h1>
      </div>
      <div className={styles["contact-field"]}>
        {mail && (
          <div className={styles["mail"]}>
            <Icon path={mdiEmailOutline} size={1} />
            <div>{mail}</div>
          </div>
        )}
        {phone && (
          <div className={styles["phone"]}>
            <Icon path={mdiPhoneOutline} size={1} />
            <div>{phone}</div>
          </div>
        )}
        {address && (
          <div className={styles["address"]}>
            <Icon path={mdilMapMarker} size={1} />
            <div>{address}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CvHeader;
