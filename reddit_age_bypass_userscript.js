// ==UserScript==
// @name         Reddit Age Bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bypass the "open in app prompt" for nsfw posts, use in combination with ublock
// @author       Bababoiiiii
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

// Use in Combination with this ublock filter (block this url: www.redditstatic.com/shreddit/*nsfw-blocking-*.js)
// ||www.redditstatic.com/shreddit/*nsfw-blocking-*.js$script,domain=www.reddit.com
// This Ublock filter can be used as a replacement for this script, i dont know if it has any other impact though
// www.reddit.com##div.prompt

(function() {
    function wait_and_remove() {
        let icon;
        const wait = setInterval(() => {

            icon = document.querySelector("span.flex.gap-xs.items-center.pr-xs.truncate > span > faceplate-tracker > a > div");
            if (icon !== null) {

                clearInterval(wait);
                // check if the icon is nsfw -> post is nsfw
                if (icon.querySelector("icon-nsfw") !== null) {

                    let blur_elem;
                    document.querySelectorAll("xpromo-nsfw-blocking-container").forEach(blur_elem => blur_elem.shadowRoot.querySelector("div.prompt").remove());
                    console.log("[Reddit Age Bypass] Bypass successfull");
                }
            }
        }, 1000);
    }
    window.navigation.addEventListener("navigate", () => wait_and_remove());
    wait_and_remove();

})();
