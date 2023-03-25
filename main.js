
function getRandElement(elements) {
	const index = Math.floor(Math.random() * elements.length);

	return elements[index];
}

function getRandHash(size, elements) {
	let hash = '';

	for (let i = 0; i < size; i++) {
	hash += getRandElement(elements);
	}

	return hash;
}

function generateHexadecimalKey(size_input_id) {
	const size = document.getElementById(size_input_id).value;
	const elements = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    document.getElementById('output').innerHTML = getRandHash(size, elements);
}

function generateHexadecimalKey1(size_input_id) {
	const size = document.getElementById(size_input_id).value;
	const elements = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    document.getElementById('output2').innerHTML = getRandHash(size, elements);
}

function generateRASID(size_input_id) {
	const size = document.getElementById(size_input_id).value;
	const elements = [
		'-', '_', '$', '#', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 
		'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 
		'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 
		'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
	];
  
	document.getElementById('output_rsa').innerHTML = getRandHash(size, elements);
}


new ClipboardJS('output', 'output2', 'output_rsa');


/* document.addEventListener('click', function(event) {
    if (event.target.tagName === 'OUTPUT') {
      let copyText = event.target.textContent;
      navigator.clipboard.writeText(copyText);
    }
  });


  Put 'touchstart' instead of 'click' to make it work on mobile  with  Events instead of cdn "copy to clipboard" script
  */
