import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox"
import WeatherBtn from "./component/WeatherBtn"

//1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//2. 날씨정보에는 도시, 섭씨, 화씨 날씨 상태
//3. 5개의 버튼이 있다. 1개는 현재 위치, 4개는 다른 도시
//4. 도시 버튼을 클릭할 때 마다 도시 별 날씨가 나온다.
//5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
//6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.
function App() {
  let [weather, setWeather] = useState(null)
  const getCurrentLocation = () => {
    console.log("getCurrentLocation")
    navigator.geolocation.getCurrentPosition((position)=>{
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        console.log("현재 위치는? ", latitude, longitude)
        getWeatherByCurrentLocation(latitude, longitude)
    });
  }

  const getWeatherByCurrentLocation = async(latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a7ef108402a1f7d80fc49c36589427f4&units=metric`
    let response = await fetch(url) //async - 비동기적 처리
    let data = await response.json()
    console.log("data는 ", data)
    setWeather(data)
  }

  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div>
      <div className='container'>
        <WeatherBox weather = {weather}/>
        <WeatherBtn/>
      </div>
    </div>
  );
}

export default App;
