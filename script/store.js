let data = [
  {
    name: "台北中山旗艦店",
    phone: "(02)000-1234",
    hours: "10:00-21:00",
    address: "台北市中山區南京東路25巷2-1號",
    link: "./store1.html?store=台北中山旗艦店",
    img: "./img/store-1.png",
  },
  {
    name: "台北綠園店",
    phone: "(02)000-2345",
    hours: "10:00-21:00",
    address: "台北市中正區復興南路132-1號",
    link: "./store1.html?store=台北綠園店",
    img: "./img/store-2.png",
  },
  {
    name: "台中清水旗艦店",
    phone: "(02)000-1234",
    hours: "10:00-21:00",
    address: "台中市清水區經南一路23號8樓",
    link: "./store1.html?store=台中清水旗艦店",
    img: "./img/store-3.png",
  },
  {
    name: "高雄中正形象店",
    phone: "(07)000-2345",
    hours: "10:00-21:00",
    address: "高雄市苓雅區中正路38號12樓",
    link: ".//store1.html?store=高雄中正形象店",
    img: "./img/store-4.png",
  },
  {
    name: "高雄夢時代店",
    phone: "(07)000-1234",
    hours: "10:00-21:00",
    address: "高雄市前鎮區中華一路63號6樓",
    link: "./store1.html?store=高雄夢時代店",
    img: "./img/store-5.png",
  },
];

const region = document.querySelector('[name="region"]');
const store = document.querySelector(".store");

let str = "";

function init() {
  data.forEach(function (item) {
    str += createStoreHTML(item);
  });
  store.innerHTML = str;
}

init();

region.addEventListener("change", function (e) {
  let str = "";

  if (e.target.value === "all") {
    data.forEach(function (item) {
      str += createStoreHTML(item);
    });
  } else {
    data.forEach(function (item) {
      if (item.name.startsWith(e.target.value)) {
        str += createStoreHTML(item);
      }
    });
  }

  store.innerHTML = str;
});

function createStoreHTML(item) {
  return `
        <li class="border-radius-8 bg-white mb-8 shadow-sm">
          <img src="${item.img}" alt="${item.name}" />
          <div class="py-4 px-6 ">
            <h3 class="border-b text-2xl mt-2 mb-4 pb-1">${item.name}</h3>
            <p class="text-xl pb-2">
              <i class="bi bi-telephone pe-3">&nbsp</i>${item.phone}
            </p>
            <p class="text-xl pb-2">
              <i class="bi bi-clock pe-3">&nbsp</i>${item.hours}
            </p>
            <p class="text-xl">
              <i class="bi bi-geo-alt pe-3">&nbsp</i>${item.address}
            </p>
          </div>
          <a class="bg-black text-center text-white py-4 block hover:bg-red-700" href="${item.link}">詳細資訊</a>
        </li>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const selectedStore = params.get("store");

  if (selectedStore) {
    const select = document.querySelector("select[name='eachStore']");
    if (select) {
      const options = select.options;

      for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedStore) {
          options[i].selected = true;
        }
      }
    }
  }
});
