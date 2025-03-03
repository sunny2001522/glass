let blogData = [
  {
    img: "./img/blog-1.png",
    title: "情人特別企劃",
    enTitle: "2020 Valentine's Special",
    date: "2020/02/14",
    description:
      "情人節即將到來，讓愛意升溫，甜蜜滿溢！一年一度的西洋情人節不僅是戀人間互相表達心意的日子，更是用時尚搭配展現默契的最佳時機。為迎接這個浪漫節日，我們特別推出最強「情人節企劃」，用風格單品點綴你們的幸福時刻。本次企劃特別攜手NEEDS CLASSIC聯名設計，推出一系列經典質感鏡框款式，完美結合潮流美學與個性魅力。無論是低調簡約的黑色鏡框，還是展現自我風格的復古框型，都能為你與另一半打造專屬的情侶默契Look！不論你是熱戀中的情侶、享受獨處的自由靈魂，還是攜手相伴多年的老夫老妻，都可以藉由這次企劃，找到屬於你們的默契配件。即日起至2月16日止，邀請你一同探索春夏最新搭配靈感，在愛的季節裡，戴上彼此心意相通的專屬眼鏡，輕鬆演繹屬於你們的甜蜜風格！趕快來店選購，讓愛意悄然流露，為彼此留下獨一無二的幸福紀念！",
    link: "#",
  },
  {
    img: "./img/blog-2.png",
    title: "街頭潮人訪問",
    enTitle: "Street Interview",
    date: "2020/02/02",
    description:
      "本季邀請街頭潮人分享配戴眼鏡的時尚哲學。透過極簡框型與透明材質的運用，展現出俐落質感，讓每個人都能在日常穿搭中散發獨特魅力。",
    link: "#",
  },
  {
    img: "./img/blog-3.png",
    title: "春季新品上市",
    enTitle: "New Selection",
    date: "2020/02/02",
    description:
      "2020春季新品系列以輕量材質與柔和色調為主，特別推薦金屬細框與玳瑁色圓框款式，讓你輕鬆搭配各種日常造型，展現優雅知性風格。",
    link: "#",
  },
  {
    img: "./img/blog-4.png",
    title: "設計師獨享鏡框優惠",
    enTitle: "Sales for Designer",
    date: "2020/01/18",
    description:
      "特別企劃「設計師獨享優惠」來襲！經典貓眼與幾何框型設計，讓設計工作者在創作時兼具時尚與舒適，成為靈感與風格的完美搭檔。",
    link: "#",
  },
  {
    img: "./img/blog-5.png",
    title: "抵抗夏日大作戰",
    enTitle: "Summer Special",
    date: "2019/08/07",
    description:
      "夏日陽光強烈，防曬更要時尚。推薦全新偏光太陽眼鏡系列，具備UV400防護功能，結合輕盈鏡架設計，讓你隨時隨地都能保持清晰視野與時尚風采。",
    link: "#",
  },
];

const bloglist = document.querySelector(".blog");
const searchInput = document.querySelector('[name="search"]');
let blogStr = "";

blogData.forEach(function (item) {
  blogStr += `
          <li class=" mb-10 pb-4">
            <a href="${item.link}" class="md:grid md:grid-cols-2 gap-4">
            <img src="${item.img}" alt="${item.title}" class="w-full md:w-1/3 object-cover rounded-lg pe-6">
            <div class="w-full md:w-2/3">
              <h3 class="text-red-900 text-xl font-bold mb-2">${item.title}</h3>
              <div class="flex justify-between text-sm text-gray-600 mb-2">
                <h4 class="font-medium">${item.enTitle}</h4>
                <p>${item.date}</p>
              </div>
              <div class="hidden md:block">
                <p class="line-clamp-2 text-gray-700 mb-2 ">${item.description}</p>
              </div>
            </div>
            </a>
          </li>
        `;
});
bloglist.innerHTML = blogStr;

searchInput.addEventListener("input", function (e) {
  let keyword = e.target.value.toLowerCase();

  let filteredData = blogData.filter(
    (item) =>
      item.title.toLowerCase().includes(keyword) ||
      item.enTitle.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword)
  );
  console.log(filteredData);
  blogStr = "";
  filteredData.forEach(function (item) {
    blogStr += `
    <li class=" mb-10 pb-4">
      <a href="${item.link}" class="md:grid md:grid-cols-2 gap-4">
      <img src="${item.img}" alt="${item.title}" class="w-full md:w-1/3 object-cover rounded-lg pe-6">
      <div class="w-full md:w-2/3">
        <h3 class="text-red-900 text-xl font-bold mb-2">${item.title}</h3>
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <h4 class="font-medium">${item.enTitle}</h4>
          <p>${item.date}</p>
        </div>
        <div class="hidden md:block">
          <p class="line-clamp-2 text-gray-700 mb-2 ">${item.description}</p>
        </div>
      </div>
      </a>
    </li>
  `;
  });
  bloglist.innerHTML = blogStr;
});

module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
