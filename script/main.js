const load=document.createElement('h1')
load.innerHTML='LOADING...'
load.style.cssText=`
display:none;`

const input =document.querySelector('#input')
const btn = document.querySelector('#btn')
const header = document.querySelector('#header')

const output = document.querySelector('#output')

output.style.cssText=`
	background-image: url('../images/white.png')`

// Кнопки

let btn5 = document.createElement('button')
btn5.classList.add('button')
btn5.innerHTML='<img src=https://pngimg.com/uploads/moon/small/moon_PNG50.png width=50px height=50px>'
let btn6 = document.createElement('button')
btn6.classList.add('button')
btn6.innerHTML='<img src=https://photoshop-kopona.com/uploads/posts/2019-04/1555402191_sun-1.jpg width=50px height=50px>'
header.append(btn5, btn6)
document.body.append(output, load)


// Local storage
btn5.addEventListener('click',()=>{
	
		localStorage.removeItem('color')
		setTimeout(()=>{
		localStorage.setItem('color','rgb(107, 107, 239)')
	document.body.style.backgroundColor='rgb(107, 107, 239)'
			},1000	)
		
	
	     //локальное хранилище key и значение
	
})
btn6.addEventListener('click',()=>{
	
	localStorage.removeItem('color')            //удаляет ключи значения
	setTimeout(()=>{
			localStorage.setItem('color','yellow')    //отправляет данные в локальное хранилище
	document.body.style.backgroundColor='yellow'
	},1000)

})
if(localStorage.getItem('color')==='rgb(107, 107, 239)'){   //получение
	document.body.style.backgroundColor='rgb(107, 107, 239)'
}else if(localStorage.getItem('color')==='yellow') {
		document.body.style.backgroundColor='yellow'
}else{
	document.body.style.backgroundColor='white'
}

// Погода

const API='http://api.openweathermap.org/data/2.5/weather?q=';

const key ='&appid=b067377a72c98ae6963cdae2e35408d9'


const getWeather =async(e)=>{
	// e.preventDefault()
	const value = input.value
	const url = API+value+key
	const req =await fetch(url)
  const response = await req.json()
 renderWeather(response)
}
const renderWeather=(data)=>{
console.log(data);

const nameCity =document.createElement('h1')
nameCity.innerHTML='Город:  '+ data.name
const country =document.createElement('h2')
country.innerHTML="Страна:  " + data.sys.country
const temp =document.createElement('h3')
temp.innerHTML="Температура:  " + Math.round(data.main.temp - 273) + '&deg';
const feelLike =document.createElement('h3')
feelLike.innerHTML="Ощущаеться как:  " + Math.round(data.main.feels_like - 273) + '&deg';
const vis =document.createElement('h3')
vis.innerHTML="Видимость:  " + data.visibility  + 'м'
const speed =document.createElement('h3')
speed.innerHTML="Скорость ветра:  "+ data.wind.speed + 'км/ч'
// weather.forEach(el=>{
// let weath =document.createElement('div')
// weath.innerHTML=weather[0].description
// })
const weath =document.createElement('p')
weath.innerHTML=data.weather[0].description
let wet = weath
output.append(nameCity, country, temp, feelLike, vis, speed, weath)

// Giphy


}




// btn.onclick = (data) => {
// 	getWeather(data)
// 	input.value='';

// 	output.innerHTML='';
// }

btn.addEventListener('click',(e)=>{
	
	setTimeout(()=>{
		
				load.style.cssText=`
        display:none;`
		getWeather(e)
		if(wet='few clouds'){
			output.style.cssText=`
background-image: url('../images/clouud.jpg'`
		}else if(wet='broken clouds'){output.style.cssText=`	background-image: url('../images/sunny.jpg')`;}
else if(wet='heavy intensity rain'){output.style.cssText=`background-image: url('../images/light.jpg')`}
else{output.style.cssText=`	background-image: url('../images/poooo.jpg')`}

	      input.value=''
					
	   
		   
			
		},4000)
		  load.style.cssText=`
       display:block;`
			 output.innerHTML=''

			 
})