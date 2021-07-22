let isTinyScreen = window.matchMedia("only screen and (max-width: 750px)").matches;

function main() {}
  if (isTinyScreen) {
    location.replace("mobile.html");
  }
main();
