var checkOutProduct = []

var checkOutProductImgArray = []
var checkOutProductNameArray = []
var checkOutQuantityArray = []
var checkOutProductQuantityArray = []
checkOutClick()
function checkOutClick() {
    var btnCheckout = document.querySelector('#check-out')
    var product = btnCheckout.parentElement
    var product2 = product.parentElement

    var productItem = product2.querySelectorAll('.cart-list tbody tr')
    
    for (let i = 0; i < productItem.length; i++) {
        var productImg = productItem[i].querySelector('.cart-list img').src
        var productName = productItem[i].querySelector('.cart-list h4').innerHTML
        var productQuantity = productItem[i].querySelector('.cart-list input').value
        var productPrice = productItem[i].querySelector('.cart-list .price-value').innerHTML

        var productImgArray00000 = [productImg]

        var productImgArray = productImgArray00000.push(productImg)
        var productNameArray = [productName]
        var checkOutQuantityArray = [productQuantity]
        var productQuantityArray = [productPrice]
    
        checkOutProductImgArray.push(productImgArray);
        sessionStorage.setItem("checkOutProductImgArray", JSON.stringify(checkOutProductImgArray))
    
        checkOutProductNameArray.push(productNameArray);
        sessionStorage.setItem("checkOutProductNameArray", JSON.stringify(checkOutProductNameArray))
    
        checkOutQuantityArray.push(productQuantityArray);
        sessionStorage.setItem("checkOutQuantityArray", JSON.stringify(checkOutQuantityArray))
    
        checkOutProductQuantityArray.push(productQuantityArray);
        sessionStorage.setItem("checkOutProductQuantityArray", JSON.stringify(checkOutProductQuantityArray))
        
        
    }
    console.log(productImgArray)



    // var productImgArray = [productImg]
    // var productNameArray = [productName]
    // var checkOutQuantityArray = [productQuantity]
    // var productQuantityArray = [productPrice]

    // checkOutProductImgArray.push(productImgArray);
    // sessionStorage.setItem("checkOutProductImgArray", JSON.stringify(checkOutProductImgArray))

    // checkOutProductNameArray.push(productNameArray);
    // sessionStorage.setItem("checkOutProductNameArray", JSON.stringify(checkOutProductNameArray))

    // checkOutQuantityArray.push(productQuantityArray);
    // sessionStorage.setItem("checkOutQuantityArray", JSON.stringify(checkOutQuantityArray))

    // checkOutProductQuantityArray.push(productQuantityArray);
    // sessionStorage.setItem("checkOutProductQuantityArray", JSON.stringify(checkOutProductQuantityArray))










    var productArray = []

    checkOutProduct.push(productArray);
    sessionStorage.setItem("checkOutProduct", JSON.stringify(checkOutProduct))
}

console.log(checkOutProductImgArray[1])
