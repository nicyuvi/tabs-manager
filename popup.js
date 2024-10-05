// const tabs = await chrome.tabs.query({
//   url: [
//     "https://www.google.com/",
//     // "https://developer.chrome.com/docs/webstore/*",
//     // "https://developer.chrome.com/docs/extensions/*",
//   ],
// });

// const collator = new Intl.Collator();
// tabs.sort((a, b) => collator.compare(a.title, b.title));
//
// const template = document.getElementById("li_template");
// const elements = new Set();
// for (const tab of tabs) {
//   const element = template.content.firstElementChild.cloneNode(true);
//
//   const title = tab.title.split("-")[0].trim();
//   const pathname = new URL(tab.url).pathname.slice("/docs".length);
//
//   element.querySelector(".title").textContent = title;
//   element.querySelector(".pathname").textContent = pathname;
//   element.querySelector("a").addEventListener("click", async () => {
//     // need to focus window as well as the active tab
//     await chrome.tabs.update(tab.id, { active: true });
//     await chrome.windows.update(tab.windowId, { focused: true });
//   });
//
//   elements.add(element);
// }
// console.log("elements", elements);
// document.querySelector("ul").append(...elements);

// async function getCurrentTab() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     // since only one tab should be active and in the current window at once
//     // the return variable should only have one entry
//     let activeTab = tabs[0];
//     console.log("activeTab", activeTab);
//   });
// }

// TODO:
// - how to get tab url with this. probably with permissions
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab);
  return tab;
}

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  getCurrentTab();
  // const tabIds = tabs.map(({ id }) => id);
  // if (tabIds.length) {
  //   const group = await chrome.tabs.group({ tabIds });
  //   await chrome.tabGroups.update(group, { title: "DOCS" });
  // }
});
