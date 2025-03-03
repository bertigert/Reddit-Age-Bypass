## Tutorial on how to bypass the restrictions for NSFW posts, meaning you can view them even if you are not logged in.
> [Greazyfork](https://greasyfork.org/en/scripts/491441-reddit-age-bypass/code) [Github](https://github.com/bertigert/Reddit-Age-Bypass)

### 1. Block requests for the following script
```
www.redditstatic.com/shreddit/*xpromo-nsfw-blocking-modal-*.js
```
A Ublock filter would look like this
```
www.redditstatic.com/shreddit*xpromo-nsfw-blocking-modal-*.js$script,domain=www.reddit.com
```
> Step 1 is for removing this

> ![image](https://github.com/bababoi-2/Reddit-Age-Bypass/assets/165707934/4abe1401-bbcc-4d5d-b9fc-4ae6f753be90)\

### 2. Now you can either use the script or add another Ublock filter (This does not seem to be necessary anymore as of 09.2024)

#### 2.1 Ublock Filter (preferred)
```
www.reddit.com##div.prompt
```
The only reason you should not be using the filter is if it impacts other areas.
#### 2.2 Script
Use Tampermonkey to load the [userscript](https://github.com/bertigert/Reddit-Age-Bypass/blob/main/reddit_age_bypass_userscript.js), it is more precise than the Ublock filter.


> Step 2 is for removing this

> ![image](https://github.com/bababoi-2/Reddit-Age-Bypass/assets/165707934/265ae2fe-455a-4840-b012-23398e6431b2)
