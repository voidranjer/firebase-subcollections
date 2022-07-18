import "./App.css";
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "./firebase";
import ChildrenList from "./ChildrenList";
import AddNew from "./AddNew";

export default function App() {
  const query = collection(db, "oses");
  const [docs, loading, error] = useCollectionData(query);

  return (
    <div>
      <h1>Operating Systems</h1>

      {loading && "Loading..."}

      <ul>
        {docs?.map((doc) => (
          <div key={Math.random()}>
            <li>{doc.name}</li>

            <ChildrenList path={`oses/${doc.name}/children`} />
          </div>
        ))}
        <AddNew path="oses" />
      </ul>
    </div>
  );
}
