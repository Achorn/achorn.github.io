import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";

// // Image = {
// //   alt: String,
// //   imageUrl: String,
// // };

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let subscriber;
    try {
      const q = query(collection(db, collectionName));
      let imagesSnaps = [];
      subscriber = onSnapshot(q, (querySnapshot) => {
        console.log("Document data:", querySnapshot.docs);
        querySnapshot.docs.forEach((doc) => {
          imagesSnaps.push(doc.data());
          console.log("Doc data: ", doc.data());
        });
        console.log("imageSnaps: ", imagesSnaps);
        setDocs(imagesSnaps);
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }

    return () => subscriber();
  }, [collectionName]); ///empty array so use effect only called once

  return {
    docs,
    isLoading,
  };
};

export default useFirestore;
