// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCjL5uHi3KzKOhbJ-VVm6h8-2p3VsecuGk",
//   authDomain: "zhuraki-reodeling.firebaseapp.com",
//   projectId: "zhuraki-reodeling",
//   storageBucket: "zhuraki-reodeling.firebasestorage.app",
//   messagingSenderId: "919166882504",
//   appId: "1:919166882504:web:a9e6ee2537cecf65624bfd",
//   measurementId: "G-LSG0NR60SR"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);


//збереження відгуку до Firebase

//  <script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCjL5uHi3KzKOhbJ-VVm6h8-2p3VsecuGk",
    authDomain: "zhuraki-reodeling.firebaseapp.com",
    projectId: "zhuraki-reodeling",
    storageBucket: "zhuraki-reodeling.firebasestorage.app",
    messagingSenderId: "919166882504",
    appId: "1:919166882504:web:a9e6ee2537cecf65624bfd",
    measurementId: "G-LSG0NR60SR"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const form = document.getElementById("reviewForm");
  const statusDiv = document.getElementById("status");
  // console.log(form)
  // console.log(statusDiv)

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
    // console.log(name)
    // console.log(review)

    try {
      await addDoc(collection(db, "reviews"), {
        name,
        review,
        created: new Date()
      });

      form.reset();
      statusDiv.textContent = "Thank's for yor review !";
    } catch (error) {
      console.error("Error: ", error);
      statusDiv.textContent = "Something went wrong...";
    }
  });
// </script> }