console.log('Client Side JavaScript loaded')


const $weatherForm = document.querySelector('body')
const $forecast = document.querySelector('#forecast')


    $weatherForm.addEventListener('submit', (e) => {

        $forecast.textContent = 'Loading...'


    e.preventDefault()

    const location = document.querySelector('#input').value

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {

        response.json().then((data => {
            $forecast.textContent = '';
            if(data.error) {
                var p = document.createElement('p')
                p.innerHTML = data.error;
                $forecast.appendChild(p)
            } else {
                var $p1 = document.createElement('p')
                $p1.innerText = `Forecast: ${data.forecast}`;
                $forecast.appendChild($p1)
                var $p2 = document.createElement('p')
                $p2.innerText = `Location: ${data.location}`;
                $forecast.appendChild($p2)
            }
            
        }))
    })
})

navigator.geolocation.getCurrentPosition((position) => {console.log(position)})