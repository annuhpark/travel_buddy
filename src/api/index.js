import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  // method: 'GET',
  // url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359'
  },
  headers: {
    'X-RapidAPI-Key': '127c107456msha2068820134fa9dp1ebf06jsn441ee4edc17d',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
  try {
    const { data: { data } } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
}
