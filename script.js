'use strict';

const viewings = [
  {
    view: '10K PAGEVIEWS',
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

  const handleSelect = (e) => {

        const selectedOption = document.querySelector('#page-views-slider').value;
        const boxChecked = document.querySelector('#yearly-discount');
        console.log('You selected:', selectedOption);
        console.log('You selected:', boxChecked);
        let price = viewings[selectedOption]['price']
        let users = viewings[selectedOption]['view']

        console.log(price)
        console.log(viewings)


        if (boxChecked.checked) {
          price *= 12
          price *= 0.75
          
        }

        document.querySelector('#display-price').textContent = '$' + price;
        document.querySelector('#display-users').textContent = users;  
        console.log('You selected:', price);
}

document.querySelector('#my-form').addEventListener('input', handleSelect);















