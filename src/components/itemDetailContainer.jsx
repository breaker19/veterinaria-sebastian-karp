import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router";
import fetchData from "./firestoreFetch";
import {doc, getDoc} from  '@firebase/firestore'
import db from './firebaseConfig';

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});

  const {itemId} = useParams();
  
  useEffect(() => {
    const docRef = doc(db, "products", itemId);
const fetchData = async () => {
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const data = {
    id: docSnap.id,
    ...docSnap.data()
  };
  
  return data;
 
}
};

    fetchData(itemId)
  .then(data => setDatos (data))
  .catch(err => console.log (err));
  }, []);
      
  return (
      <>

<ItemDetail lista={datos} />

      </>
    );
}


export default ItemDetailContainer;