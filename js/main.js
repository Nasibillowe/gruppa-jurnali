var arr = ['Iskandar', 'Shohruh', 'Nasibillo', 'Abdullox', ' Muhammad Rizo', 'Muhammad Ali', 'Azimjon', 'Axrorbek', 'Abdulbory', 'Ilmidin', 'Sirojiddin', 'Azizbek', 'Jaxongir','Ali','Azzilo' ]
var elList = document.querySelector('.list')
for (var i = 0; i < arr.length; i++) {
    var newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="box">
        <img width="100%" src="./img/mosin.jfif"></img>
        <h2>${arr[i]}</h2>
        <p>car img </p>
        <button>buy</button>
    </div>
    `

    elList.appendChild(newLi)
 }

