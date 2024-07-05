chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      handleUrlChange(changeInfo.url, tabId);
    }
  });
  
  function handleUrlChange(url, tabId) {
    const redditPattern = /^http:\/\/r\/(.+)/;
    const match = url.match(redditPattern);
  
    if (match) {
      const subreddit = match[1];
      const redditUrl = `https://www.reddit.com/r/${subreddit}`;
      chrome.tabs.update(tabId, { url: redditUrl });
    }
  }
  