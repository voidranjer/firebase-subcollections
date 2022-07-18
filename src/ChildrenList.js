import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AddNew from "./AddNew";
import { db } from "./firebase";

export default function ChildrenList({ path }) {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);

  return (
    <ul>
      {loading && "Loading..."}

      {docs?.map((doc) => (
        <li key={Math.random()}>{doc.name}</li>
      ))}
      <AddNew path={path} />
    </ul>
  );
}
