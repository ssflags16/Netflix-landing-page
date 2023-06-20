const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
// function for selection
function selectItem(e) {}

// Select item
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});
