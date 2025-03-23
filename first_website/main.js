//refresh page
function refreshPage() {
  window.location.reload();
}

//https://jsfiddle.net/9bazc6hx/2/
//scroll to bottom of page
const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};

const scrollToBottom = () => {
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
};
