function updateCaseNumber(product, price, isIncrease) {
    const InputNumber = document.getElementById(product + '-input');
    let value = InputNumber.value;
    if (isIncrease == true) {
        value = parseInt(value) + 1;
    }
    else if (value > 0) {
        value = parseInt(value) - 1;
    }

    InputNumber.value = value;
    // updateTotal
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = value * price;

    //subtotal
    calculatTotal();
}


function getTotal(product) {
    const productNumber = document.getElementById(product + '-input');
    const productValue = parseInt(productNumber.value);
    return productValue;
}
function calculatTotal() {
    const phonetotal = getTotal('phone') * 1219;
    const casetotal = getTotal('case') * 59;
    const subtotal = phonetotal + casetotal;
    const taxamount = subtotal / 5;
    const totalprice=subtotal+taxamount;
    // update html
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = taxamount;
    document.getElementById('total').innerText = totalprice;
}

//phone event handeler

document.getElementById('phone-pluse').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
})
//case event handelar
document.getElementById('case-pluse').addEventListener('click', function () {

    updateCaseNumber('case', 59, true);

});

document.getElementById('case-minus').addEventListener('click', function
    () {

    updateCaseNumber('case', 59, false);

});