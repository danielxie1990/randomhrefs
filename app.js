let btn = document.querySelector("#btn");

let links = [
  "https://www.amazon.com/Stainless-Steel-Dangle-Earrings-Silver/dp/B07GD6WMCS/",
  "https://www.amazon.com/Stainless-Steel-Dangle-Earrings-Silver/dp/B07GD6WMCS/",
  "https://www.amazon.com/Stainless-Steel-Dangle-Earrings-Silver/dp/B07GD6WMCS/",
  "https://www.amazon.com/Stainless-Steel-Dangle-Earrings-Silver/dp/B07GD6WMCS/",
  "https://www.amazon.com/Stainless-Steel-Dangle-Earrings-Silver/dp/B07GD6WMCS/",
  "https://www.amazon.com/Jewelry-Stainless-Extender-Twisted-Makings/dp/B07PM2RYNX/",
  "https://www.amazon.com/Jewelry-Stainless-Extender-Twisted-Makings/dp/B07PM2RYNX/",
  "https://www.amazon.com/Tegg-1-6inch-Stainless-Headpins-Necklace/dp/B07WF6JYSC/",
];


btn.addEventListener("click", () => {
  console.log("clicked");

  let href_index = Math.floor(Math.random() * links.length)
  console.log("店铺链接：",links[href_index])

  btn.href = links[href_index]


});

