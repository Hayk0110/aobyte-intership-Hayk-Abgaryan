export default function CustomPromise2(callback) {
    this.value = null;
    this.error = null;
    this.onResolve = [];
    this.onReject = [];
    this.onFinally = null;
    this.state = "pending";
    
  
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "resolved";
        this.value = value;
        this.onResolve.forEach((callback) => callback(value));
        if (this.onFinally) {
          this.onFinally();
        }
        
      }
    };
  
    const reject = (error) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = error;
        this.onReject.forEach((callback) => callback(error));
        if (this.onFinally) {
          this.onFinally();
        }
      }
    };
  //
    try {
      callback(resolve, reject);
    } catch (error) {
      reject(error);
    }

  }
  
  CustomPromise2.prototype.then = function (onResolveFn, onRejectFn) {
    if(!onRejectFn && this.state === "rejected"){
        return new CustomPromise2((resolve,reject)=>{
            reject(this.error)
        });
    }

    return new CustomPromise2((resolve, reject) => {
        if (this.state === "pending"){
            if(onResolveFn){
                this.onResolve.push(()=>{
                    try {
                        const newValue = onResolveFn(this.value);
                        resolve(newValue);
                    } catch (err) {
                        reject(err)
                    }
                })
            }if(onRejectFn){
                this.onReject.push(()=>{
                    try {
                        const newValue = onRejectFn(this.error);
                        reject(newValue);
                    } catch (err) {
                        reject(err);
                    }
                })
            }

            return;
        }

        if(onResolveFn && this.state === "resolved"){
                try {
                    const newValue = onResolveFn(this.value);
                    resolve(newValue);
                } catch (err) {
                    reject(err)
                }
            return;
        }
        
        if(onRejectFn && this.state === "rejected"){
            try {
                const newValue = onRejectFn(this.error);
                reject(newValue);
            } catch (err) {
                reject(err);
            }
        return;
    }
    });
  };
  
  CustomPromise2.prototype.catch = function (onRejectFn) {
    return this.then(null, onRejectFn);
  };
  
  CustomPromise2.all = function (promises) {
    return new CustomPromise2( (resolve, reject)=> {
      const results = [];
      let completedPromises = 0;
      const numPromises = promises.length;
  
      if (numPromises === 0) {
        resolve(results);
      } else {
        promises.forEach( (promise, index) =>{
            
          promise
            .then(function (value) {
                
              results[index] = value;
              completedPromises++;
  
              if (completedPromises === numPromises) {
                resolve(results);
              }
            })
            .catch( (error)=> {
                reject(error)
            });
        });
      }
    });
  };
  
  CustomPromise2.prototype.finally = function (onFinally) {
    this.onFinally = onFinally;
    return this;
  };


  