var observer = new MutationObserver(function(mutations) {
 if (document.querySelector('aside div.mb2')) {
      document.querySelector('aside div.mb2').hidden = true;
      observer.disconnect();
  }
});

observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});