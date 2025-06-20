  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

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

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const review = document.getElementById("review").value;
    
    try {
      await addDoc(collection(db, "reviews"), {
        name,
        city,
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


  // рендер на сторінці відгуків

let swiperTestimonial;

function renderReviewsLive() {
  const reviewsList = document.getElementById("reviews-list");
  const reviewsRef = collection(db, "reviews");


  onSnapshot(reviewsRef, (snapshot) => {
    reviewsList.innerHTML = "";

    snapshot.forEach((doc) => {
      const data = doc.data();
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("swiper-slide", "testimonials__item");
      const date = data.created?.toDate().toLocaleDateString() || "Без дати";

      reviewItem.innerHTML = `
        <p class="text__article">${data.review || ""}</p>
        <div>
          <p class="text__article">${data.name || "Анонім"}, ${data.city || ""}</p>    
          <p class="text__article testimonial__text">${date}</p>
        </div>
      `;

      reviewsList.appendChild(reviewItem);
    });

    // Оновлюємо або ініціалізуємо Swiper після того як DOM оновився
    if (swiperTestimonial) swiperTestimonial.destroy(true, true);

    swiperTestimonial = new Swiper('.testimonialSwiper', {
      navigation: {
        nextEl: '.testimonial__next',
        prevEl: '.testimonial__prev',
      },
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        744: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        }
      }
    });
  });
}

renderReviewsLive();