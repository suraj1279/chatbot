let seeBtn = document.querySelector(".see");
let scroll = document.querySelector(".scroll");
let loader = document.querySelector(".loader");
let massenger = document.querySelector(".massnger");
let container = document.querySelector(".container");
let popup = document.querySelector(".popup");
let chatBox = document.querySelector(".chat-box");
let icon = document.querySelector(".see i");
let msgInp = document.querySelector(".message");
let innerMsg = document.querySelector(".message::placeholder");
let chatTime = document.querySelector(".chat-time");
let sendBtn = document.querySelector(".send");
let chats = document.querySelector(".chats");
let headerMenu = document.querySelector(".header-menu-details");
let headerMenuBtn = document.querySelector(".header-menu-btn");
let clearAll = document.querySelector(".clear-all");
let clearAllTxt = document.querySelector(".clear-all a");
let settingBtn = document.querySelector(".setting");
let fontLab = document.querySelector(".font-lab");
let noMsgTxt = document.querySelector(".no-message");
let closeSet = document.querySelector(".close-setting");
let confirmSet = document.querySelector(".confirm-setting");
let report = document.querySelector(".report");
let closeReport = document.querySelector(".close-report");
let reportCon = document.querySelector(".report-container");
let confirmReport = document.querySelector(".confirm-report");
let blockBtn = document.querySelector(".block-user");
let blockCon = document.querySelector(".block-container");
let unblockBtn = document.querySelector(".unblock-btn");
let setCon = document.querySelector(".setting-container");
let fontRange = document.querySelector(".range-font");
let chat = document.querySelectorAll(".chat");
let msgFontOnSets = document.querySelectorAll(".setting-messages-text");
let fontSizeVal = document.querySelector(".font-size-value");
let fontWeightTxt = document.querySelector(".font-weight-value");
let fontWeightInp = document.querySelector(".weight-font");
setTimeout(function () {
  massenger.classList.add("show");
  loader.style.display = "none";
  alert("Hey guys, bot here pls wait ):");
}, 4000);
var fontVal = fontRange.value;
fontSizeVal.textContent = `${fontVal}px`;
var fontWeightTxtV = fontWeightInp.value;
fontWeightTxt.textContent = `${fontWeightTxtV}`;
msgFontOnSets.forEach((msgFontOnSet) => {
  msgFontOnSet.style.fontSize = `${fontVal}px`;
  msgFontOnSet.style.fontWeight = `${fontWeightTxtV}`;
});
fontRange.oninput = () => {
  fontVal = fontRange.value;
  fontSizeVal.textContent = `${fontVal}px`;
  msgFontOnSets.forEach((msgFontOnSet) => {
    msgFontOnSet.style.fontSize = `${fontVal}px`;
    msgFontOnSet.style.fontWeight = `${fontWeightTxtV}`;
  });
};
fontWeightInp.oninput = () => {
  fontWeightTxtV = fontWeightInp.value;
  fontWeightTxt.textContent = `${fontWeightTxtV}`;
  msgFontOnSets.forEach((msgFontOnSet) => {
    msgFontOnSet.style.fontSize = `${fontVal}px`;
    msgFontOnSet.style.fontWeight = `${fontWeightTxtV}`;
  });
};
headerMenuBtn.onclick = (e) => {
  if (!headerMenu.classList.contains("open")) {
    headerMenu.classList.add("open");
  } else {
    headerMenu.classList.remove("open");
  }
};
chatBox.onclick = () => {
  headerMenu.classList.remove("open");
};
settingBtn.onclick = () => {
  setCon.style.display = "block";
  headerMenu.classList.remove("open");
  popup.style.display = "block";
};
report.onclick = (e) => {
  headerMenu.classList.remove("open");
  reportCon.style.display = "block";
  popup.style.display = "block";
};
closeReport.onclick = () => {
  reportCon.style.display = "none";
  popup.style.display = "none";
};
confirmReport.onclick = (e) => {
  let reportMsg = confirm("Do you really wanna report?");
  if (reportMsg) {
    alert("You reported the bot");
    reportCon.style.display = "none";
    popup.style.display = "none";
  }
};
closeSet.onclick = () => {
  fontVal = fontRange.value;
  fontWeightTxtV = fontWeightInp.value;
  fontWeightTxtV = 350;
  fontVal = 16;
  setCon.style.display = "none";
  popup.style.display = "none";
};
confirmSet.onclick = () => {
  fontVal = fontRange.value;
  fontWeightTxtV = fontWeightInp.value;
  setCon.style.display = "none";
  popup.style.display = "none";
};
clearAll.classList.add("lock");
clearAllTxt.style.opacity = ".5";
clearAll.onclick = (e) => {
  popup.style.display = "block";
  let confirmMsg = confirm("Do you want to clear all the messages?");
  if (confirmMsg) {
    chatTime.style.display = "none";
    noMsgTxt.style.display = "block";
    chats.innerHTML = ``;
    popup.style.display = "none";
  } else {
    popup.style.display = "none";
  }
  headerMenu.classList.remove("open");
  e.target.classList.add("lock");
  clearAllTxt.style.opacity = ".5";
};
blockBtn.onclick = (e) => {
  popup.style.display = "block";
  headerMenu.classList.remove("open");
  let botBlock = confirm("Do you wanna block the bot?");
  if (botBlock) {
    msgInp.classList.add("lock");
    blockBtn.style.opacity = ".5";
    blockCon.classList.add("unblock-show");
    popup.style.display = "none";
    e.target.classList.add("lock");
  } else {
    popup.style.display = "none";
  }
};
unblockBtn.onclick = () => {
  setTimeout(function () {
    blockCon.classList.remove("unblock-show");
    msgInp.classList.remove("lock");
    blockBtn.classList.remove("lock");
    blockBtn.style.opacity = "1";
  }, 1000);
};
popup.onclick = () => {
  popup.style.display = "none";
  if ((reportCon.style.display = "block")) {
    reportCon.style.display = "none";
  }
  if ((setCon.style.display = "block")) {
    setCon.style.display = "none";
  }
};
msgInp.onclick = () => {
  msgInp.focus();
  headerMenu.classList.remove("open");
};
var msgVal = msgInp.value;
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
if (hour < 10) {
  hour = "0" + hour;
}
if (min < 10) {
  min = "0" + min;
}
var nowTime = `${hour}:${min}`;
if (hour < 24 || hour > 12) {
  chatTime.textContent = "Today";
} else {
  chatTime.textContent = "Yesterday";
}

msgInp.onkeyup = () => {
  msgVal = msgInp.value;
  if (msgVal == 0) {
    sendBtn.classList.remove("show-send");
  } else {
    sendBtn.classList.add("show-send");
  }
};

let userMsg = document.createElement("div");
function userMsgSending() {
  msgVal = msgInp.value;
  fontWeightTxtV = fontWeightInp.value;
  noMsgTxt.style.display = "none";
  chatTime.style.display = "block";
  userMsg = document.createElement("div");
  userMsg.className = "user chat";
  userMsg.onmousedown = (e) => {
    let deleteMsg = confirm("Do you wanna delete this message?");
    if (deleteMsg) {
      e.currentTarget.remove();
    }
  };
  let message = "";

  message += `<p style="font-size:${fontVal}px;font-weight:${fontWeightTxtV};">${msgVal}</p><span>${nowTime}</span>`;
  userMsg.innerHTML = message;
  chats.appendChild(userMsg).scrollIntoView();

  setTimeout(function () {
    msgInp.value = "";
  }, 700);
}
let botResponse;
function botMsgSending() {
  msgVal = msgInp.value;
  fontWeightTxtV = fontWeightInp.value;
  // Massages Part Start
  if (msgVal.trim() == "hi" || msgVal.trim() == "Hi") {
    botResponse = "Hello";
  } else if (
    msgVal.trim() == "How are you?" ||
    msgVal.trim() == "how are you?"
  ) {
    botResponse = "Thanks how about you?";
  } else if (
    msgVal.trim() == "I'm fine" ||
    msgVal.trim() == "fine" ||
    msgVal.trim() == "thanks" ||
    msgVal.trim() == "Thanks" ||
    msgVal.trim() == "Thank you" ||
    msgVal.trim() == "thank you"
  ) {
    botResponse = "Great";
  } else if (msgVal.trim() == "Where are you from?") {
    botResponse = "I don't know ):";
  } else if (msgVal.trim() == "ok" || msgVal.trim() == "Ok") {
    botResponse = "Nice What is your name?";
  } else {
    botResponse = "Would you please ask again?";
  }
  // Massages Part End
  let botMsg = document.createElement("div");
  botMsg.className = "bot chat";
  let botMessage = "";
  botMessage += `<p style="font-size:${fontVal}px;font-weight: ${fontWeightTxtV};">${botResponse}</p><span>${nowTime}</span>`;
  botMsg.innerHTML = botMessage;
  chats.appendChild(botMsg).scrollIntoView();
}
sendBtn.addEventListener("click", () => {
  sendBtn.classList.remove("show-send");
  msgVal = msgInp.value;
  userMsgSending();
  setTimeout(function () {
    botMsgSending();
  }, 699);
  msgInp.focus();
  clearAll.classList.remove("lock");
  clearAllTxt.style.opacity = "1";
});
function noMsgShow() {
  noMsgTxt.style.display = "none";
}