document.getElementById("login").addEventListener("click", function () {
    const userName = document.getElementById("userName");
    const password = document.getElementById("pass");
    // condition  for valid user
    if(userName.value == "shamim077" && password.value == "abcd"){
        document.getElementById("login-area").style.display = "none";
        document.getElementById("transition-area").style.display = "block";
    }
    else{
        alert(
            "You are not a valid user"
        )
        userName.value = "";
        password.value = "";
    }
});

// deposit btn

document.getElementById("depositBtn").addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    // condition valid number if take input type text
    if (isNaN(depositNumber)) {
        alert('please provide a valid number for diposit');
        return;
    }
    // display deposit
    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = currentDepositNumber + depositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;
// display balance
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
// display widthraw
    const currentWidthraw = document.getElementById("currentWidthraw");
    const currentWidthrawNumber = parseFloat(currentWidthraw.innerText);
    const totalWidthraw = currentWidthrawNumber + widthrawNumber;

    document.getElementById("currentWidthraw").innerText = totalWidthraw;
// display balance
    const currentBalance = document.getElementById("currentBalance");
    const currentBalanceNum = parseFloat(currentBalance.innerText);
    const totalBalance = currentBalanceNum - widthrawNumber;
    document.getElementById("currentBalance").innerText = totalBalance;
    const totalNum = parseFloat(totalBalance);

    if(totalBalance < widthrawNumber){
        alert("You have not enought balance");
        currentWidthraw.innerText = currentWidthrawNumber;
        currentBalance.innerText = currentBalanceNum;
    }
    document.getElementById("widthrawAmount").value = "";
});
