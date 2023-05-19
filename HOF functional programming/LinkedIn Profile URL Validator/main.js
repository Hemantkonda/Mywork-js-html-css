function validLinkedinUrl(url){

    const urlRegex = /^https:\/\/www.\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return urlRegex.test(url);
}

const url1 = 'https://www.linkedin.com/in/johndoe123';
const url2 = 'https://www.linkedin.com/in/jane_doe-123';
const url3 = 'https://www.linkedin.com/in/jo';
const url4 = 'https://www.linkedin.com/in/hemant-konda-3bb91a227';

console.log(validLinkedinUrl(url1));
console.log(validLinkedinUrl(url2));
console.log(validLinkedinUrl(url3));
console.log(validLinkedinUrl(url4));

