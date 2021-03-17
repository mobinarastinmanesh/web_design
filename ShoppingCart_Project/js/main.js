onLoadCartNumber();



/***************************************************************/
var carts = document.querySelectorAll('.add-cart');//a tags
var products = [];
for(let i=0 ; i < carts.length ; i++ ){
    carts[i].onclick =()=>{
        var parent = carts[i].parentNode;//class = image
        products[i] = {
            name : parent.querySelector('.ProductName').textContent,
            price : parent.querySelector('.ProductPrice').textContent,
            incart : 0 ,
            tag : parent.querySelector('.ProductName').textContent,
        }
        cartNumber(products[i]);
    }
}
/******************************************************************/
function onLoadCartNumber(){
    let productNumber = localStorage.getItem('prodactNumbers');
      productNumber = parseInt(productNumber);
      if(productNumber){
        document.querySelector("#numberOfItem").textContent=productNumber;
      }
}
/******************************************************************/
function cartNumber(obj){
      let productNumber = localStorage.getItem('prodactNumbers');
      let productPrice = localStorage.getItem('productPrice');
      productNumber = parseInt(productNumber);
      productPrice = parseInt(productPrice);
     
      if(productNumber && productPrice){
          localStorage.setItem('prodactNumbers' , productNumber+1);
          localStorage.setItem('productPrice' , productPrice + parseInt(obj.price));
          document.querySelector("#numberOfItem").textContent = productNumber+1 ;
      }else{
        localStorage.setItem('prodactNumbers',1);
        localStorage.setItem('productPrice',  obj.price );
        document.querySelector("#numberOfItem").textContent =1 ;
      }
      setItems(obj);
}
/******************************************************************/
function setItems(obj){
  let cartItems = localStorage.getItem('ProductsInCart');
  cartItems = JSON.parse(cartItems) ;
 if(cartItems !=null){
   if(cartItems[obj.tag]== undefined){//new item
        cartItems = {
          ...cartItems,
          [obj.tag] : obj 
        }
   }
  cartItems[obj.tag].incart += 1 ;
 }else{//first item
    obj.incart = 1 ;
    cartItems = {
       [obj.tag] : obj 
  }
 }
 
  localStorage.setItem('ProductsInCart',  JSON.stringify(cartItems));
  /*------------------------------------------------------------*/
  let cart = localStorage.getItem('ProductsInCart');
  cart = JSON.parse(cart) ;
  console.log(typeof cart);//string
}

/******************************************************************/
const createEle = ( append ,  tagname , fn ) =>{
  const element = document.createElement(tagname);
  if(append){
    append.appendChild(element)
  }
  fn(element);
  // console.log(fn)
}
function displayCart(){
    let cartItems = localStorage.getItem('ProductsInCart');
    let productPrice = localStorage.getItem('productPrice');
    cartItems = JSON.parse(cartItems);// cast to Object
    let productContainer = document.querySelector('.products-container');
    // console.log(cartItems)
    if(cartItems && productContainer){
      Object.values(cartItems).map(item => {
        console.log(item);
        createEle(productContainer , "div" , (productItems)=>{
          productItems.className += "productItems";
          createEle(productItems,"div",(product)=>{
            product.className += "product";
            createEle(product , "i" , (wClose)=>{
                wClose.className = "fa fa-times" ;
                let close = document.querySelectorAll('.fa-times');
                for(var i=0 ; i<close.length ; i++){
                  close[i].onclick =()=>{
                    console.log(":)");
                  }
                }
            })
            createEle(product , "img" , (image)=>{
                image.src += "../img/"+item.name+".jpg";
            })
            createEle(product , "span" , (name)=>{
              name.textContent = item.name
            })
          })
          createEle(productItems,"div",(price)=>{
              price.className += "price";
              price.style.color = "red"
        
              price.textContent = "$" +item.price 
          })
          createEle(productItems,"div",(quantity)=>{
            quantity.className="quantity"
            createEle(quantity , "i" , (left)=>{
              left.className = "fas fa-angle-left";
              let leftarrow = document.querySelectorAll('.fa-angle-left');
              console.log(leftarrow)
                for(var i=0 ; i<leftarrow.length ; i++){
                  console.log('2222222222222')
                  leftarrow[i].onclick = ()=>{
                    console.log("$$$$$$$$$$$$$$$$")
                  }
              }
           
  
            })
            createEle(quantity , "span" , (number)=>{
                number.textContent = item.incart ;
            })
            createEle(quantity , "i" , (right)=>{
              right.className += "fas fa-angle-right";
              // right.OnClick = 'edit()' ;
            })
          })
          createEle(productItems,"div",(total)=>{
            total.className += "total";
            total.textContent = "$" + item.price*item.incart;
          })
        })
      });

/*
        productContainer.innerHTML += `
         <div class="productItems">
              <div class="product">
                <i class="far fa-window-close" ></i>
                <img src="../img/${item.name}.jpg">
                <span>${item.name}</span>
              </div>
              <div class="price">${item.price},00</div>
              <div class="quantity">
                <i class="fas fa-angle-left" id="left" onclick="${edit(item , "left")}"></i>
                <span>${item.incart}</span>
                <i class="fas fa-angle-right" id="right"></i>
              </div>
              <div class="total">$${item.price*item.incart}</div>
          </div>`; 

      });*/
      productContainer.innerHTML +=
        `<div class="basketTotalContainer">
          <h4 class="basketTotalTitle">Total Price: </h4>
          <h4 class="basketTotal">  $${productPrice}</h4>
        </div>
        `
    }
   
  }
  displayCart();
  function edit(){
    console.log("**************************")
    // if(aroow == "left"){
    //   console.log(item);
    //   item.incart = item.incart -1 ; 
    //   console.log(item);
    //   setItems(item);
    // }
  }

 