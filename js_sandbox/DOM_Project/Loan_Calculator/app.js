/* Listen for submit */

document.getElementById('loan-form').addEventListener('submit', function(e){
  /* show loader  */
  document.getElementById("results").style.display = "none"; 
  /* show loader  */
  document.getElementById("loading").style.display = "block";   
  
  setTimeout(calculateResults, 2000); 
  e.preventDefault();
}); 

/* Calculate Result */

function calculateResults(e) { 
  console.log('Calculating ...'); 
  /* e.preventDefault();  */
  const amount = document.getElementById('amount'); 
  const interest = document.getElementById('interest'); 
  const years = document.getElementById('years'); 
  const monthlyPayment = document.getElementById('monthly-payment');  
  const totalPayment = document.getElementById('total-payment');  
  const totalInterest = document.getElementById('total-interest');   
  console.log(totalInterest); 

  const principal = parseFloat(amount.value); 
  const calculatedInterest = (parseFloat(interest.value) / 100) / 12;  
  const calculatedPayments = parseFloat(years.value) * 12;  

  // Compute monthly payment 
  const x = Math.pow(1 + calculatedInterest, calculatedPayments); 
  const monthly = (principal * x * calculatedInterest) / (x-1);  
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2); 
    totalPayment.value = (monthly * calculatedPayments).toFixed(2); 
    totalInterest.value = (( monthly * calculatedPayments) - principal).toFixed(2); 
    
    /* show result */
    document.getElementById("results").style.display = "block"; 
    /* hide loader  */
    document.getElementById("loading").style.display = "none";   

  } else {
    showError('Please check your numbers'); 
  }
}
function showError( error) {
  
  /* show result */
  document.getElementById("results").style.display = "block"; 
  /* hide loader  */
  document.getElementById("loading").style.display = "none";   
  
  // Create a DIV
  const errorDiv = document.createElement('div'); 

  /* Get elements  */
  const card = document.querySelector('.card'); 
  const heading = document.querySelector('.heading'); 
  /* add class */
  errorDiv.className = 'alert alert-danger'; 
  /* create text node and apppend to div  */
  errorDiv.appendChild(document.createTextNode(error))
  
  /* Insert error above heaading  */
  card.insertBefore(errorDiv, heading);  

  /* clear error after 3 seconds  */
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove(); 
}