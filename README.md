## Tutorial on how to bypass the restrictions for NSFW posts if you are not logged in.

### 1. Block requests for the following script (enable access to the post):
```
www.redditstatic.com/shreddit/*xpromo-nsfw-blocking-modal-desktop-*.js
```
A Ublock filter would look like this
```
www.redditstatic.com/shreddit/*xpromo-nsfw-blocking-modal-desktop-*.js$script,domain=www.reddit.com
```
### 2. Now you can either use the script or add another Ublock filter (block the "open in app" popup)
#### 2.1 Ublock Filter (preferred)
```
www.reddit.com##div.prompt
```
The only reason you should not be using the filter is if it has an impact on other areas.
#### 2.2 Script
Use Tampermonkey to load the [userscript](https://github.com/bababoi-2/Reddit-Age-Bypass/blob/main/reddit_age_bypass_userscript.js), it is more precise than the Ublock filter.
