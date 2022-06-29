//active tab
const activeTabEl = document.querySelectorAll("#accessories ul li");

const activeFilterEl = document.querySelectorAll("#about ul li");
// console.log(activeFilterEl);

activeTabEl.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activeTabEl.forEach((tab) => {
      tab.classList.remove("active");
    });
    activeTabEl[index].classList.add("active");
  });
});

activeFilterEl.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activeFilterEl.forEach((tab) => {
      tab.classList.remove("active");
    });
    activeFilterEl[index].classList.add("active");
  });
});

// accessories Filter
const accessories = [
  {
    id: 1,
    img: "./img/fruits_1.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest",
  },
  {
    id: 2,
    img: "./img/fruits_2.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "Seller",
  },
  {
    id: 3,
    img: "./img/fruits_3.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "Seller",
  },
  {
    id: 4,
    img: "./img/fruits_4.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "Seller",
  },
  {
    id: 5,
    img: "./img/fruits_5.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest",
  },
  {
    id: 6,
    img: "./img/fruits_6.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "Seller",
  },
  {
    id: 7,
    img: "./img/fruits_7.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest",
  },
  {
    id: 8,
    img: "./img/fruits_8.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest",
  },
  {
    id: 9,
    img: "./img/fruits_9.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "Seller",
  },
  {
    id: 10,
    img: "./img/fruits_10.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "Seller",
  },
  {
    id: 11,
    img: "./img/fruits_11.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest",
  },
  {
    id: 12,
    img: "./img/fruits_12.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "latest",
  },
];

const accessoriesContainerEl = document.querySelector(".menu_accessories");

const accessoriesFilterEl = document.querySelectorAll(
  ".accessories_btn_filter"
);

window.addEventListener("DOMContentLoaded", () => {
  displayaccessories(accessories);
});

accessoriesFilterEl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let category = e.currentTarget.dataset.id;
    const accessoriesCategory = accessories.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    if (category === "featured") {
      displayaccessories(accessories);
    } else {
      displayaccessories(accessoriesCategory);
    }
    console.log(accessoriesCategory);
  });
});

function displayaccessories(accessoriesItem) {
  let accessoriesMenu = accessoriesItem.map((item) => {
    return `
<div>
    <div class="cursor-pointer fruit_hover">
        <div class="ico flex justify-center items-center">
            <i class="fa-solid fa-heart text-3xl text-white absolute left-16 hover:text-orange-500"></i>
            <i class="fa-solid fa-bag-shopping text-3xl text-white absolute hover:text-orange-500 cart_add"></i>
            <i class="fa-solid fa-eye text-3xl text-white absolute right-16 hover:text-orange-500"></i>
        </div>
      <img src="${item.img}" alt="">
      <h3 class="text-center font-semibold text-xl text-[#282828]">${item.heading}</h3>
      <div class="text-yellow-500 my-2 text-center">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
      </div>
      <h3 class="text-center font-semibold text-xl text-[#282828]">${item.paragraph}</h3>
  </div>
  </div>
  `;
  });
  accessoriesMenu = accessoriesMenu.join("");
  accessoriesContainerEl.innerHTML = accessoriesMenu;
  //   console.log(accessoriesMenu);
}

// countdown
const countdown = () => {
  const countDate = new Date("May 01, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const secEl = 1000;
  const minEl = secEl * 60;
  const hourEl = minEl * 60;
  const dayEl = hourEl * 24;

  const time_day = Math.floor(gap / dayEl);
  const time_hour = Math.floor((gap % dayEl) / hourEl);
  const time_min = Math.floor((gap % hourEl) / minEl);
  const time_sec = Math.floor((gap % minEl) / secEl);

  // console.log(time_sec);

  document.querySelector(".day_L h4").innerHTML = time_day;
  document.querySelector(".hour_L h4").innerHTML = time_hour;
  document.querySelector(".min_L h4").innerHTML = time_min;
  document.querySelector(".sec_L h4").innerHTML = time_sec;
  document.querySelector(".day_R h4").innerHTML = time_day;
  document.querySelector(".hour_R h4").innerHTML = time_hour;
  document.querySelector(".min_R h4").innerHTML = time_min;
  document.querySelector(".sec_R h4").innerHTML = time_sec;
};

setInterval(countdown, 1000);

// about Filter
const about = [
  {
    id: 1,
    img: "./img/fruits_1.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "veg",
  },
  {
    id: 2,
    img: "./img/fruits_2.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "juice",
  },
  {
    id: 3,
    img: "./img/fruits_3.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "meat",
  },
  {
    id: 4,
    img: "./img/fruits_4.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "meat",
  },
  {
    id: 5,
    img: "./img/fruits_5.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "meat",
  },
  {
    id: 6,
    img: "./img/fruits_6.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "meat",
  },
  {
    id: 7,
    img: "./img/fruits_7.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "juice",
  },
  {
    id: 8,
    img: "./img/fruits_8.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "juice",
  },
  {
    id: 9,
    img: "./img/fruits_9.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "juice",
  },
  {
    id: 10,
    img: "./img/fruits_10.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "veg",
  },
  {
    id: 11,
    img: "./img/fruits_11.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "veg",
  },
  {
    id: 12,
    img: "./img/fruits_12.png",
    heading: "Organic Vegetables",
    paragraph: "$8.00-9.00",
    category: "veg",
  },
];

const aboutContainerEl = document.querySelector(".about_container");

const aboutBtnEl = document.querySelectorAll(".about_btn_filter");
// console.log(aboutBtnEl);

window.addEventListener("DOMContentLoaded",()=> {
  displayAbout(about)
});

aboutBtnEl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let category = e.currentTarget.dataset.id;
    const aboutCategory = about.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    if (category === "fruits") {
      displayAbout(about)
    } else {
      displayAbout(aboutCategory);
    }
    // console.log(aboutCategory);
  });
});

function displayAbout(aboutItem) {
  let aboutMenu = aboutItem.map((item) => {
    return `
    <div class="cursor-pointer about_hover">
    <div class="ico flex justify-center items-center">
        <i
            class="fa-solid fa-heart text-3xl text-white absolute left-32 hover:text-orange-500"></i>
        <i
            class="fa-solid fa-bag-shopping text-3xl text-white absolute hover:text-orange-500 cart_add"></i>
        <i
            class="fa-solid fa-eye text-3xl text-white absolute right-32 hover:text-orange-500"></i>
    </div>

    <div class="flex items-center">
        <img class="w-48" src="${item.img}" alt="">

        <div>
            <h4 class="text-base font-semibold text-[#282828]">${item.heading}</h4>

            <div class="text-yellow-500 my-2">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>

            <div class="flex gap-3">
                <h4 class="text-xl font-semibold text-[#282828]">${item.paragraph}</h4>
                <h4 class="line-through text-xl font-semibold text-[#A9A9A9]">$10.00</h4>
            </div>
        </div>
    </div>
</div>
  `;
  });
  aboutMenu = aboutMenu.join("");
  aboutContainerEl.innerHTML = aboutMenu;
  //   console.log(accessoriesMenu);
}

// Slider
var splide = new Splide( '.splide', {
  type    : 'loop',
  perPage : 1,
  autoplay: true,
} );

splide.mount();