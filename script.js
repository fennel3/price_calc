

  

  const handleSelect = (e) => {

        e.preventDefault();
        const selectedOption = document.querySelector('#pageviewsSlider').value;
        console.log('You selected:', selectedOption);
        document.querySelector('#displayNumb').textContent = selectedOption
        
        
        if (selectedOption == 1) {
          document.querySelector('#displayPrice').textContent = '$8.00'
        }
        if (selectedOption == 2) {
          document.querySelector('#displayPrice').textContent = '$12.00'
        }
        if (selectedOption == 3) {
          document.querySelector('#displayPrice').textContent = '$16.00'
        }
        if (selectedOption == 4) {
          document.querySelector('#displayPrice').textContent = '$24.00'
        }
        if (selectedOption == 5) {
          document.querySelector('#displayPrice').textContent = '$36.00';
         
        }
        
    
}

document.querySelector('#myForm').addEventListener('input', handleSelect);













