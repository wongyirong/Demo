function conversation(param) {
    var pattern = /^(?:([A-Za-z]+):)?(?:\/{0,3})([0-9.\-A-Aa-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/g;
    var urlObj = {};
    var search = param;
    
    search.replace(pattern, function (rs, $1, $2, $3, $4, $5, $6) {
        var value1 = decodeURIComponent($1);
        var value2 = decodeURIComponent($2);
        var value3 = decodeURIComponent($3);
        var value4 = decodeURIComponent($4);
        var value5 = decodeURIComponent($5);
        var value6 = decodeURIComponent($6);

        urlObj["scheme"] = value1;
        urlObj["host"] = value2;
        urlObj["port"] = value3;
        urlObj["path"] = value4;
        
        urlObj["queries"] = value5;
        urlObj["hash"] = value6;
        return rs;
    });
    console.log(urlObj);
    return urlObj;
}
 
//测试：
conversation ("https://www.example.com:8080/a/b/c?q=234&p=abc#header");
