'use strict';

  

  const handleSelect = (e) => {

        const selectedOption = document.querySelector('#page-views-slider').value;
        const boxChecked = document.querySelector('#yearly-discount');
        console.log('You selected:', selectedOption);
        console.log('You selected:', boxChecked);
        let price, users;

        if (selectedOption == 1) {
          price = 8.00
          users = '10k'
          
        }
        if (selectedOption == 2) {
          price = 12.00
          users = '50k'
        
        }
        if (selectedOption == 3) {
          price = 16.00
          users = '100k'
          
        }
        if (selectedOption == 4) {
          price = 24.00
          users = '500k'
        
        }
        if (selectedOption == 5) {
          price = 36.00
          users = '1M'
          
        }

        if (boxChecked.checked) {
          price *= 12
          price *= 0.75
          
        }

        document.querySelector('#display-price').textContent = '$' + price;
        document.querySelector('#display-users').textContent = users;  
        console.log('You selected:', price);
}

document.querySelector('#my-form').addEventListener('input', handleSelect);


const viewings = [
  {
    view: '10K pageviews',
    price: 8
    },
    {
    view: '50K PAGEVIEWS',
    price: 12
    },
    {
    view: '100K PAGEVIEWS',
    price: 16
    },
    {
    view: '500K PAGEVIEWS',
    price: 24
    },
    {
    view: '1M PAGEVIEWS',
    price: 36
    }
  
]












