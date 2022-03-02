// const btnWishlist = document.querySelectorAll('#product-smart-store .product-quality--like')
// btnWishlist.forEach(function(btn) {
//     btn.addEventListener("click", function(event) {
//         var btnItem = event.target
//         var product = btnItem.parentElement
//         var product2 = product.parentElement
//         var product3 = product2.parentElement

//         product.classList.add('like')

//         var productImg = product3.querySelector('img').src
//         var productName = product2.querySelector('p').innerText
//         var productPrice = product2.querySelector('span').innerText

//         addWish(productImg, productName, productPrice,product)
//         // wishDelete (product, productName)
//     })
// })

// function addWish(productImg, productName, productPrice, product) {
//     var addTr = document.createElement('tr')
//     var wishItem = document.querySelectorAll('.wish-list tbody tr')
//     for (var i = 0; i < wishItem.length; i++) {
//         var wishProductName = document.querySelectorAll('.wish-list .wish-title')
//         if (wishProductName[i].innerHTML == productName ) {
//             product.classList.remove('like')
//         }
//     }

//     var trContent = '<td><div class="cart-product-content"><img src="'+ productImg +'" width="100px" height="100px" alt=""><div class="product-content"><a href=""><h4 class="wish-title">' + productName + '</h4></a><span>Estimated delivery within 5 working days</span><div class="product-content-btn"><button class="btn-remove" type="button">Remove</button></div></div></div></td><td><div class="cart-avai-content"><span style="opacity: 0.7;">20 in stock</span></div></td><td class="unit-price"><p>' + productPrice + '</p></td><td class="unit-discount"><p>$0.00</p></td><td><button class="add-cart">ADD TO CART</button></td>'
//     addTr.innerHTML = trContent
//     var wishTable = document.querySelector('.wish-list tbody')
//     wishTable.append(addTr) // thêm thẻ tr (addTr) vào 

//     wishDelete (product)
// }
// //---------

// function  wishTotal () {
//     var wishItem = document.querySelectorAll('.wish-list tbody tr')
//     for (var i=0; i < wishItem.length; i++) {
//         var inputValue = wishItem[i].querySelector('input')
//         // console.log(inputValue , wishItem)
//     }
// }
    

// //-----------

// function wishDelete (product) {
//     var wishItem = document.querySelectorAll('.wish-list tbody tr')
//     for (var i = 0; i < wishItem.length; i++) {
//         var wishProduct = document.querySelectorAll('.btn-remove')
//         wishProduct[i].addEventListener("click", function(event) {
//             var wishDelete = event.target
//             var wishItemDelete = wishDelete.parentElement.parentElement.parentElement
//             var wishItemDelete2 = wishItemDelete.parentElement.parentElement

//             var wishTitleDelete = document.querySelector('.wish-list .wish-title')
//             var productNameWish = document.querySelectorAll('.product-info--name') 
//             for(var j=0; j < productNameWish.length; j++) {   
//                 if (wishTitleDelete.innerHTML == productNameWish[j].innerHTML ) {
//                     product.classList.remove('like')
//                     // console.log(wishTitleDelete.innerHTML)
//                     // console.log(productNameWish[j].innerHTML)
//                 }
//             }

//             wishItemDelete2.remove()

//         })
//     }
// }

//     var wishItem = document.querySelectorAll('.wish-list tbody tr')
//     for (var i = 0; i < wishItem.length; i++) {
//         var wishProduct = document.querySelectorAll('.btn-remove')
//         wishProduct[i].addEventListener("click", function(event) {
//             var wishDelete = event.target
//             var wishItemDelete = wishDelete.parentElement.parentElement.parentElement.parentElement.parentElement
//             wishItemDelete.remove()
//             product.classList.remove('like')
//         })
//     }

// //cart ----------------------------------
// const btnAddWishCart = document.querySelectorAll('.wish-list .add-cart')
// btnAddWishCart.forEach(function(btnAddWish) {
//     btnAddWish.addEventListener("click", function(event) {
//         var addItem = event.target
//         var product = addItem.parentElement
//         var product2 = product.parentElement

//         console.log(product)
//         var productImg = product2.querySelector('img').src
//         var productName = product2.querySelector('.product-content h4').innerHTML
//         var productPriceUnit = product2.querySelector('.unit-price p').innerHTML
//         var productPriceDiscount = product2.querySelector('.unit-discount p').innerHTML

//         addWishCart(productImg, productName, productPriceUnit, productPriceDiscount)
//     })
// })

// function addWishCart(productImg, productName, productPriceUnit, productPriceDiscount) {
//     var addTr = document.createElement('tr')
//     var wishItem = document.querySelectorAll('.cart-list tbody tr')
//     for (var i = 0; i < wishItem.length; i++) {
//         var wishProductName = document.querySelectorAll('.cart-list .wish-title')
//         if (wishProductName[i].innerHTML == productName ) {
//             product.classList.remove('like')


//         }
//     }

//     var trContent = '<tr><td><div class="cart-product-content"><img src="'+productImg+'" width="100px" height="100px" alt=""><div class="product-content"><a href=""><h4> '+productName+'</h4></a><span>Estimated delivery within 5 working days</span><div class="product-content-btn"><button class="btn-remove" type="button">Remove</button></div></div></div></td><td><div class="cart-qty-content"><span class="decrease">-</span><input class="cart-input" type="text" value="1" onblur="typeInput()"><span class="increase">+</span></div></td><td><p>'+productPriceUnit+'</p></td><td><p>'+productPriceDiscount+'</p></td><td><p>$399.00</p></td></tr>'

//     addTr.innerHTML = trContent
//     var cartTable = document.querySelector('.cart-list tbody')
//     cartTable.append(addTr) // thêm thẻ tr (addTr) vào 

//     // wishDelete (product)
// }



var wishListProduct = new Array();

function wishList(wish) {
    var product = wish.parentElement
    var product2 = product.parentElement
    var product3 = product2.parentElement

    product.classList.add('like')

    var productImg = product3.querySelector('img').src
    var productName = product2.querySelector('p').innerText
    var productPrice = product2.querySelector('span').innerText

    var productArray = new Array(productImg, productName, productPrice)
    
    wishListProduct.push(productArray);


    sessionStorage.setItem("wishListProduct", JSON.stringify(wishListProduct))
}


// function showCountProduct() {
//     document.getElementsByClassName("wish-list").innerHTML = wishListProduct.
// }


function addWish() {
    var wishProduct = ""
    for (let i = 0; i < wishListProduct.length; i++) {
        wishProduct += '<tr><td><div class="cart-product-content"><img src="'+ wishListProduct[i][0] +'" width="100px" height="100px" alt=""><div class="product-content"><a href=""><h4 class="wish-title">' + wishListProduct[i][1] + '</h4></a><span>Estimated delivery within 5 working days</span><div class="product-content-btn"><button class="btn-remove" type="button">Remove</button></div></div></div></td><td><div class="cart-avai-content"><span style="opacity: 0.7;">20 in stock</span></div></td><td class="unit-price"><p>' + wishListProduct[i][2] + '</p></td><td class="unit-discount"><p>$0.00</p></td><td><button class="add-cart" onclick="cartList(this)">ADD TO CART</button></td></tr>'
    }

    document.querySelector(".wish-list tbody").innerHTML = wishProduct
}

function showWishListProduct_Page() {
    var wishList =sessionStorage.getItem("wishListProduct")
    var wishListProduct = JSON.parse(wishList)
    var wishProduct = ""
    for (let i = 0; i < wishListProduct.length; i++) {
        wishProduct += '<tr><td><div class="cart-product-content"><img src="'+ wishListProduct[i][0] +'" width="100px" height="100px" alt=""><div class="product-content"><a href=""><h4 class="wish-title">' + wishListProduct[i][1] + '</h4></a><span>Estimated delivery within 5 working days</span><div class="product-content-btn"><button class="btn-remove" type="button">Remove</button></div></div></div></td><td><div class="cart-avai-content"><span style="opacity: 0.7;">20 in stock</span></div></td><td class="unit-price"><p>' + wishListProduct[i][2] + '</p></td><td class="unit-discount"><p>$0.00</p></td><td><button class="add-cart" onclick="cartList(this)">ADD TO CART</button></td></tr>'
    }

    document.querySelector(".wish-list tbody").innerHTML = wishProduct
}


function wishDelete (product) {
    var wishItem = document.querySelectorAll('.wish-list tbody tr')
    for (var i = 0; i < wishItem.length; i++) {
        var wishProduct = document.querySelectorAll('.wish-list .btn-remove')
        wishProduct[i].addEventListener("click", function(event) {
            var wishDelete = event.target
            var wishItemDelete = wishDelete.parentElement.parentElement.parentElement
            var wishItemDelete2 = wishItemDelete.parentElement.parentElement

            var wishTitleDelete = document.querySelector('.wish-list .wish-title')
            var productNameWish = document.querySelectorAll('.product-info--name') 
            for(var j=0; j < productNameWish.length; j++) {   
                if (wishTitleDelete.innerHTML == productNameWish[j].innerHTML ) {
                    product.classList.remove('like')
                    // console.log(wishTitleDelete.innerHTML)
                    // console.log(productNameWish[j].innerHTML)
                }
            }

            wishItemDelete2.remove()

        })
    }
}

addWish()
showWishListProduct_Page()
wishDelete()

//----------------------------------------------------
//----------------------------------------------------
var cartListProduct = new Array();

function cartList(cart) {
    var product = cart.parentElement.parentElement

    var productImg = product.querySelector('img').src
    var productName = product.querySelector('.product-content h4').innerHTML
    var productPriceUnit = product.querySelector('.unit-price p').innerHTML
    var productPriceDiscount = product.querySelector('.unit-discount p').innerHTML

    var productArray = new Array(productImg, productName, productPriceUnit, productPriceDiscount)
    
    cartListProduct.push(productArray);

    sessionStorage.setItem("cartListProduct", JSON.stringify(cartListProduct))
}


function addCart() {
    var cartProduct = "";
    var total = 0 ;
    for (let i = 0; i < cartListProduct.length; i++) {
        total = cartListProduct[i][2] - cartListProduct[i][3] ;  
        cartProduct += '<tr> ' +
        '<td>' +
            '<div class="cart-product-content">' +
               ' <img src="'+ cartListProduct[i][0] +'" width="100px" height="100px" alt="">' +
                '<div class="product-content">' +
                    '<a href=""><h4>'+ cartListProduct[i][1] +'</h4></a>' +
                    '<span>Estimated delivery within 5 working days</span>' +
                    '<div class="product-content-btn">' +
                        '<button class="btn-remove" type="button">Remove</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</td>' +
        '<td>' +
            '<div class="cart-qty-content">' +
                '<span class="decrease">-</span>' +
                '<input class="cart-input" type="text" value="1" onblur="typeInput()">' +
                '<span class="increase">+</span>' +
            '</div>' +
        '</td>' +
        '<td><p>'+ cartListProduct[i][2] +'</p></td>' +
        '<td><p>'+ cartListProduct[i][3] +'</p></td>'
    }
    cartProduct += '<td><p>'+ total +' </p></td> '+
                    '</tr>'

    document.querySelector(".cart-list tbody").innerHTML = cartProduct
}



function showCartListProduct_Page() {
    var cartList =sessionStorage.getItem("cartListProduct")
    var cartListProduct = JSON.parse(cartList)
    var cartProduct = "";
    // var total = 0 ;
    for (let i = 0; i < cartListProduct.length; i++) {
        total = cartListProduct[i][2] - cartListProduct[i][3] ;  
        cartProduct += '<tr> ' +
        '<td>' +
            '<div class="cart-product-content">' +
               ' <img src="'+ cartListProduct[i][0] +'" width="100px" height="100px" alt="">' +
                '<div class="product-content">' +
                    '<a href=""><h4>'+ cartListProduct[i][1] +'</h4></a>' +
                    '<span>Estimated delivery within 5 working days</span>' +
                    '<div class="product-content-btn">' +
                        '<button class="btn-remove" type="button">Remove</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</td>' +
        '<td>' +
            '<div class="cart-qty-content">' +
                '<span class="decrease">-</span>' +
                '<input class="cart-input" type="text" value="1" onblur="typeInput()">' +
                '<span class="increase">+</span>' +
            '</div>' +
        '</td>' +
        '<td><p>'+ cartListProduct[i][2] +'</p></td>' +
        '<td><p>'+ cartListProduct[i][3] +'</p></td>' +
        '<td><p>0 </p></td> '+
                    '</tr>'
    }
    // cartProduct += '<td><p>'+ total +' </p></td> '+
    //                 '</tr>'

    document.querySelector(".cart-list tbody").innerHTML = cartProduct
}



function cartDelete () {
    var cartItem = document.querySelectorAll('.cart-list tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var cartProduct = document.querySelectorAll('.cart-list .btn-remove')
        cartProduct[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement.parentElement.parentElement.parentElement.parentElement

            cartItemDelete.remove()

        })
    }
}

addCart()
showCartListProduct_Page()
cartDelete()