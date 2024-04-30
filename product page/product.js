const products = [
  {
    name: "Mitsubishi YUKA floor",
    image: "https://riddarklimat.se/assets/images/kazan-290x300.webp",
    description:
      "Yuka has double exhausts with dampers at the top and bottom, so hot air heats both the room and the floor to reach a comfortable and good temperature. In cooling mode, Yuka will only use the top exhaust.",
    reting:"A++"
    ,
    info1 :"Elegant och stilren design",
    info2:"Extremt tyst 17dB(A)",
    price1:'KAZAN 25 17740 kr',
    price2:"KAZAN 2517740 kr",
  },
  {
    name: "Toshiba Daiseikai 9",
    image: "/assets/products/daiseikai_95_nordic_25_35_www.kruff.se.jpeg",
    description:
      "The air source heat pump Toshiba Daiseikai 9.5 25 is manufactured and adapted to our cold Nordic climate and has the high energy class A+++.",
    reting:"A++"
    ,
    info1 :"Anpassad för nordiska klimat",
    info2:"5års totalgaranti",
    price1:'Daiseikai 9  2521770 kr',
    price2:"Daiseikai 9 3523670 kr",
  },
  {
    name: "Mitsubishi YUKA",
    image: "/assets/products/yuka 2.jpg",
    description:
      "Introducing the Mitsubishi YUKA Floor – a revolutionary heating and cooling solution designed to redefine comfort in your space. Crafted with precision engineering and innovative technology, the YUKA Floor seamlessly integrates into any environment, providing unparalleled performance and efficiency.",
    reting:"A++"
    ,
    info1 :"Multi välj olika delar för varje rum",
    info2:"5års totalgaranti",
    price1:'YUKA 25 21650 kr',
    price2:"YUKA 35 23850 kr",
  },
  {
    name: "Mitsubishi NETSU",
    image: "/assets/products/netsu-2-353x339-removebg-preview.png",
    description:
      "Say goodbye to one-size-fits-all solutions and hello to a new era of comfort with Mitsubishi NETSU Multi. Experience the power of personalized comfortable cool.",
    reting:"A++"
    ,
    info1 :"Multi välj olika delar för varje rum",
    info2:"Multi välj olika delar för varje rum",
    price1:"NETSU 20 13650 kr",
    price2:"NETSU 25 14300 kr",
  },
];

// Function to dynamically generate product cards
function generateProductCards() {
  const productCardsWrapper = document.getElementById("productCardsWrapper");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("app-product-card-2");
    const image = document.createElement("img");
    const imageCol =document.createElement("div")
    imageCol.classList.add('app-image-col')
    image.src = product.image;
    image.alt = product.name;

    const desc = document.createElement("div");
    desc.classList.add("app-desc-col");
    const span = document.createElement("span");
    span.innerText=product.reting
    span.classList.add('badge-app')
    const title = document.createElement("h1");
    title.innerText = product.name;
    title.classList.add("app-card-title");
    const prices1 = document.createElement("span");
    prices1.innerText=product.price1;
    const prices2 = document.createElement("span");
    prices2.innerText=product.price2;  
    const prices3 = document.createElement("span");
    prices3.innerText=product.price1;
    const prices4 = document.createElement("span");
    prices4.innerText=product.price1;

    const description = document.createElement("p");
    description.innerText = product.description;

    const viewMoreBtn = document.createElement("a");
    viewMoreBtn.href = "#";
    viewMoreBtn.classList.add("app-button-2");
    viewMoreBtn.innerText = "view";
    viewMoreBtn.onclick = function () {
      showProductDetails(product.name, product.description, product.image,product.price1,product.price2,product.info1,product.info2);
    };

    desc.appendChild(title);
    desc.appendChild(prices1)
    desc.appendChild(prices2)
    card.appendChild(imageCol)
    imageCol.appendChild(image)
    imageCol.appendChild(span)
    card.appendChild(desc);
    card.appendChild(viewMoreBtn);

    productCardsWrapper.appendChild(card);
  });
}

generateProductCards();
function showProductDetails(title, description, imageSrc, price1, price2, info1, info2) {
  // Populate the modal with the product details
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalPrice1").innerText = price1;
  document.getElementById("modalPrice2").innerText = price2;

  // Create SVG elements
  const checkIcon1 = createCheckIcon();
  const checkIcon2 = createCheckIcon();

  // Append SVG elements to modalInfo1 and modalInfo2 spans
  document.getElementById("modalInfo1").appendChild(checkIcon1);
  document.getElementById("modalInfo1").appendChild(document.createTextNode(info1));
  document.getElementById("modalInfo2").appendChild(checkIcon2);
  document.getElementById("modalInfo2").appendChild(document.createTextNode(info2));

  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("productDetailsModal").classList.add('modal-card');
}

// Function to create the check icon SVG element
function createCheckIcon() {
  const checkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  checkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  checkIcon.setAttribute("width", "16");
  checkIcon.setAttribute("height", "16");
  checkIcon.setAttribute("fill", "currentColor");
  checkIcon.setAttribute("class", "bi bi-check2-circle");
  checkIcon.setAttribute("viewBox", "0 0 16 16");

  // Create path element for the check icon
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z");

  // Append path to the SVG element
  checkIcon.appendChild(path);

  return checkIcon;
}


function closeModal() {
  // Hide the modal
  document.getElementById("productDetailsModal").classList.remove('modal-card');
  document.getElementById("productDetailsModal").classList.add('modal-card-close');
}
