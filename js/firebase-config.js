// Firebase Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';
import { collection, addDoc, query, where, getDocs, doc, getDoc, updateDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDo61wNsaBf0y0lz4CBGjB3Fc8VUdv8LPw",
  authDomain: "ara-trainer.firebaseapp.com",
  projectId: "ara-trainer",
  storageBucket: "ara-trainer.firebasestorage.app",
  messagingSenderId: "296690822222",
  appId: "1:296690822222:web:189763fd0b7d861026671f",
  measurementId: "G-J37ME7VW5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Generar ID único para consulta
function generateConsultationId() {
  return 'CONS-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Guardar consulta en Firestore
async function saveConsultation(consultationData) {
  try {
    const docRef = await addDoc(collection(db, 'consultations'), {
      ...consultationData,
      createdAt: serverTimestamp(),
      status: 'pending' // pending, in_progress, completed
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving consultation: ", error);
    throw error;
  }
}

// Obtener consulta por ID
async function getConsultation(consultationId) {
  try {
    const docRef = doc(db, 'consultations', consultationId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting consultation: ", error);
    throw error;
  }
}

// Obtener todas las consultas
async function getAllConsultations() {
  try {
    const querySnapshot = await getDocs(collection(db, 'consultations'));
    const consultations = [];
    querySnapshot.forEach((doc) => {
      consultations.push({ id: doc.id, ...doc.data() });
    });
    return consultations;
  } catch (error) {
    console.error("Error getting consultations: ", error);
    throw error;
  }
}

// Actualizar consulta (cuando Ara genera el PDF)
async function updateConsultation(consultationId, updateData) {
  try {
    const docRef = doc(db, 'consultations', consultationId);
    await updateDoc(docRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error("Error updating consultation: ", error);
    throw error;
  }
}

export {
  db,
  generateConsultationId,
  saveConsultation,
  getConsultation,
  getAllConsultations,
  updateConsultation
};
