import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  // console.log(sw, ne);
  try {
    const { data: { data } } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': '127c107456msha2068820134fa9dp1ebf06jsn441ee4edc17d',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
