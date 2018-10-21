var a = 1, x = 0;
var array = [["Tucachev",1400],["Branco Sabbath",12800],["Starridge",3000],["Sabazios",30000],["Death Contract"],50000],table=document.getElementById('myTable');
for (var i = 0; i < array.length; i++) {
	var newRow = table.insertRow(-1);
	for (var j = 0; j < array[i]; j++) {
		var cell = newRow.insertCell(-1)
		cell.innerHTML = array[i][j];
	}
}

selectTable()

function selectTable(){
	for (var i = 0; i < array.length; i++) {
		table.rows[i+1].onclick = function(){
			document.getElementById("itemText").value = this.cells[0].innerHTML;
			document.getElementById("itemPrice").value = this.cells[1].innerHTML + " unit";
		};
	}
}

function checkEmptyInput(){
	var isEmpty = false, itemName = getElementById("itemName").value, itemNumber = document.getElementById("itemNumber").value;

	if(itemName === ""){
		isEmpty = true;
	}
	else if(itemNumber === ""){
		isEmpty = true;
	}
	return isEmpty;
}

function addItem(){
	if(!checkEmptyInput()){
		var table = document.getElementById("myTable");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = document.getElementById("itemName").value;
		cell2.innerHTML = document.getElementById("itemNumber").value;
		if(cell2.innerHTML < 0){
			document.getElementById("myTable").deleteRow(-1);
		}
		else{
			array.push([cell1.innerHTML,cell2.innerHTML]);
			selectTable()
			document.getElementById(itemNumber).value = "";
			document.getElementById(itemName).value = "";
		}
	}
}

function addData(){
	var tableb = document.getElementById("mainTable");
	var rowb = tableb.insertRow(-1);
	var xell1 = rowb.insertCell(0), xell2 = rowb.insertCell(1), xell3 = rowb.insertCell(2), xell3 = rowb.insertCell(2), xell4 = rowb.insertCell(3), xell5 = rowb.insertCell(4);
	xell1.innerHTML = a;
	xell2.innerHTML = document.getElementById("itemText").value;
	xell3.innerHTML = document.getElementById("itemPrice").value;
	xell4.innerHTML = document.getElementById("itemAmount").value;
	xell5.innerHTML = document.getElementById("finalPrice").value;
	a++;
	x+= Number(xell5.innerHTML)
	if(xell2.innerHTML === "" || xell4.innerHTML === ""){
		a--;
		document.getElementById(mainTable).deleteRow(-1);
	} else document.getElementById("totalPrice").value = x;
	document.getElementById("itemText").value = "";
	document.getElementById("itemPrice").value = ""; 
	document.getElementById("itemAmount").value = "";
	document.getElementById("finalPrice").value = "";
}

function calc(theForm){
	var price = parseFloat(theForm.value)
	if(isNAN(price)) price = 0;
	var amount = parseFloat(theForm.itemAmount.value)
	if(isNAN(amount)) amount = 0;
	var finalPrice = price * amount
	theForm.finalPrice.value = finalPrice.toFixed();

}

function calcd(theForm){
	var pay = parseFloat(theForm.payment.value)
	if(isNAN(pay)) pay = 0;
	var tp = parseFloat(theForm.totalPrice.value)
	if(isNAN(tp)) tp = 0;
	var dc = parseFloat(theForm.discount.value)
	if(isNAN(dc) | dc < 0){
		dc = 0;
		document.getElementById("discount").value = 0;
	} else if (dc > 100) {
		document.getElementById("discount").value = 100;
	}
	var totalPriced = tp * ((100-dc)/100) theForm.totalPriced.value = totalPriced.toFixed();
	var change = pay - totalPriced theForm.change.value = change.toFixed();
}