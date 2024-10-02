

  

  const handleSelect = (e) => {

        e.preventDefault();
        const selectedOption = document.querySelector('#pageviewsSlider').value;
        console.log('You selected:', selectedOption);
        document.querySelector('#displayPrice').textContent = selectedOption
        document.querySelector('#displayUsers').textContent = selectedOption
        
        
        
        if (selectedOption == 1) {
          document.querySelector('#displayPrice').textContent = '$8.00'
          document.querySelector('#displayUsers').textContent = '10k'
        }
        if (selectedOption == 2) {
          document.querySelector('#displayPrice').textContent = '$12.00'
        document.querySelector('#displayUsers').textContent = '50k'
        }
        if (selectedOption == 3) {
          document.querySelector('#displayPrice').textContent = '$16.00'
        document.querySelector('#displayUsers').textContent = '100k'
        }
        if (selectedOption == 4) {
          document.querySelector('#displayPrice').textContent = '$24.00'
        document.querySelector('#displayUsers').textContent = '500k'
        }
        if (selectedOption == 5) {
          document.querySelector('#displayPrice').textContent = '$36.00';
        document.querySelector('#displayUsers').textContent = '1M'
          
        }
        
    
}

document.querySelector('#myForm').addEventListener('input', handleSelect);













