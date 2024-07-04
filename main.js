window.addEventListener("DOMContentLoaded", () => {
  // Navbar

  const nav = document.querySelector(".right_content");
  const menu = document.querySelector(".menu");

  if (menu) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("show_nav");
    });
  }

  // Scroll to Learn More section

  const learnMoreBtn = document.getElementById("scroll_down_btn");
  const targetSection = document.getElementById("learn_more_section");

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", (event) => {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Time update
  
  function updateTime() {
    const currentTimeElement = document.getElementById("current-time");
    const currentDayElement = document.getElementById("current-day");

    const now = new Date();

    const hours = now.getUTCHours().toString().padStart(2, "0");
    const minutes = now.getUTCMinutes().toString().padStart(2, "0");
    const seconds = now.getUTCSeconds().toString().padStart(2, "0");

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getDate()];

    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    currentDayElement.textContent = day;
  }

  setInterval(updateTime, 1000);
  updateTime();

  // Modal

  const modal = document.getElementById("goalModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalList = document.getElementById("modalList");
  const closeBtn = document.getElementsByClassName("close")[0];
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  const goalDetails = [
    {
      title: "Advancing in Frontend",
      details: [
        "Mastering React and its ecosystem, including advanced concepts like hooks, context API, and performance optimization techniques.",
        "Exploring cutting-edge frontend frameworks like Vue.js and Svelte, and understanding their strengths and use cases.",
        "Diving into modern CSS techniques, such as CSS-in-JS, CSS modules, and advanced layout methods like Grid and Flexbox.",
        "Enhancing my skills in building accessible and inclusive web experiences that cater to users with diverse needs and abilities.",
        "Staying up-to-date with the latest developments in web performance optimization, including techniques like code splitting, lazy loading, and server-side rendering.",
      ],
    },
    {
      title: "Expand React Knowledge",
      details: [
        "Deepening understanding of React's core principles and advanced patterns.",
        "Mastering state management solutions like Redux and MobX.",
        "Exploring server-side rendering with Next.js and Gatsby.",
        "Implementing effective testing strategies for React applications.",
        "Optimizing React applications for performance and scalability.",
      ],
    },
    {
      title: "Venturing Backend",
      details: [
        "Learning server-side programming languages like Node.js or Python.",
        "Understanding database management systems (SQL and NoSQL).",
        "Exploring API design and development principles.",
        "Studying server architecture and cloud deployment strategies.",
        "Implementing security best practices in backend development.",
      ],
    },
    {
      title: "Get a Job",
      details: [
        "Building a strong portfolio showcasing diverse projects.",
        "Networking and engaging with the tech community.",
        "Preparing for technical interviews and coding challenges.",
        "Developing soft skills crucial for teamwork and communication.",
        "Staying updated with industry trends and job market demands.",
      ],
    },
  ];

  readMoreButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const goal = goalDetails[index];

      modalTitle.textContent = goal.title;
      modalList.innerHTML = "";
      goal.details.forEach((detail) => {
        const li = document.createElement("li");
        li.textContent = detail;
        modalList.appendChild(li);
      });

      modal.style.display = "block";
    });
  });

  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
