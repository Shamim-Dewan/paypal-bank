document.getElementById("login").addEventListener("click", function () {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transition-area").style.display = "block";
});

// deposit btn

document.getElementById("depositBtn").addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = currentDepositNumber + depositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNum = parseFloat(currentBalance);
    const totalBalance = currentBalanceNum + depositNumber;
    document.getElementById("currentBalance").innerText = totalBalance;
    const totalNum = parseFloat(totalBalance);
    document.getElementById("depositAmount").value = "";
});

// widthraw btn

document.getElementById("widthrawBtn").addEventListener("click", function () {
    const widthrawAmount = document.getElementById("widthrawAmount").value;
    const widthrawNumber = parseFloat(widthrawAmount);
    console.log(widthrawNumber);

    const currentWidthraw = document.getElementById("currentWidthraw").innerText;
    const currentWidthrawNumber = parseFloat(currentWidthraw);
    const totalWidthraw = currentWidthrawNumber + widthrawNumber;

    document.getElementById("currentWidthraw").innerText = totalWidthraw;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNum = parseFloat(currentBalance);
    const totalBalance = currentBalanceNum - widthrawNumber;
    document.getElementById("currentBalance").innerText = totalBalance;
    const totalNum = parseFloat(totalBalance);
    document.getElementById("widthrawAmount").value = "";
});
