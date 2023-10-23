// ¿En tu páis de origen es normal dejar propina?
const button = document.querySelector("button")

button.addEventListener("click", function () {

    let BillAmount = +document.querySelector("#bill-amount").value;

    let Tip = +document.querySelector("#percentage-tip").value;

    let TipAmount = ((BillAmount * Tip) /100)
    document.querySelector("#tip-amount").value = TipAmount;

    let Total = document.querySelector("#total").value;
    Total = BillAmount + TipAmount;
    document.querySelector("#total").value = Total;

});