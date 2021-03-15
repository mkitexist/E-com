let dataa = [];
let dataaa = [];
let p = [];
let dim = 0;
let id;
let clear = 0;
let closeClick = [];
fetch("./TEASHIRT.JSON")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    id = data.length * 2;
    console.log(id);
    console.log(data);
    dataa.push(...data);
    dataaa.push(...data);
    id = data.length + 2;
    console.log(dataa);
    console.log(dataaa);
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

function MultifilterOrsingle(l) {
  let ding = document.getElementById(l);

 
  p.push(ding.innerText);

  let k = ding.innerText;

  let lowr = k.toLowerCase();
 

  dataa.forEach((e, i) => {
    let list = document.getElementById(e.id);
    if (list !== null) {
      list.remove();
    }
  });
  // }

  let furtherFilter = dataa.filter((e, i) => {
    if (Object.values(e).includes(lowr) || e[lowr] == true) {

    
      listPage.appendChild(reuseProductDisplay(e, i));
      return true;
    }
  });
  return furtherFilter;
  // ====================
  // ========================
}
let clerk = 0;
let idisunshift = 0;

function filterObjects(l) {
  if (clerk == 0) {
    dataa = MultifilterOrsingle(l);
    let idis = dataa.map((d, i) => {
      return d.id;
    });
    idis.unshift(p[0]);

    closeClick.push(idis);
    clerk = 1;
  } else {
    let ding = document.getElementById(l);
    let k = ding.innerText;

    let lowr = k.toLowerCase();
    let c = [];
    dataaa.forEach((d, f) => {
      if (Object.values(d).includes(lowr) || d[lowr] == true) {
        if (!dataa.includes(d)) {
          dataa.push(d);
          if (!c.includes(d.id)) {
            c.push(d.id);
          }
          //===============
          dataa.forEach((e, i) => {
            let list = document.getElementById(e.id);
            if (list !== null) {
              list.remove();
            }
            listPage.appendChild(reuseProductDisplay(e, i));
          });
          if (!closeClick.includes(c)) {
            c.unshift(lowr);
            if (!c.length == 0) {
              closeClick.push(c);
            }
          }
        } else {
          closeClick.find((e, l) => {
            if (e.includes(lowr)) {
              e.slice(1).forEach((k) => {
                let list = document.getElementById(k);
                if (list !== null) {
                  list.remove();
                }
              });
            }
          });


          const elem = document.querySelector("#listPage");

          if (elem.childNodes.length == 1) {
            // location.reload();
            clerk = 0;
            closeClick = [];
          }
        }
      }
    });
  }
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
  let colornames = dataa.forEach((e, i) => {
  
    listPage.appendChild(reuseProductDisplay(e, i));
  });
}, 800);


colorNames.forEach((e, i) => {
  modalll(e, i);
});


function modalll(e, i) {
  // =============================for displaying colors===========================

  let col = colorNames[i]; //.toUpperCase();
 
  colorcoll.appendChild(reuseFilterDisplay(e, i, 100, col));
  // ======================================================================
  // ==================================for displaying modals=======================
 
  let mod = modalNames[i]; //.toUpperCase();
 
  modall.appendChild(reuseFilterDisplay(e, i, 200, mod));

  // ========================================================================
  // ===================================for displaying brand=========================

 
  let bran = BrandNames[i]; //.toUpperCase();
 
  brandd.appendChild(reuseFilterDisplay(e, i, 300, bran));
  // ========================================================

}
function productDisplay(l) {
  window.document.location = "TEASHIRT-LANDINGPAGE.HTML" + "?id=" + l;
}
// =======================================
function SearchFunction() {
  let c = setTimeout(() => {
    let ding = document.getElementById("input").value;
    let sing = document.getElementById("input");
   

    dataa = SerchbarfilterOrsingle(ding);
    if (dataa.length < 1) {
      dataa = dataaa;
      location.reload();
    }
  }, 2300);
}
function SerchbarfilterOrsingle(l) {
 
  let lowr = isNaN(l) == true ? l : +l; //this where i assign value based on string or number

  dataa.forEach((e, i) => {
    let list = document.getElementById(e.id);
    list.remove();
  });

  let furtherFilter = dataa.filter((e, i) => {
    if (Object.values(e).includes(lowr) || e[lowr] == true) {

      listPage.appendChild(reuseProductDisplay(e, i));
      return true;
    }
  });
  return furtherFilter;
}

// ============================================================================
//ruse for displaying list of products in the below function
function reuseProductDisplay(e, i) {
  // MY EXPERIMENT ON CODE REUSABILTY GAVE ME A PROPER RESULT QUITE HAPPY
  // ILL be calling this function where ever it is needed and will be appanding it

  let listPageDiv = document.createElement("div");
  let listPageAtribute = document.createAttribute("class");
  listPageAtribute.value = " col-12 col-sm-6 col-md-4  col-lg-3 mainListDiv ";
  listPageDiv.setAttributeNode(listPageAtribute);
  let listPageAtributeid = document.createAttribute("id");
  listPageAtributeid.value = `${e.id}`;
  listPageDiv.setAttributeNode(listPageAtributeid);

  listPageDiv.innerHTML = `
           <a  style="text-decoration: none;"onclick="productDisplay(${e.id})" >
             <div class="card mt-4 mr-5 back" ;color:grey;">
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
  return listPageDiv;
}

// =============================================================================
//ruse for displaying list of filters in the below function

function reuseFilterDisplay(e, i, l, j) {
  let colordiv = document.createElement("div");
  let coloratribute = document.createAttribute("class");
  coloratribute.value = "col-12 form-check";

  colordiv.setAttributeNode(coloratribute);
  // let col = colorNames[i].toUpperCase();
  let color = j == colorNames[i] ? j : "grey";


  colordiv.innerHTML = `
    <input class="form-check-input btn-outline-light checkk " style="background-color:${color};"type="checkbox" value="" id="defaultCheck1" onclick="filterObjects(${
    i + l
  })">
  <label class="form-check-label dinga" id="${i + l}"for="defaultCheck1" >
   <h6> ${j}</h6>
  </label>
  `;

  return colordiv;
}

// ==============================================================================
