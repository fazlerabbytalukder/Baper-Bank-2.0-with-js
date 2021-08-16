function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputFieldText = inputField.value;
    const newInputField = parseFloat(newInputFieldText);

    //clear kora input field
    inputField.value = '';

    return newInputField;
}

function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const presentTotal = parseFloat(totalText);

    const totalDiposit = presentTotal + amount;
    totalField.innerText = totalDiposit;
}

function getCurrentBalence() {
    const balence = document.getElementById('balence-total');
    const presentBalenceText = balence.innerText;
    const presentBalence = parseFloat(presentBalenceText);
    return presentBalence;
}


function updateBalence(newInputField, isAdd) {
    const balence = document.getElementById('balence-total');
    // const presentBalenceText = balence.innerText;
    // const presentBalence = parseFloat(presentBalenceText);

    const presentBalence = getCurrentBalence();

    if (isAdd == true) {
        const totalBalence = presentBalence + newInputField;
        balence.innerText = totalBalence;
    } else {
        const totalBalence = presentBalence - newInputField;
        balence.innerText = totalBalence;
    }
}



document.getElementById('diposit-button').addEventListener('click', function () {
    // const newInputField = getInputValue('diposit-input');
    // updateTotalField('diposit-total', newInputField);
    // updateBalence(newInputField,true);

    const newInputField = getInputValue('diposit-input');
    if (newInputField > 0) {
        updateTotalField('diposit-total', newInputField);
        updateBalence(newInputField,true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const newWithdrawInput = getInputValue('witdraw-input');
    // updateTotalField('withdraw-total', newWithdrawInput);
    // updateBalence(newWithdrawInput,false)

    const newWithdrawInput = getInputValue('witdraw-input');
    const currentBalance = getCurrentBalence()
    if (newWithdrawInput > 0 && newWithdrawInput < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawInput);
        updateBalence(newWithdrawInput,false)
    }
});



































// document.getElementById('diposit-button').addEventListener('click', function () {
    //input field er text newor jonno
    // const inputField = document.getElementById('diposit-input');
    // const newInputFieldText = inputField.value;
    // const newInputField = parseFloat(newInputFieldText);

    // const newInputField = getInputValue('diposit-input');

    //diposit filed er text niye tar sathe input jok kore full diposit dekhano
    // const dipositTotal = document.getElementById('diposit-total');
    // const presentDipositTotalText = dipositTotal.innerText;
    // const presentDipositTotal = parseFloat(presentDipositTotalText);

    // const totalDiposit = presentDipositTotal + newInputField;
    // dipositTotal.innerText = totalDiposit;

    // updateTotalField('diposit-total', newInputField);



    //balence e add hbe input e ja dibe..
    // const balence = document.getElementById('balence-total');
    // const presentBalenceText = balence.innerText;
    // const presentBalence = parseFloat(presentBalenceText);

    // const totalBalence = presentBalence + newInputField;
    // balence.innerText = totalBalence;

    // updateBalence(newInputField,true);

// });


// document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('witdraw-input');
    // const newWithdrawInputText = withdrawInput.value;
    // const newWithdrawInput = parseFloat(newWithdrawInputText);

    // const newWithdrawInput = getInputValue('witdraw-input');


    // const withdrawField = document.getElementById('withdraw-total');
    // const presentwithdrawFieldText = withdrawField.innerText;
    // const presentwithdrawField = parseFloat(presentwithdrawFieldText);

    // const totalDiposit = presentwithdrawField + newWithdrawInput;
    // withdrawField.innerText = totalDiposit;

    // updateTotalField('withdraw-total', newWithdrawInput);



    //balence e biyog hbe input e ja dibe..
    // const balence = document.getElementById('balence-total');
    // const presentBalenceText = balence.innerText;
    // const presentBalence = parseFloat(presentBalenceText);

    // const totalBalence = presentBalence - newWithdrawInput;
    // balence.innerText = totalBalence;

    // updateBalence(newWithdrawInput,false)

// });