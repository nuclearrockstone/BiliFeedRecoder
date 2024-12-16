// feedData.js

document.addEventListener('DOMContentLoaded', () => {
    // 获取 feedCardData 数据
    chrome.storage.local.get('feedCardData', (result) => {
      const feedCardData = result.feedCardData || [];
      const listContainer = document.getElementById('feed-card-list');
      
      if (feedCardData.length > 0) {
        // 遍历 feedCardData 并显示每项数据
        feedCardData.forEach((item, index) => {
          const feedCardDiv = document.createElement('div');
          feedCardDiv.className = 'feed-card';
          
          // 创建并显示数字序号
          const indexElement = document.createElement('p');
          indexElement.textContent = `#${index + 1}`;  // 加 1 使序号从 1 开始
          
          const titleElement = document.createElement('p');
          titleElement.textContent = `Title: ${item.title}`;
          
          const linkElement = document.createElement('a');
          linkElement.href = item.href;
          linkElement.target = '_blank'; // 新窗口打开链接
          linkElement.textContent = 'Open Video';
          
          // 将序号、标题和链接添加到 feedCardDiv
          feedCardDiv.appendChild(indexElement);
          feedCardDiv.appendChild(titleElement);
          feedCardDiv.appendChild(linkElement);
          
          listContainer.appendChild(feedCardDiv);
        });
      } else {
        listContainer.textContent = 'No feed card data found.';
      }
    });
  });
  