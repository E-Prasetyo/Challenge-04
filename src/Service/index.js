import axios from 'axios';

const BASE_URL = "https://rent-cars-api.herokuapp.com"

const serviceCar = {
  
  async getCar(){
     const data = await axios({
      method: 'get',
      url: BASE_URL+"/admin/car",
      headers : {}
    })
    .then((response) => response.data);

    return data ? data : []
  },

  async getCarById(id){
     const data = await axios({
      method: 'get',
      url: BASE_URL+`/admin/car/${id}`,
      headers : {}
    })
    .then((response) => response.data);

    return data ? data : []
  }
}

export default serviceCar