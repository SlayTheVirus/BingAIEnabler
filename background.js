function fn(x) {
  for (var header of x.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.100.0";
    }
  }
  return { requestHeaders: x.requestHeaders };
}

chrome.webRequest.onBeforeSendHeaders.addListener(fn, { urls: ["*://*.bing.com/*"] }, ["blocking", "requestHeaders"]);

chrome.browserAction.onClicked.addListener(function (e) {
  window.open("https://www.bing.com/search?form=MY0291&OCID=MY0291&q=Bing+AI&showconv=1", "_blank")
});
