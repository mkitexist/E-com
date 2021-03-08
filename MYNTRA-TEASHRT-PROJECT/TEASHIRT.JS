let dataa = [];
let p = [];
let dim = 0;
fetch("./TEASHIRT.JSON")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dataa.push(...data);
    // dataaa.push(...data);
    console.log(dataa);
    // dati();
  });

// ====================================================================
let colorNames = [
  "black",
  "SteelBlue",
  "gray",
  "Orange",
  "LightCoral",
  "IndianRed",
];
let modalNames = [
  "groomed",
  "longhair",
  "glasses",
  "headphone",
  "hat",
  "watch",
];
let BrandNames = [
  "roadster",
  "moda",
  "hrx",
  "london hills",
  "louis philipe",
  "puma",
];
let price = ["200-400 rs", "400-700 rs", "7000-1900 rs"];

function filterObjects(l) {
  let ding = document.getElementById(l);

  p.push(ding.innerText);
  console.log(p);
  if (p.length > 1) {
    location.reload();
    // console.log(p);
  }
  // // let dingg = document.getElementById(6);
  // console.log(ding.innerHTML);
  let k = ding.innerText;

  let lowr = k.toLowerCase();
  console.log(lowr);
  console.log(typeof lowr);

  // let dim = document.getElementById(l);
  setTimeout(() => {
    dataa.forEach((e, i) => {
      // let list = document.getElementById("listPage");
      // let pin = list.removeChild(list.childNodes[dataa.length + 1]);
      let list = document.getElementById(i + 1);
      list.remove();
    });
  }, 1000);
  // ================
  let colornames = dataa.filter((e, i) => {
    // let ding = document.getElementById(l);

    if (Object.values(e).includes(lowr) || e[lowr] == true) {
      console.log(lowr);

      let listPageDiv = document.createElement("div");
      let listPageAtribute = document.createAttribute("class");
      listPageAtribute.value = "col-3 col-sm-3 ";
      listPageDiv.setAttributeNode(listPageAtribute);
      let listPageAtributeid = document.createAttribute("id");
      listPageAtributeid.value = `${e.id}`;
      listPageDiv.setAttributeNode(listPageAtributeid);

      listPageDiv.innerHTML = `
            <a href="TEASHIRT-LANDINGPAGE.HTML" style="text-decoration: none;"onclick="productDisplay(${
              e.id
            })" >
            <div class="card mt-4 mr-5 back" style="width: 13rem ;color:grey;">
              <img src="${
                e.img[i - i]
              }"  class="card-img-top listzoom" alt="...">
              <div class="card-body">
                <h5 class="card-title" >${e.brand}</h5>
                <h6 class="card-title" >${e.price} Rs</h6>
              </div>
            </div>
            </a>
  `;
      listPage.appendChild(listPageDiv);
    }
  });

  // ====================
  // ========================
}
// ======================for mega nav bar======================
// let a = document.querySelector(".prodlist");

// for (let i = 1; i < 12; i++) {
//   hiMan(i);
// }

// function hiMan(i) {
//   console.log(i);

//   let c = document.createElement("div");
//   let p = document.createAttribute("class");
//   p.value = "col-2";
//   c.setAttributeNode(p);
//   c.innerHTML = `
//     <h6>${i}hi man</h6>
//     <p>${i}bi</p>
//      Lorem ipsum amet, consectetur
//      <hr>
//   `;
//   a.appendChild(c);
// }
//================= end of mega nav bar====================================
let listPage = document.querySelector(".listt");
let colorcoll = document.querySelector(".colorcol");
let modall = document.querySelector(".modalapearence");
let brandd = document.querySelector(".brand");
let priceee = document.querySelector(".priceee");
setTimeout(() => {
  console.log(dataa);
  let colornames = dataa.forEach((e, i) => {
    let listPageDiv = document.createElement("div");
    let listPageAtribute = document.createAttribute("class");
    listPageAtribute.value = "col-3 col-sm-3 ";
    listPageDiv.setAttributeNode(listPageAtribute);
    let listPageAtributeid = document.createAttribute("id");
    listPageAtributeid.value = `${e.id}`;
    listPageDiv.setAttributeNode(listPageAtributeid);
    listPageDiv.innerHTML = `
          <a href="TEASHIRT-LANDINGPAGE.HTML"  style="text-decoration: none;" onclick="productDisplay(${
            e.id
          })" >
          <div class="card mt-4 mr-5 back" style="width: 13rem ;color:grey;">
            <img src="${
              e.img[i - i]
            }"  class="card-img-top listzoom " alt="...">
            <div class="card-body">
              <h5 class="card-title" >${e.brand}</h5>
              <h6 class="card-title" >${e.price} Rs</h6>
            </div>
          </div>
          </a>
`;
    listPage.appendChild(listPageDiv);
  });
}, 1000);
colorNames.forEach((e, i) => {
  modalll(e, i);
});

function modalll(e, i) {
  let colordiv = document.createElement("div");
  let coloratribute = document.createAttribute("class");
  coloratribute.value = "form-check";
  //  var t = document.createTextNode(`${e}`);
  //  h.appendChild(t);
  colordiv.setAttributeNode(coloratribute);
  let col = colorNames[i].toUpperCase();

  colordiv.innerHTML = `
    <input class="form-check-input btn-outline-light checkk " style="background-color:${e};"type="checkbox" value="" id="defaultCheck1" onclick="filterObjects(${
    i + 10
  })">
  <label class="form-check-label dinga" id="${i + 10}"for="defaultCheck1" >
    ${col}
  </label>
  `;

  colorcoll.appendChild(colordiv);
  // ======================================================================
  let moddiv = document.createElement("div");
  let modatribute = document.createAttribute("class");
  modatribute.value = "form-check";
  moddiv.setAttributeNode(modatribute);
  let mod = modalNames[i].toUpperCase();
  moddiv.innerHTML = `
     <input class="form-check-input btn-outline-light checkk" style="background-color:gray;"type="checkbox" value="" id="defaultCheck1" onclick="filterObjects(${
       i + 20
     })">
  <label class="form-check-label" id="${i + 20}" for="defaultCheck1">
    ${mod}
  </label>
  `;
  // console.log(y);
  modall.appendChild(moddiv);

  // ========================================================================
  let brandiv = document.createElement("div");
  let brandatribute = document.createAttribute("class");
  brandatribute.value = "form-check";
  brandiv.setAttributeNode(brandatribute);
  let bran = BrandNames[i].toUpperCase();
  brandiv.innerHTML = `
     <input class="form-check-input btn-outline-light checkk" style="background-color:gray;"type="checkbox" value="" id="defaultCheck1"onclick="filterObjects(${
       i + 30
     })">
  <label class="form-check-label" id="${i + 30}" for="defaultCheck1" >
    ${bran}
  </label>
  `;
  // console.log(y);
  brandd.appendChild(brandiv);
  // ========================================================

  if (i < price.length) {
    let pricediv = document.createElement("div");
    let priceatribute = document.createAttribute("class");
    brandatribute.value = "form-check";
    pricediv.setAttributeNode(priceatribute);
    let pricee = price[i].toUpperCase();
    pricediv.innerHTML = `
     <input class="form-check-input  btn-outline-light checkk" style="background-color:gray;"type="checkbox" value="" id="defaultCheck1"onclick="filterObjects(${
       i + 40
     })">
  <label class="form-check-label"id="${i + 40}" for="defaultCheck1">
    ${pricee}
  </label>
  `;
    // console.log(pricediv);
    priceee.appendChild(pricediv);
  }
}

function productDisplay(l) {
  // let p = l;
  localStorage.setItem("id", l);
}
// =======================================
function SearchFunction() {
  setTimeout(() => {
    let ding = document.getElementById("input").value;
    console.log(ding);
  }, 2000);
}
