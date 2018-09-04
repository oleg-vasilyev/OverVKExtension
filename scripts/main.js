
const createAction = (btnID, redirectURL, actionName) => {
  document.querySelector(btnID).addEventListener('click', () => {
    chrome.tabs.update({
      url: redirectURL
    });

    chrome.tabs.onUpdated.addListener((tabId, info) => {
      if (info.status === 'complete') {

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

          chrome.storage.sync.get(actionName, (data) => {
            chrome.tabs.executeScript(null, { code: data[actionName] });
          });

        });
      }
    });
  });
}

createAction('#btn', 'https://vk.com/friends', 'HIDE_ALL_FRIENDS');
createAction('#btn1', 'https://vk.com/id0?45595714', 'ADD_TIMER_WITH_SIGNATURE');
