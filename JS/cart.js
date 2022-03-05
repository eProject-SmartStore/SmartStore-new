var cartListProduct = new Array();

const btnCartList = document.querySelectorAll('.wish-list .add-cart')
btnCartList.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement

        var productImg = product.querySelector('img').src
        var productName = product.querySelector('.product-content h4').innerHTML
        var productPriceUnit = product.querySelector('.unit-price p span').innerHTML
        var productPriceDiscount = product.querySelector('.unit-discount p span').innerHTML
        var productNumber = 1
        
        var productArray = new Array(productImg, productName, productPriceUnit, productPriceDiscount, productNumber)
        
        
        

        var check = 0
        for (var i = 0; i < cartListProduct.length; i++) {
            if ( cartListProduct[i][1] == productName) {
                check = 1; 
                productNumber +=  cartListProduct[i][4] 
                cartListProduct[i][4] = productNumber
                break
            }
        }
        if (check == 0) {
            cartListProduct.push(productArray);
            sessionStorage.setItem("cartListProduct", JSON.stringify(cartListProduct))
        }

        product.remove()
    })
})
showCartListProduct_Page()
showCartListProduct_Page_total()
cartDelete()

// function addCart() {
//     var cartProduct = "";
//     for (let i = 0; i < cartListProduct.length; i++) {
//         var total = cartListProduct[i][2] - cartListProduct[i][3] ;  
//         cartProduct += '<tr><td><div class="cart-product-content"><img src="'+ cartListProduct[i][0] +'" width="100px" height="100px" alt=""><div class="product-content"><a href=""><h4>'+ cartListProduct[i][1] +'</h4></a><span>Estimated delivery within 5 working days</span><div class="product-content-btn"><button class="btn-remove" type="button">Remove</button></div></div></div></td><td><div class="cart-qty-content"><span class="decrease">-</span><input class="cart-input" type="text" value="1" onblur="typeInput()"><span class="increase">+</span></div></td><td><p>$'+ cartListProduct[i][2] +'</p></td><td><p>$'+ cartListProduct[i][3] +'</p></td><td><p>$'+ total +' </p></td></tr>'


//     }

//     document.querySelector(".cart-list tbody").innerHTML = cartProduct
// }



function showCartListProduct_Page() {
    var cartList =sessionStorage.getItem("cartListProduct")
    var cartListProduct = JSON.parse(cartList)
    var cartProduct = "";
    for (let i = 0; i < cartListProduct.length; i++) {
        var total = parseInt(cartListProduct[i][2])*parseInt(cartListProduct[i][4]) - parseInt(cartListProduct[i][3])*parseInt(cartListProduct[i][4]) ;  
        cartProduct += '<tr><td><div class="cart-product-content"><img src="'+ cartListProduct[i][0] +'" width="100px" height="100px" alt=""><div class="product-content"><a href=""><h4>'+ cartListProduct[i][1] +'</h4></a><span>Estimated delivery within 5 working days</span><div class="product-content-btn"><button class="btn-remove" type="button">Remove</button></div></div></div></td><td><div class="cart-qty-content"><input class="cart-input" min="1" type="number" value="'+ parseInt(cartListProduct[i][4]) +'" onblur="typeInput()"></div></td><td><p>$'+ cartListProduct[i][2] +'</p></td><td><p>$'+ cartListProduct[i][3] +'</p></td><td><p>$'+ total +' </p></td></tr>'
    }

    document.querySelector(".cart-list tbody").innerHTML = cartProduct
    showCartListProduct_Page_total()
}

function showCartListProduct_Page_total() {
    var cartList =sessionStorage.getItem("cartListProduct")
    var cartListProduct = JSON.parse(cartList)
    var cartProductTotal = "";
    let discount = 0
    let subTotal = 0
    let numberItems = 0
    for (let i = 0; i < cartListProduct.length; i++) {
        var discountIn = parseInt(cartListProduct[i][3])*parseInt(cartListProduct[i][4])
        discount += discountIn
        var subTotalIn = parseInt(cartListProduct[i][2])*parseInt(cartListProduct[i][4]) - discount
        subTotal += subTotalIn
        numberItems = cartListProduct[i].length -1
    }
    cartProductTotal += '<div><span>'+ numberItems +'</span></div><div><span>$'+ discount +'</span></div><div><span>$'+ subTotal +'</span></div>'
    document.querySelector(".cart-list .total-number").innerHTML = cartProductTotal
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
