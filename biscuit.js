;(function(){
function cookiesToObj(){ 
    var obj = {};
    document.cookie.split('; ').forEach(function(v) {
        var x = v.split('=');
        obj[decodeURIComponent(x[0])] = decodeURIComponent(x[1]);
    });
    return obj;
}
this.biscuit = {
    get: function(key){
        var cookies = cookiesToObj();
        return (cookies.hasOwnProperty(key)?cookies[key]:false);
    },
    set: function(key, val, forever) {
        document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(val)
        + '; domain=' + window.location.host + '; path=/'
        + (forever?'; expires=Fri, 31 Dec 9999 23:59:59 GMT':'');
    },
    remove: function(key) {
        document.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=' + window.location.host + '; path=/';
    }
}       
}.call(this));