let dataa = [];
let productId;
let wishlistt = [];
let wishlistId;
let totalprice = 0;
fetch("./TEASHIRT.JSON")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dataa.push(...data);

    let paramId = new URL(document.location).searchParams;
    productId = paramId.get("id");
    wishList();
  });
let lists = localStorage.getItem("wishlists");

console.log(JSON.parse(lists));
let wishlistss = JSON.parse(lists);
wishlistt = JSON.parse(lists);
let size = wishlistss.length;
wishlistss[size] = productId;

let wishlistable = document.querySelector(".wishlistBody");
let priceDisplay = document.querySelector(".totalprice");
let k = 0;

function wishList() {
  let m = dataa.forEach((e, i) => {
    let c = wishlistt.forEach((l, n) => {
      if (e.id == l) {
        console.log(e.id, l);

        let moddiv = document.createElement("tr");
        totalprice += e.price;
        priceDisplay.innerHTML = totalprice;

        k += 1;
        moddiv.innerHTML = `
     <th scope="row"class="mt-5">${k}</th>
      <td><img src="${e.img[0]}" class="d-block " style="height:150px;width:130px;"alt="..."></td>
      <td class="mt-5">${e.brand}</td>
      <td  class="mt-5">${e.price}</td>
     
      <td><button class="border-0 mt-4 rounded-pill btn-lg btn-danger" onclick=wishlistDelete(${n}) ><i class="bi bi-trash"></i>delete</button></td>
  
  `;
        wishlistable.appendChild(moddiv);

        // =====================================
      }
    });
  });
}

function wishlistDelete(i) {
  wishlistt.splice(i, 1);
  localStorage.setItem("wishlists", JSON.stringify(wishlistt));
  location.reload();

  console.log(wishlistt);
}
if (wishlistt.length == 0) {
  let wishDiv = document.createElement("div");
  let wishDivAtribute = document.createAttribute("class");
  wishDivAtribute.value = "d-flex ";
  wishDiv.setAttributeNode(wishDivAtribute);
  wishlistable.innerHTML = ` <div style="position:relative;left:200px;text-align:center;height:300px; margin-top:30px;"><h1>you cart is empty add some item'</h1></div>`;
  wishlistable.appendChild(wishDiv);
}
