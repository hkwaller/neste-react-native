
import { access_id } from '../../tokens';

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static xhr(route, params, verb) {
    const base_url = "http://api.trafikanten.no/ReisRest/";
    const url = `${base_url}${route}`;
    console.log(url);
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()

    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {throw err});
    }).then( json => {
        return json; 
    });
  }
}

export default Api