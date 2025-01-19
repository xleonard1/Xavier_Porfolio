const categories = document.querySelectorAll(".category-row");
const buttons = document.querySelectorAll(".category-btn");

let activeIndex = 0;
let timer;

const showCategory = (index) => {
  categories.forEach((category, i) => {
    if (i === activeIndex) {
      category.classList.add("animate-slideDown");
      category.classList.remove("animate-slideDown");
      setTimeout(() => category.classList.add("hidden"), 3000);
    } else if (i === index) {
      category.classList.remove("hidden");
      category.classList.remove("animate-slideDown");
      category.classList.add("animate-slideUp");
    }
    category.classList.toggle("hidden", i !== index);
  });

  buttons.forEach((button, i) => {
    button.classList.toggle("bg-accent", i === index);
    button.classList.toggle("text-secondary", i === index);
    button.classList.toggle("bg-secondary", i !== index);
    button.classList.toggle("text-primary", i !== index);
  });

  activeIndex = index;
};

const startTimer = () => {
  timer = setInterval(() => {
    const nextIndex = (activeIndex + 1) % categories.length;
    showCategory(nextIndex);
  }, 3000);

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearInterval(timer);
      showCategory(index);
      startTimer();
    });
  });
};

showCategory(activeIndex);
startTimer();
