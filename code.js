document.getElementById("createResult").addEventListener("click",result);
var k = 1;
function result(){
	var firstKatet = document.getElementById("firstKatet").value;
	var secondKatet = document.getElementById("secondKatet").value;

	if (firstKatet==0 || secondKatet==0) {
		alert("Довжина не може бути 0");
		return

	} else if (firstKatet<0 || secondKatet<0) {
		alert("Довжина не може бути від'ємною");
		return

			} else {
				var result = Math.sqrt(firstKatet*firstKatet+secondKatet*secondKatet),
		 		printResult = document.getElementById("printResult");
    			if (k==1){
    				hElement = document.createElement("h3");
    				hElement.textContent = result;
	    			printResult.appendChild(hElement);
	    			hElement.setAttribute("id","res");

				} else {
					var h1Element = document.getElementById("res");
					h1Element.textContent = result;
				}
				k++;
			}
}

