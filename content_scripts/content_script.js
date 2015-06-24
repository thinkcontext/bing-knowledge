console.log('content_script');
var props = {
  'data-visualization':'linksandimages',
  'data-carouselstate':'expanded',
  'data-strength':'moderate',
  'data-maxlinks':'12',
  'data-maxentitylinks':'4',
  'data-maxparagraphlinks':'5',
  'data-version':'1.0b',
  'data-autosnapshot':'true',
  'data-id':'829a001add0c423c851b167315a8bd8f',
  'data-options':'dc=dashblack,cse=1'
  },
  keys = [
      'visualization','carouselstate','strength','maxlinks','maxentitylinks','maxparagraphlinks','version','autosnapshot','id','options'
    ],
  el = document.createElement('script');

el.setAttribute('type','text/javascript');
el.setAttribute('src','//www.bing.com/widget/bootstrap.js');

// set defaults
for(var k in props){
  el.setAttribute(k,props[k]);
}

chrome.storage.sync.get(keys, function(items){
    for(var k in items){
      el.setAttribute('data-' + k,items[k]);
    }
    document.body.appendChild(el);
  });
