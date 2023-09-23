import { useState } from "react";
import styles from "./App.module.scss";
import CvSheet from "./components/CVSheet/cv-sheet";
import PersonalInfoInput from "./components/PersonalInfoInput/personal-info-input";

function App() {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
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
        <CvSheet />
      </div>
    </div>
  );
}

export default App;
