function calculateBudget(){
    var income= parseFloat(document.getElementById('income').value)
    var expenses=parseFloat(document.getElementById('expenses').value)

    if(!isNaN(income) && !isNaN(expenses)){
        var budget=income - expenses
        var resultElement= document.getElementById('result')
        resultElement.textContent= 'Your total balance is:'+ budget.toFixed(2)
    } else{
        alert('please enter valid numbers for income and expenses')
    }
}