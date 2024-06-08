import axios from "axios";

const BaseUrl = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
const options = {
  params: {
    country: 'us',
    lang: 'en',
    pagesize: '30',
    categories: 'men_all',
    concepts: 'H&M MAN'
  },
  headers: {
    'X-RapidAPI-Key': '2da133d08bmsh2546219f82688adp1652a3jsn1f67f5ddacac',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

export const fetchapi = async(url,currentpage,)=>{
        const { data } = await axios.get(`${BaseUrl}${url}?currentpage=${currentpage}`,options);
        return data
}

