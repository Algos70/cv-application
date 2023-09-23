import styles from "./personal-info-input.module.scss";
interface PersonalInfoInputProps {
  name: string;
  mail: string;
  phone: string;
  address: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setMail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

function PersonalInfoInput({
  setName,
  setMail,
  setPhone,
  setAddress,
  name,
  mail,
  phone,
  address,
}: PersonalInfoInputProps) {
  return (
    <div className={styles["container"]}>
      <h1>Personal Information</h1>
      <div className={styles["name-input"]} id={styles["input"]}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="First Name Last Name"
          value={name}
          type="text"
          name="name"
          id={styles["name"]}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles["email-input"]} id={styles["input"]}>
        <label htmlFor="mail">Email</label>
        <input
          placeholder="example@mail.com"
          value={mail}
          type="text"
          name="mail"
          id={styles["mail"]}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>

      <div className={styles["phone-input"]} id={styles["input"]}>
        <label htmlFor="phone">Phone Number</label>
        <input
          placeholder="+90 546 123 456"
          value={phone}
          type="text"
          name="phone"
          id={styles["phone"]}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className={styles["address-input"]} id={styles["input"]}>
        <label htmlFor="address">Address</label>
        <input
          placeholder="City/District"
          value={address}
          type="text"
          name="address"
          id={styles["address"]}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PersonalInfoInput;
