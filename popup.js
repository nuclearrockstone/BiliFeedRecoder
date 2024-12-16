/* document.addEventListener('DOMContentLoaded', () => {
  // 获取 feedCardData 数据
  chrome.storage.local.get('feedCardData', (result) => {
    const feedCardData = result.feedCardData || [];

    const listContainer = document.getElementById('feed-card-list');
    
    if (feedCardData.length > 0) {
      // 遍历 feedCardData 并显示每项数据
      feedCardData.forEach((item, index) => {
        const feedCardDiv = document.createElement('div');
        feedCardDiv.className = 'feed-card';
        
        const titleElement = document.createElement('p');
        titleElement.textContent = `Title: ${item.title}`;
        
        const linkElement = document.createElement('a');
        linkElement.href = item.href;
        linkElement.target = '_blank'; // 新窗口打开链接
        linkElement.textContent = 'Open Video';
        
        feedCardDiv.appendChild(titleElement);
        feedCardDiv.appendChild(linkElement);
        
        listContainer.appendChild(feedCardDiv);
      });
    } else {
      listContainer.textContent = 'No feed card data found.';
    }
  });
});
 */

// popup.js

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('viewFeedData');

  button.addEventListener('click', () => {
    // 获取 feedCardData 数据
    chrome.storage.local.get('feedCardData', (result) => {
      const feedCardData = result.feedCardData || [];

      // 打开一个新的标签页，展示 feedCardData
      const url = `feedData.html`;
      chrome.tabs.create({ url });
    });
  });
});
