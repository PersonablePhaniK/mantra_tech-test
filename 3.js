const cheerio = require('cheerio');
const request = require('request');


request({
    method: 'GET',
    url: 'http://localhost:3000/'
}, (err, res, body) => {
    // console.log('Body: ', body)
    if (err) return console.error(err);

    let $ = cheerio.load(body);

    // let Meta = $('meta[name="description"]').attr('content');
    
    let Meta = $('meta');

    console.log(Meta);
    
});