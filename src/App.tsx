import { useState } from "react";
import styles from "./App.module.scss";
import CvSheet from "./components/CVSheet/cv-sheet";
import PersonalInfoInput from "./components/PersonalInfoInput/personal-info-input";

function App() {
  const [name, setName] = useState<string>("Abdurrahman Kürşat Özkan");
  const [mail, setMail] = useState<string>("kursatozkan.job@gmail.com");
  const [phone, setPhone] = useState<string>("+90 546 805 78 80");
  const [address, setAddress] = useState<string>("Antalya/Konyaltı");
  return (
    <div className={styles["container"]}>
      <div className={styles["input-field"]}>
        <PersonalInfoInput
          setAddress={setAddress}
          setPhone={setPhone}
          setMail={setMail}
          setName={setName}
          name={name}
          mail={mail}
          phone={phone}
          address={address}
        />
      </div>
      <div className={styles["sheet-field"]}>
        <CvSheet name={name} mail={mail} address={address} phone={phone} />
      </div>
    </div>
  );
}

export default App;
