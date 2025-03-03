let data = [
  {
    name: "台北中山旗艦店",
    phone: "(02)000-1234",
    hours: "10:00-21:00",
    address: "台北市中山區南京東路25巷2-1號",
    link: "../src/store1.html",
    img: "../img/store-1.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.458524490652!2d121.52653047537707!3d25.052443577804354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a966f6fc092d%3A0x9f740ea896779b57!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuozmrrUyNeiZnw!5e0!3m2!1szh-TW!2stw!4v1740929769446!5m2!1szh-TW!2stw",
  },
  {
    name: "台北綠園店",
    phone: "(02)000-2345",
    hours: "10:00-21:00",
    address: "台北市中正區復興南路132-1號",
    link: "../src/store2.html",
    img: "../img/store-2.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.621175576476!2d121.54168607607721!3d25.046926977808006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdb8aed2c27%3A0xbf973b7edaf299!2zMTA15Y-w5YyX5biC5p2-5bGx5Y2A5b6p6IiI5Y2X6Lev5LiA5q61MTMtMuiZnw!5e0!3m2!1szh-TW!2stw!4v1740964198997!5m2!1szh-TW!2stw",
  },
  {
    name: "台中清水旗艦店",
    phone: "(02)000-1234",
    hours: "10:00-21:00",
    address: "台中市清水區經南一路23號8樓",
    link: "../src/store3.html",
    img: "../img/store-3.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58191.967104828196!2d120.54939397594414!3d24.276802348399773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346915032f26515b%3A0x690ed6108b5cfd3b!2z6IqD5om_5LyB5qWt5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1740964263078!5m2!1szh-TW!2stw",
  },
  {
    name: "高雄中正形象店",
    phone: "(07)000-2345",
    hours: "10:00-21:00",
    address: "高雄市苓雅區中正路38號12樓",
    link: "../src/store4.html",
    img: "../img/store-4.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29461.04997761782!2d120.27763481083983!3d22.630241399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0493e9265777%3A0xb64e2d5cb509eb88!2z57at5aOr5q-U5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1740964306336!5m2!1szh-TW!2stw",
  },
  {
    name: "高雄夢時代店",
    phone: "(07)000-1234",
    hours: "10:00-21:00",
    address: "高雄市前鎮區中華一路63號6樓",
    link: "../src/store5.html",
    img: "../img/store-5.png",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14726.539654571407!2d120.2717697954815!3d22.667396743177996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05aebd7f7325%3A0x59259550294f97ad!2zODA06auY6ZuE5biC6byT5bGx5Y2A5Lit6I-v5LiA6LevNjPomZ82!5e0!3m2!1szh-TW!2stw!4v1740964352846!5m2!1szh-TW!2stw",
  },
];

const eachStore = document.querySelector('[name="eachStore"]');
const storeMap = document.querySelector(".storeMap");

let mapstr = "";

eachStore.addEventListener("change", function (e) {
  let mapstr = "";
  if (e.target.value === "all") {
    data.forEach(function (item) {
      mapstr += mapHTML(item);
      console.log(item.img);
    });
  } else {
    data.forEach(function (item) {
      if (item.name.includes(e.target.value)) {
        mapstr += mapHTML(item);
      }
    });
  }
  storeMap.innerHTML = mapstr;
});
document.addEventListener("DOMContentLoaded", function () {
  eachStore.dispatchEvent(new Event("change"));
});

function mapHTML(item) {
  return `
        <div class="lg:flex gap-6 mx-auto">
          <div class="mb-6 md:flex-col">
            <img src="${item.img}" alt="${item.name}" class="w-1/2"/>
            <div class="py-4 px-6 border-radius-8 mb-8 shadow-sm border border-gray-300">
              <h3 class="border-b text-2xl mt-2 mb-4 pb-1">${item.name}</h3>
              <p class="text-xl pb-2">
                <i class="bi bi-telephone pr-3">&nbsp</i>${item.phone}
              </p>
              <p class="text-xl pb-2"> 
                <i class="bi bi-clock pr-3">&nbsp</i>${item.hours}
              </p>
              <p class="text-xl">
                <i class="bi bi-geo-alt pr-3">&nbsp</i>${item.address}
              </p>
            </div>
          </div>
        
          <iframe src="${item.mapEmbed}" class="w-full mt-6"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    `;
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const selectedStore = params.get("store");
  console.log(selectedStore);

  if (selectedStore) {
    const select = document.querySelector("select[name='eachStore']");
    const options = select.options;

    for (let i = 0; i < options.length; i++) {
      if (options[i].value === selectedStore) {
        options[i].selected = true;
      }
    }
  }
  data.forEach(function (item) {
    if (item.name.includes(selectedStore)) {
      mapstr += mapHTML(item);
    }
  });
  storeMap.innerHTML = mapstr;
};
