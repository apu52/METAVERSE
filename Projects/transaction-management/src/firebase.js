import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,signOut} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "Your_API-Key",
  authDomain: "Your-Domian",
  databaseURL: "Your_database-url",
  projectId: "your-project-id",
  storageBucket: "your-bucket-id",
  messagingSenderId: "msging-sender-id",
  appId: "app-id",
  measurementId: "measurement-id"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

const database=getDatabase(app)

export {database,signOut};
export const auth = getAuth(app);
export default app;
