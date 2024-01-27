import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAjLvffpoPO7IvVF-4Q8UxmCdniiIp57KM",
    authDomain: "h-clinicas-96599.firebaseapp.com",
    databaseURL: "https://h-clinicas-96599-default-rtdb.firebaseio.com",
    projectId: "h-clinicas-96599",
    storageBucket: "h-clinicas-96599.appspot.com",
    messagingSenderId: "38956439942",
    appId: "1:38956439942:web:6ad4680d4f1fd720887407",
};
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Console.log para indicar que se conectó exitosamente a la base de datos
console.log("Conexión exitosa a la base de datos");

export { database };