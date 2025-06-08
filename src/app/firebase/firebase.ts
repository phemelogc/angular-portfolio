import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAd1Q_6xL1p7t71vfPNDTluzmN_ST5QfAs",
  authDomain: "angulartutorial-7328f.firebaseapp.com",
  projectId: "angulartutorial-7328f",
  storageBucket: "angulartutorial-7328f.firebasestorage.app",
  messagingSenderId: "800478587875",
  appId: "1:800478587875:web:755c082191f50db1a04ed6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
