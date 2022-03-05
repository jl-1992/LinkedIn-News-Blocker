chrome.runtime.onInstalled.addListener(() => {
  console.log('hey, I hope this helps you become more present :). I recommend the book "I and Thou" by Martin Buber for some connection.');
});

chrome.webNavigation.onHistoryStateUpdated.addListener(async (details) => {
  if (details.url.includes("linkedin.com/feed")) {
    chrome.scripting.executeScript({
      target: {tabId: details.tabId, allFrames: false},
      files: ['hideFeed.js'],
    });
  }
});
