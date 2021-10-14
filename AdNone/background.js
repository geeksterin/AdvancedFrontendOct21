chrome.webRequest.onBeforeRequest.addListener(
    function(requestDetails) {
        let match = requestDetails.url.match(/.*:\/\/.*doubleclick\.net\/.*/g);

        // let domain = new URL(requestDetails.url).hostname;
        // console.log(domain);

        // Array.prototype.funNm = function() {
        //     return 'abcd';
        // }
        // let arr = [1, 2, 3, 4];
        // arr.funNm();

        if(match) {
            return {cancel: true};
        } else {
            return {cancel: false};
        }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);

//Reference Files - https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt
//Reference Files - https://raw.githubusercontent.com/notracking/hosts-blocklists/master/domains.txt


//DOM -> Document Object Model
//BOM -> Browser Object Model