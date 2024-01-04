/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': '6c0708fdf4msh5d2f0d3132a4dc2p18470fjsnf1e238713be5',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
            });
        
            return data;
          } catch (error) {
            console.log(error);
          }
        };




