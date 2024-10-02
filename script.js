

  

  const handleSelect = (e) => {

        e.preventDefault();
        const selectedOption = document.querySelector('#pageviews').value;
        console.log('You selected:', selectedOption);
        document.querySelector('#displayPrice').textContent = selectedOption
        
    
}

document.querySelector('#myForm').addEventListener('submit', handleSelect);






