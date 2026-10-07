function requestValidator(obj){
    const methodValid = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versionsValid = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriValid = /^([A-Za-z0-9.]+|\*)$/;
    const messageValid = /^[^<>\\&'"]*$/;

    if(!obj.hasOwnProperty('method') || !methodValid.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!obj.hasOwnProperty('uri') || !uriValid.test(obj.uri)){
        throw new Error ('Invalid request header: Invalid URI');
    }

    if(!obj.hasOwnProperty('version') || !versionsValid.includes(obj.version)){
        throw new Error ('Invalid request header: Invalid Version');
    }

    if(!obj.hasOwnProperty('message') || !messageValid.test(obj.message)){
        throw new Error ('Invalid request header: Invalid Message');
    }

    return obj;
}

console.log(requestValidator({ method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '' }));
// → обекта
