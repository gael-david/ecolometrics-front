import Image from "next/image";
import styles from "../styles/Coming.module.css";
import axios from "axios";

export default function Coming({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      {/* <h1>
        Welcome to <em>Ecolometrics!</em>
      </h1>
      <h2 className={styles.description}>Open knowledge hub on ecological transitions</h2>
      <p className={styles.update}>⚡ Coming soon.</p> */}
      <h2>Countries in the database:</h2>
      {data.map((item) => (
        <p>{item.location && item.location}</p>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://api.ecolometrics.org/getData?collection=test");

  return {
    props: { data }, // will be passed to the page component as props
  };
}
