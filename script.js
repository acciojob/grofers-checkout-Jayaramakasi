const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const itemPrices=document.querySelectorAll(".prices")

	let sum=0
	itemPrices.forEach((val)=>{
		sum+=Number(val.textContent)
})
	const tBody=document.getElementById("tBody")
	const tr=document.createElement("tr")

	const td1=document.createElement("td")
	const td2=document.createElement("td")
	td1.textContent="total Price";
	td2.textContent=sum;

	tr.append(td1,td2)
	tBody.appendChild(tr)
  
};

getSumBtn.addEventListener("click", getSum);

