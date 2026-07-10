const db = window.db;

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const avisForm = document.getElementById("avisForm");
const avisList = document.getElementById("avisList");

avisForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const pseudo = document.getElementById("pseudo").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!pseudo || !message) return;

  await addDoc(collection(db, "avis"), {
    pseudo,
    message,
    date: serverTimestamp()
  });

  avisForm.reset();
});

const q = query(collection(db, "avis"), orderBy("date", "desc"));

onSnapshot(q, (snapshot) => {
  avisList.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();

    const div = document.createElement("div");
    div.classList.add("avis-item");

    div.innerHTML = `
      <p><strong>${data.pseudo}</strong></p>
      <p>${data.message}</p>
      <span>${data.date?.toDate().toLocaleString()}</span>
    `;

    avisList.appendChild(div);
  });
});
