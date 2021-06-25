//  ***** case section handler *****
/*  
document.getElementById('case_increase').addEventListener('click', function() {
	const increaseInput = document.getElementById('increase_count');
	caseCount = parseInt(increaseInput.value);
	newCaseCount = caseCount + 1;
	increaseInput.value = newCaseCount;
	const caseTotal = newCaseCount * 59;
	document.getElementById('case_total').innerText = '$' + caseTotal;
});
*/
// ***case decrease handler***
/*
document.getElementById('case_decrease').addEventListener('click', function() {
	const increaseInput = document.getElementById('increase_count');
	caseCount = parseInt(increaseInput.value);
	newCaseCount = caseCount - 1;
	increaseInput.value = newCaseCount;
	const caseTotal = newCaseCount * 59;
	document.getElementById('case_total').innerText = '$' + caseTotal;
});
*/
/*
document.getElementById('case_increase').addEventListener('click', function() {
	handleProductChange(true);
});
document.getElementById('case_decrease').addEventListener('click', function() {
	handleProductChange(false);
});
*/
/*
// phone handler function
function handlePhoneProductChange(isIncrease) {
	const increaseInput = document.getElementById('phone_count');
	phoneCount = parseInt(increaseInput.value);
	let newPhoneCount = phoneCount;
	if (isIncrease == true) {
		newPhoneCount = phoneCount + 1;
	}
	if (isIncrease == false && phoneCount > 0) {
		newPhoneCount = phoneCount - 1;
	}
	increaseInput.value = newPhoneCount;
	const phoneTotal = newPhoneCount * 1219;
	document.getElementById('phone_total').innerText = '$' + phoneTotal;
}
*/
/*
// case handler function
function handleProductChange(isIncrease) {
	const increaseInput = document.getElementById('ease_count');
	caseCount = parseInt(increaseInput.value);
	let newCaseCount = caseCount;
	if (isIncrease == true) {
		newCaseCount = caseCount + 1;
	}
	if (isIncrease == false && caseCount > 0) {
		newCaseCount = caseCount - 1;
	}
	increaseInput.value = newCaseCount;
	const caseTotal = newCaseCount * 59;
	document.getElementById('case_total').innerText = '$' + caseTotal;
}
*/
// ****case and phone combine function****
function handleProductChange(product, isIncrease) {
	const productInput = document.getElementById(product + '_count');
	productCount = parseInt(productInput.value);

	let productNewCount = productCount;
	if (isIncrease == true) {
		productNewCount = productCount + 1;
	}
	if (isIncrease == false && productCount > 0) {
		productNewCount = productCount - 1;
	}
	productInput.value = productNewCount;

	let productTotal = 0;
	if (product == 'phone') {
		productTotal = productNewCount * 1219;
	}
	if (product == 'case') {
		productTotal = productNewCount * 59;
	}

	document.getElementById(product + '_total').innerText = '$' + productTotal;
}

