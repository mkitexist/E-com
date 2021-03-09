let productId;
let dataa = [];
let wishlistId;
let wishlisttt = [];
fetch("./TEASHIRT.JSON")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dataa.push(...data);
    // dataaa.push(...data);

    // landing(data);
    let paramId = new URL(document.location).searchParams;
    productId = paramId.get("id");
    product();
  });
let landPage = document.querySelector(".landd");
let branddetail = document.querySelector(".branddetails");
let pricedeatil = document.querySelector(".prisedetails");
let sizedeatil = document.querySelector(".size");
let modall = document.querySelector(".modall");
let reviews = document.querySelector(".reviews");
let p = Date();
console.log(p);
function product() {
  console.log(productId);
  console.log(typeof productId);
  console.log(dataa);
  let colornames = dataa.forEach((e, i) => {
    if (e.id == productId) {
      console.log(e.brand, e.price);
      branddetail.innerHTML = e.brand;
      pricedeatil.innerHTML = e.price;
      wishlistId = e.id;
      // modall.innerHTML = e.brand;
      e.coments.forEach((k, n) => {
        let rewievDiv = document.createElement("div");
        let reviewAtribute = document.createAttribute("class");
        reviewAtribute.value = "col ";
        rewievDiv.innerHTML = `
        <hr>
        <div class="col"> 
        <div class="row row-cols-2">
    <div class="col" style="color:gray"><h4>reviwer Name :</h4>${k.reviewdBy} </div>
    <div class="col" style="color:gray"><h5>message :</h5> ${k.review}</div>
         </div>
        </div>
        <hr>
`;
        reviews.appendChild(rewievDiv);
      });
      e.img.forEach((l, i) => {
        let landPageDiv = document.createElement("div");
        let landPageAtribute = document.createAttribute("class");
        landPageAtribute.value = "col-8 col-sm-5 ";
        landPageDiv.setAttributeNode(landPageAtribute);
        let modelDiv = document.createElement("div");
        // let modelAtribute = document.createAttribute("class");
        // modelAtribute.value = "col-12 col-sm-5 ";
        // modelDiv.setAttributeNode(modelAtribute);

        landPageDiv.innerHTML = `
        <div class="card mt-2 landimg" style="width: 17rem;">
            <img src="${l}" class="card-img-top" alt="...">

          </div>
`;
        landPage.appendChild(landPageDiv);

        if (i == 0) {
          landPage.appendChild(landPageDiv);
          modelDiv.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 border-bottom border-3 border-danger">
    <div class="col-md-4">
      <img src="${l}" style="height:260px;width:165px;"alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h1> BRAND</h1>
        <h2 class="card-title">${e.brand}</h2>
         <h5>${e.price}  Rs</h5>
         <h6>${p}</h6>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
   `;
          modall.appendChild(modelDiv);
        }
        size(e, i);
      });
    }
  });
}

function size(e, i) {
  console.log(e.size[i]);
  if (i < e.size.length) {
    let sizeDiv = document.createElement("div");
    let sizeAtribute = document.createAttribute("class");
    sizeAtribute.value = "d-flex flex-row";
    sizeDiv.setAttributeNode(sizeAtribute);

    sizeDiv.innerHTML = `
          <div class=" fw-normal fs-4 pt-2 rounded-circle " style="height:65px;width:65px;text-align: center; color:grey;border:2px solid grey;margin-left:20px">${e.size[i]}</div>
           </div>
 `;
    sizedeatil.appendChild(sizeDiv);
  }
}
function wishListDisplay() {
  // console.log(l);
  if (localStorage.getItem("wishlists") == null) {
    let wishlist = [];
    let size = wishlist.length;
    wishlist[size] = +productId;
    localStorage.setItem("wishlists", JSON.stringify(wishlist));
    console.log(wishlist);
  } else {
    let lists = localStorage.getItem("wishlists");
    console.log(JSON.parse(lists));
    let wishlistss = JSON.parse(lists);
    wishlisttt = JSON.parse(lists);
    let size = wishlistss.length;
    wishlistss[size] = +productId;
    if (!wishlisttt.includes(+productId)) {
      localStorage.setItem("wishlists", JSON.stringify(wishlistss));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Item already in the wishlist!",
        footer: "<h6>try other SHIRTS<h6>",
      });
      setTimeout(() => {
        window.document.location =
          "TEASHIRT-WISHLIST.HTML" + "?id=" + wishlistId;
      }, 2700);
    }
    // let listss = localStorage.getItem("wishlists");
    // console.log(listss);
  }
  setTimeout(() => {
    window.document.location = "TEASHIRT-WISHLIST.HTML" + "?id=" + wishlistId;
  }, 1000);
}

