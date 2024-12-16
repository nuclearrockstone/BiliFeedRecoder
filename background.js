 chrome.runtime.onInstalled.addListener(() => {
  console.log("BiliFeedRecorder Extension Installed!");
});

/* chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openPopup") {
    chrome.action.openPopup(); // 打开弹出页面
  }
});  */

// background.js

chrome.action.onClicked.addListener(() => {
  // 在点击插件图标时打开一个新的标签页，加载 popup.html
  chrome.tabs.create({
    url: 'popup.html'
  });
});

