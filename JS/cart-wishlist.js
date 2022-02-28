const btnWishlist = document.querySelectorAll('#product-smart-store .product-quality--like')
btnWishlist.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        var btnItem = event.target
        var product = btnItem.parentElement
        var product2 = product.parentElement
        var product3 = product2.parentElement

        product.classList.add('like')

        var productImg = product3.querySelector('img').src
        var productName = product2.querySelector('p').innerText
        var productPrice = product2.querySelector('span').innerText

        addWish(productImg, productName, productPrice,product)
    })
})

function addWish(productImg, productName, productPrice, product) {
    var addTr = document.createElement('tr')
    var wishItem = document.querySelectorAll('.wish-list tbody tr')
    for (var i = 0; i < wishItem.length; i++) {
        var wishProductName = document.querySelectorAll('.wish-list .wish-title')
        if (wishProductName[i].innerHTML == productName ) {
            product.classList.remove('like')


        }
    }

    var trContent = '<td><div class="cart-product-content"><img src="'+ productImg +'" width="100px" height="100px" alt=""><div class="product-content"><a href=""><h4 class="wish-title">' + productName + '</h4></a><span>Estimated delivery within 5 working days</span><div class="product-content-btn"><button class="btn-remove" type="button">Remove</button></div></div></div></td><td><div class="cart-avai-content"><span style="opacity: 0.7;">20 in stock</span></div></td><td><p>' + productPrice + '</p></td><td><p>$0.00</p></td><td><button class="add-cart">ADD TO CART</button></td>'
    addTr.innerHTML = trContent
    var wishTable = document.querySelector('.wish-list tbody')
    wishTable.append(addTr) // thêm thẻ tr (addTr) vào 

    wishTotal()

    wishDelete (product)
}

addWish(productImg, productName, productPrice, product)
//---------

function  wishTotal () {
    var wishItem = document.querySelectorAll('.wish-list tbody tr')
    for (var i=0; i < wishItem.length; i++) {
        var inputValue = wishItem[i].querySelector('input')
        // console.log(inputValue , wishItem)
    }
}
    

//-----------

function wishDelete (product) {
    var wishItem = document.querySelectorAll('.wish-list tbody tr')
    for (var i = 0; i < wishItem.length; i++) {
        var wishProduct = document.querySelectorAll('.btn-remove')
        wishProduct[i].addEventListener("click", function(event) {
            var wishDelete = event.target
            var wishItemDelete = wishDelete.parentElement.parentElement.parentElement.parentElement.parentElement
            wishItemDelete.remove()

            product.classList.remove('like')
        })
    }
}

    var wishItem = document.querySelectorAll('.wish-list tbody tr')
    for (var i = 0; i < wishItem.length; i++) {
        var wishProduct = document.querySelectorAll('.btn-remove')
        wishProduct[i].addEventListener("click", function(event) {
            var wishDelete = event.target
            var wishItemDelete = wishDelete.parentElement.parentElement.parentElement.parentElement.parentElement
            wishItemDelete.remove()

            product.classList.remove('like')
        })
    }

//cart
const btnCart = document.querySelectorAll('.wish-list .add-cart')
console.log(btnCart)
