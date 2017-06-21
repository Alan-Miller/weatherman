import { buildURL, formatWeatherData } from '../utils/weatherUtils';
import axios from 'axios';

const initialState = {
  error: false,
  loading: false,
  search: true,
  weather: {}
};

export function setWeather(location){
  const promise = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appId=1120238f1e49e1f05223fd4834a51185`).then(function (response) {
    console.log(response);
    return response.data
  });

  return{
    type: SET_WEATHER,
    payload: promise
  }
}
const RESET = "RESET";
const SET_WEATHER = "SETWEATHER"

export default function weather( state = initialState, action ) {
  switch ( action.type ) {
    case RESET: return initialState;
    case SET_WEATHER + '_FULFILLED':
      //It worked, eww have data
      return{
        error: false,
        loading: false,
        search: false,
        weather: action.payload
      }

      case SET_WEATHER + '_REJECTED':
      //something broke
      break;

    default: return state;
  }
}

export function reset() {
  return { type: RESET };
}





// import { buildURL, formatWeatherData } from '../utils/weatherUtils';
// import axios from 'axios';
//
// const initialState = {
//   error: false,
//   loading: false,
//   search: true,
//   weather: {}
// };
//
// export function setWeather(location) {
//   return {
//     type: SET_WEATHER,
//     payload: axios.get(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=35e1e0f3142c3f1e57c7453c6edf22b8`)
//     // payload: axios.get('api.openweathermap.org/data/2.5/weather?q=Provo&appid=35e1e0f3142c3f1e57c7453c6edf22b8').then(payload => payload.data)
//     // payload: axios.get('api.openweathermap.org/data/2.5/weather?appid=35e1e0f3142c3f1e57c7453c6edf22b8&q={city name}').then(payload => payload.data)
//     // This line is the only bit where we are using axios. The rest is Redux Promise Middleware.
//   }
// }
//
// const RESET = "RESET";
// const SET_WEATHER = 'SET_WEATHER'
//
// export default function weather( state = initialState, action ) {
//   switch ( action.type ) {
//     case RESET: return initialState;
//     case SET_WEATHER + '_FULFILLED':
//       return {
//         error: false
//         ,loading: false
//         ,search: false
//         ,weather: action.payload
//       }
//       break;
//     case SET_WEATHER + '_REJECTED':
//       break;
//     default: return state;
//   }
// }
//
// export function reset() {
//   return { type: RESET };
// }
