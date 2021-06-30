let url = 'http://api.weatherunlocked.com/api/forecast/42.87,74.59?app_id=999207aa&app_key=1e1afdbf0250f7f24b35028b7a0b77cb'

function dated(date){
  if(date == 1){
    return 'Понедельник'
  }else if(date == 2){
    return 'Вторник'
  }
  else if(date == 3){
    return 'Среда'
  }
  else if(date == 4){
    return 'Четверг'
  }
  else if(date == 5){
    return 'Пятница'
  }
  else if(date == 6){
    return 'Суббота'
  }
  else if(date == 0){
    return 'Воскресенье'
  }
}


fetch(url)
   .then(resp =>{
     return resp.json()
   })
   .then(data =>{
     document.querySelector('.dateToDay').textContent = data.Days[0].date
     document.querySelector('.city').textContent = 'Бишкек'
     document.querySelector('.dayToDay').textContent = dated(new Date().getDay())
     document.querySelector('.wind p').textContent = 'Скорость ветра' + data.Days[0].windspd_max_kmh + 'км/ч'
     document.querySelector('.fallout span').textContent = Math.floor((data.Days[0].humid_max_pct + data.Days[0].humid_min_pct)/2)+ '%'
     let iconSrc = data.Days[0].Timeframes[0].wx_icon
     document.querySelector('.icon img').setAttribute('src',`set/${iconSrc.substring(0,iconSrc.length - 3)}png`)
     document.querySelector('.icon p').textContent = data.Days[0].Timeframes[0].wx_desc
     document.querySelector('.maxTemp').textContent = data.Days[0].temp_max_c
     document.querySelector('.minTemp').textContent = data.Days[0].temp_min_c
     document.querySelector('.temp p').innerHTML = Math.floor((data.Days[0].temp_max_c + data.Days[0].temp_min_c)/2)+ ' &deg'
     for(let i=1;i<6;i++){
       let pimax = <p>${data.Days[i].temp_max_c}</p>
       let pimin = <p>${data.Days[i].temp_min_c}</p>
       let srcic = data.Days[i].Timeframes[0].wx_icon
       let imgx = <img src="set/${srcic.substring(0,srcic.length - 3)}png">
      document.querySelector('.week').insertAdjacentHTML('beforeend',`<div class="daysOf">${pimax}${imgx}${pimin}</div>`)
      console.log(i)
     }
     console.log(data)
     console.log(iconSrc)
   })

Anuar Baktybekov, [25.06.21 20:10]
function myFunction(x) {
    let $tarifStart = document.querySelector('#tarifStart')
    let $tarifPro = document.querySelector('#tarifPro')
    let $tarifMax = document.querySelector('#tarifMax')
    let $tarifd = document.querySelector('#tarifd')
    let $buttonTarif = document.querySelector('#buttonTarif')
    if (x.matches) { // If media query matches
      $tarifStart.innerHTML = '<h2>start</h2><p><span>10</span></p>'
      $tarifPro.innerHTML = '<h2>pro</h2><p><span>14</span></p>'
      $tarifMax.innerHTML = '<h2>max</h2><p><span>20</span></p>'
      $tarifd.innerHTML = '<p class="dayPos" style="font-size: 20px;color:#00d9ff;">дней</p>'
      $buttonTarif.innerHTML = <li><button class="button--effect-2"data-title="Тариф определяем вместе: Тариф стартовый" onclick="yaCounter22664086.reachGoal("tarif_start_button");return true;ga('send', 'pageview', '/tarif_start_button');"><span>заказать</span><span></span></button></li>
    } else {
        console.log('NO')
    }
  }
  
  var x = window.matchMedia("(max-width: 576px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



// onst promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 3000);
// });

// promise1.then((value) => {
//   console.log(value);
//   // expected output: "foo"
// });

// console.log(promise1);
// // expected output: [object Promise]

// let promise = new Promise(function(resolve,reject){
//    setTimeout(function(){
//     console.log('Сервер: запрашиваю список пользователей в БД')
//     console.log('...')
//    },1000)
//    resolve()
// })

// promise.then(function(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function() {
//       console.log('БД: формирую список пользователей')
//       console.log('...')
//     },500)
//     // resolve()
//     reject('БД: не получили данные')
//   })
// })
// .then(function(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function() {
//             console.log('Сервер: трансформирую данные для клиента')
//             console.log('...')
//   },500)
//   resolve()
//  })
// })
// .then(function(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function() {
//               console.log('Клиент: получил данные и отображаю их')
//             }, 1000)
//       resolve()
//   })
// })
// .catch(function(error){
//   console.log('ощибка ',error)
// })

let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(function(response){
  return response.json()
  })
  .then(function(data){
    console.log(data)
  })

  async function get(){
    let response = await fetch(url)
    let data = await response.json()

    console.log(data)
      }

      get()