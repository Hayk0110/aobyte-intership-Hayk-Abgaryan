import CustomPromise2 from "./promise2.js";

export default function ajax(url, config) {
  return new CustomPromise2((resolve, reject)=> {
    
      const xhr = new XMLHttpRequest();
      xhr.open(config?.type || "GET", url);

      xhr.responseType = "json"

      if(config?.headers){
        for (let header in config.headers){
          xhr.setRequestHeader(header,config.headers[header]);
      }
      }

      xhr.onload = function () {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        }
      };

      xhr.onerror = function () {
        reject(new Error("Network error"));
      };

      
        xhr.send(JSON.stringify(config?.data));
      
  });
}
