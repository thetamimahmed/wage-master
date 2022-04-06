//get income value
function getIncomeValue(){
    const incomeElement = document.getElementById('income-input');
    const incomeValue = parseFloat(incomeElement.value);
    return incomeValue;
}

//get expenses value
function expenses(){
    const foodInput = document.getElementById('food-input');
    const foodValue = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentValue = parseFloat(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    const clothesValue = parseFloat(clothesInput.value);
    const total = foodValue + rentValue + clothesValue;
    return total;
}

//get savings value
function savings(){
    const saveInput = document.getElementById('save-input');
    const saveValue = parseFloat(saveInput.value);
    return saveValue;
}

//calculate button event listener
document.getElementById('calc-btn').addEventListener('click', function(){
   
})