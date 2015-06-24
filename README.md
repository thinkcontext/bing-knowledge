Chrome extension for inserting the [Bing Knowledge Widget](https://www.bing.com/widget/knowledge) into the current page.  Install the extension from the Chrome store [here](https://chrome.google.com/webstore/detail/imcpgmmmelbmjoinffdjpkgjmooejkkp).

For the bookmarklet version for use in any browser, create a bookmark to the following:

    javascript:(function(){ var s=document.createElement('script'); s.setAttribute('type','text/javascript'); s.setAttribute('src','//www.bing.com/widget/bootstrap.js'); s.setAttribute('data-visualization','linksandimages'); s.setAttribute('data-carouselstate','expanded'); s.setAttribute('data-strength','moderate'); s.setAttribute('data-maxlinks','12'); s.setAttribute('data-maxentitylinks','4'); s.setAttribute('data-maxparagraphlinks','5'); s.setAttribute('data-version','1.0b'); s.setAttribute('data-autosnapshot','true'); s.setAttribute('data-id','829a001add0c423c851b167315a8bd8f'); s.setAttribute('data-options','dc=dashblack,cse=1'); document.body.appendChild(s); })()


![screenshot](https://github.com/thinkcontext/bing-knowledge/raw/master/icons/bing-screen-sm.png)
