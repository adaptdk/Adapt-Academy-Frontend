
//                    Adapt Academy 2019 lesson 03 - JS introduction | task 03 by Donatas Dereškevičius 


const fetchData = async() => {

    try {
        let response = await fetch ('https://api.gdax.com/products/BTC-USD/book');
        let data = await response.json();
        document.querySelector(".bid-price").innerHTML += ' ' + data.bids[0][0];
        document.querySelector(".ask-price").innerHTML += ' ' + data.asks[0][0];
    } catch (error) {
        console.error ('Error: ', error.message);
    }
}

fetchData();