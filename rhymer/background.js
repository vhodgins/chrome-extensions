chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  console.log(tab);
  chrome.windows.create({
    incognito: true,
    type: "normal",
    state: "maximized",
    url: "http://reddit.com/r/randnsfw"
  })
}
