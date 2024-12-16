const observer = new MutationObserver(() => {
    const button = document.querySelector('.primary-btn.roll-btn');

    
    
    if (button && !button.hasAttribute('data-listener-added')) {
      button.addEventListener('click', () => {
        // 捕获当前页面上的所有 feed-card 元素
        const feedCards = document.querySelectorAll('.feed-card');
        const savedData = []; // 用于临时存储当前点击事件的数据
  
        if (feedCards.length > 0) {
          feedCards.forEach((card, index) => {
            // 在每个 feed-card 中查找 bili-video-card__info--tit 元素
            const titleElement = card.querySelector('.bili-video-card__info--tit');
            
            if (titleElement) {
              // 获取 title 属性值
              const title = titleElement.getAttribute('title');
              
              // 查找 titleElement 下的第一个子标签 <a>，获取 href 属性值
              const firstAnchor = titleElement.querySelector('a');
              const href = firstAnchor ? firstAnchor.getAttribute('href') : null;
              
              // 将 title 和 href 保存到数组中
              savedData.push({ title, href });
              
              console.log(`Feed Card ${index + 1}:`);
              console.log("Title:", title);
              console.log("First Anchor href:", href);
            } else {
              console.log(`Feed Card ${index + 1}: No bili-video-card__info--tit element found.`);
            }
          });
          
          // 从 chrome.storage.local 获取现有的 feedCardData
          chrome.storage.local.get('feedCardData', (result) => {
            let existingData = result.feedCardData || []; // 如果没有数据，则使用空数组
            if (existingData.length > 100) {
                // 删除前 10 条数据
                existingData.splice(0, 10);
              }
            
            // 将新的数据添加到现有的 feedCardData 数组中
            existingData = existingData.concat(savedData);
            
            // 将更新后的数据存储回 chrome.storage.local
            chrome.storage.local.set({ feedCardData: existingData }, () => {
              console.log('Updated feedCardData saved to chrome.storage:', existingData);
            });

          });

        } else {
          console.log('No feed-card elements found on the page.');
        }
      });
  
      button.setAttribute('data-listener-added', 'true');
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });