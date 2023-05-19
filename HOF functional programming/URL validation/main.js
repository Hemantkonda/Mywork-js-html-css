const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;

function isValidUrl(url){
    return urlRegex.test(url);
}

// Example usage
const url1 = "http://www.example.com";
const url2 = "https://example.com";
const url3 = "https://example.com/abc/def.html";
const url4 = "ftp//ftp.example.com";
const url5 = "https://example.com?param=value";
const url6 = "example.com";
const url7 = "htt://example";

console.log(`${url1} is ${isValidUrl(url1) ? "valid" : "invalid"}`);
console.log(`${url2} is ${isValidUrl(url2) ? "valid" : "invalid"}`);
console.log(`${url3} is ${isValidUrl(url3) ? "valid" : "invalid"}`);
console.log(`${url4} is ${isValidUrl(url4) ? "valid" : "invalid"}`);
console.log(`${url5} is ${isValidUrl(url5) ? "valid" : "invalid"}`);
console.log(`${url6} is ${isValidUrl(url6) ? "valid" : "invalid"}`);
console.log(`${url7} is ${isValidUrl(url7) ? "valid" : "invalid"}`);
