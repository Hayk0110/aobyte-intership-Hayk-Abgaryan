function ajax(url, config) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(config?.type ||  "GET", url);

        if(config?.headers){
            for (let header in config.headers){
                xhr.setRequestHeader(header,config.headers[header]);
            }
        }

        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status <= 299){
                resolve(xhr.response);
            }else{
                reject(new Error("You have an Error"));
            }
        }

        xhr.onerror = function(){
            reject( new Error("You have an Error"));
        }


        xhr.send(config?.data);
    })

    return promise;
}

export default ajax;