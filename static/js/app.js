// Form Steps
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
  numbersIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    if (currentTab < document.querySelectorAll(".step").length)
      document.getElementsByClassName("step")[currentTab].className +=
        " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  if (x[n]) {
    x[n].className += " active";
  }
}

function numbersIndicator(n) {
  var i,
    x = document.getElementsByClassName("btn");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    x[i].nextElementSibling.style.fontWeight = 400;
  }
  x[n].className += " active";
  x[n].nextElementSibling.style.fontWeight = 800;
}

// ############################################################################################

// API's

// const alerBox = document.getElementsByClassName('wrapper')
// const form = document.getElementById('regForm')

// const product = document.getElementById('id_product')
// const user_id = document.getElementById('id_user_id')

// const datetime = document.getElementById('id_product')
// const valyuta = document.getElementById('id_user_id')

// const miqdar = document.getElementById('id_miqdar')
// const price = document.getElementById('id_price')
// const edv_degree = document.getElementById('id_edv_degree')
// const edv_price = document.getElementById('id_edv_price')
// const payment_terms = document.getElementById('id_payment_terms')

// const bank_account = document.getElementById('id_bank_account')
// const discount = document.getElementById('id_discount')
// const delivery_condition = document.getElementById('id_delivery_condition')
// const country = document.getElementById('id_country')
// const city = document.getElementById('id_city')
// const location = document.getElementById('id_location')
// const zipcode = document.getElementById('id_zipcode')
// const delivery_date = document.getElementById('id_delivery_date')
// const delivery_cost = document.getElementById('id_delivery_cost')
// const type_transport = document.getElementById('id_type_transport')

// const qaralama = document.getElementById('id_qaralama')
// const tesdiq = document.getElementById('id_tesdiq')

// const csrf = document.getElementsByClassName('csrfmiddlewaretoken')
// console.log(csrf)

// form.addEventListener('submit',e=>{
//   e.preventDefault()

//   const fd = new FormData()
//   fd.append('csrfmiddlewaretoken',csrf[0].value)
//   fd.append('product',product.value)
//   fd.append('user_id',user_id.value)
//   fd.append('datetime',datetime.value)
//   fd.append('valyuta',valyuta.value)

//   fd.append('miqdar',miqdar.value)
//   fd.append('price',price.value)
//   fd.append('edv_degree',edv_degree.value)
//   fd.append('edv_price',edv_price.value)

//   fd.append('payment_terms',payment_terms.value)
//   fd.append('bank_account',bank_account.value)
//   fd.append('discount',discount.value)
//   fd.append('delivery_condition',delivery_condition.value)

//   fd.append('country',country.value)
//   fd.append('city',city.value)
//   fd.append('location',location.value)
//   fd.append('zipcode',zipcode.value)
//   fd.append('delivery_date',delivery_date.value)
//   fd.append('delivery_cost',delivery_cost.value)
//   fd.append('type_transport',type_transport.value)
//   fd.append('qaralama',qaralama.value)
//   fd.append('tesdiq',tesdiq.value)

//   $.ajax({
//     type: 'POST',
//     enctype:'multipart/form-data',
//     data:fd,
//     success: function(response){
//       console.log(response)
//     },
//     error: function(error){
//       console.log(error)
//     },
//     cache: false,
//     contentType: false,
//     processData: false,

//   })

// })

// console.log(form)

// ################################################################################################

// Create and Detail API
let num = 0;
let nextBtn = document.getElementById("nextBtn");
let dataDiv = document.querySelector(".data ul");
let getVal = (id) => {
  return document.getElementById(id).value;
};

nextBtn.addEventListener("click", (e) => {
  let = data = {
    request_number: getVal("id_request_number"),
    user_id: getVal("id_user_id"),
    datetime: getVal("id_datetime"),
    valyuta: getVal("id_valyuta"),
    product: getVal("id_product"),
    miqdar: getVal("id_miqdar"),
    price: getVal("id_price"),
    edv_degree: getVal("id_edv_degree"),
    edv_price: getVal("id_edv_price"),
    discount: getVal("id_discount"),
    payment_terms: getVal("id_payment_terms"),
    bank_account: getVal("id_bank_account"),
    country: getVal("id_country"),
    city: getVal("id_city"),
    location: getVal("id_location"),
    zipcode: getVal("id_zipcode"),
    delivery_date: getVal("id_delivery_date"),
    delivery_cost: getVal("id_delivery_cost"),
    type_transport: getVal("id_type_transport"),
    delivery_condition: getVal("id_delivery_condition"),
    qaralama: true,
    tesdiq: false,
    csrfmiddlewaretoken: document.getElementsByName("csrfmiddlewaretoken")[0]
      .value,
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "X-CSRFToken",
    document.getElementsByName("csrfmiddlewaretoken")[0].value
  );

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  if (e.target.innerHTML.toLowerCase().includes("submit")) {
    fetch(`http://127.0.0.1:8000/api/create/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        num = result.id;
        fetch(`http://127.0.0.1:8000/api/detail/${result.id}`)
          .then((res) => res.json())
          .then((data) => {
            dataDiv.innerHTML = `
      
                                <li>
                                    <p><span>MƏHSUL <i class="fa-solid fa-arrow-right-long"> </i> ${data.product.product}</span> </p>
                                </li>
                                
                                <li>
                                    <p><span>Sorğu Nömrəsi <i class="fa-solid fa-arrow-right-long"></i> ${data.request_number}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Müştəri İD <i class="fa-solid fa-arrow-right-long"></i>${data.user_id} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Təklifin qüvvədə olduğu müddət <i class="fa-solid fa-arrow-right-long"></i>${data.datetime} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Valyuta <i class="fa-solid fa-arrow-right-long"></i>${data.valyuta} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Miqdar <i class="fa-solid fa-arrow-right-long"></i>${data.miqdar} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Vahidin qiyməti <i class="fa-solid fa-arrow-right-long"></i>${data.price} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>ƏDV drərəcəsi <i class="fa-solid fa-arrow-right-long"></i>${data.edv_degree} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>ƏDV məbləği <i class="fa-solid fa-arrow-right-long"></i> ${data.edv_price}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Ödəniş şərti <i class="fa-solid fa-arrow-right-long"></i>${data.payment_terms} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Bank hesabı <i class="fa-solid fa-arrow-right-long"></i>${data.bank_account} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Endirim <i class="fa-solid fa-arrow-right-long"></i>${data.discount} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Çatdırılma şərti <i class="fa-solid fa-arrow-right-long"></i>${data.delivery_condition} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Ölkə <i class="fa-solid fa-arrow-right-long"></i>${data.country} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Şəhər <i class="fa-solid fa-arrow-right-long"></i> ${data.city}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Ünvan <i class="fa-solid fa-arrow-right-long"></i> ${data.location}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Zip kod <i class="fa-solid fa-arrow-right-long"></i>${data.zipcode}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Çatdırılma tarixi <i class="fa-solid fa-arrow-right-long"></i>${data.delivery_date} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Çatdırılma xərci <i class="fa-solid fa-arrow-right-long"></i>${data.delivery_cost} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Nəqliyyat növü <i class="fa-solid fa-arrow-right-long"></i> ${data.type_transport}</span> </p>
                                </li>
      
      `;
          });
      })
      .catch((error) => console.log("error", error));
  }

  // ################################################################################################

  // Update
  var patchOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  if (e.target.innerHTML.toLowerCase().includes("submit")) {
    fetch(`http://127.0.0.1:8000/api/update/<pk>/`, patchOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        fetch(`http://127.0.0.1:8000/api/detail/${result.id}`)
          .then((res) => res.json())
          .then((data) => {
            dataDiv.innerHTML = `
                                <li>
                                    <p><span>MƏHSUL <i class="fa-solid fa-arrow-right-long"> </i> ${data.product.product}</span> </p>
                                </li>
                                
                                <li>
                                    <p><span>Sorğu Nömrəsi <i class="fa-solid fa-arrow-right-long"></i> ${data.request_number}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Müştəri İD <i class="fa-solid fa-arrow-right-long"></i>${data.user_id} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Təklifin qüvvədə olduğu müddət <i class="fa-solid fa-arrow-right-long"></i>${data.datetime} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Valyuta <i class="fa-solid fa-arrow-right-long"></i>${data.valyuta} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Miqdar <i class="fa-solid fa-arrow-right-long"></i>${data.miqdar} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Vahidin qiyməti <i class="fa-solid fa-arrow-right-long"></i>${data.price} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>ƏDV drərəcəsi <i class="fa-solid fa-arrow-right-long"></i>${data.edv_degree} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>ƏDV məbləği <i class="fa-solid fa-arrow-right-long"></i> ${data.edv_price}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Ödəniş şərti <i class="fa-solid fa-arrow-right-long"></i>${data.payment_terms} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Bank hesabı <i class="fa-solid fa-arrow-right-long"></i>${data.bank_account} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Endirim <i class="fa-solid fa-arrow-right-long"></i>${data.discount} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Çatdırılma şərti <i class="fa-solid fa-arrow-right-long"></i>${data.delivery_condition} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Ölkə <i class="fa-solid fa-arrow-right-long"></i>${data.country} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Şəhər <i class="fa-solid fa-arrow-right-long"></i> ${data.city}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Ünvan <i class="fa-solid fa-arrow-right-long"></i> ${data.location}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Zip kod <i class="fa-solid fa-arrow-right-long"></i>${data.zipcode}</span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Çatdırılma tarixi <i class="fa-solid fa-arrow-right-long"></i>${data.delivery_date} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Çatdırılma xərci <i class="fa-solid fa-arrow-right-long"></i>${data.delivery_cost} </span> </p>
                                </li>
                        
                                <li>
                                    <p><span>Nəqliyyat növü <i class="fa-solid fa-arrow-right-long"></i> ${data.type_transport}</span> </p>
                                </li>
      
      `;
          });
      })
      .catch((error) => console.log("error", error));
  }
});

document.querySelector("#updatebtn").addEventListener("click", () => {
  window.location.href = `/update?id=${num}`;
});
