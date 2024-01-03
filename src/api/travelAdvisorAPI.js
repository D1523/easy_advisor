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
                'X-RapidAPI-Key': 'a3e4954750mshb6a0ee0ed4a64f1p17bc3ejsncaf0b5cfc8e4',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
        });
    
        return data;
      } catch (error) {
        console.log(error);
      }
    };

