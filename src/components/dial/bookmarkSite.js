function bookmarkSite(title, url, callback) {
  if (window.sidebar && window.sidebar.addPanel) {
    // Firefox <23
    window.sidebar.addPanel(title, url, "");
  } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
    // Firefox 23+ and Opera
    var bookmarkLink = document.createElement("a");
    bookmarkLink.href = url;
    bookmarkLink.title = title;
    bookmarkLink.rel = "sidebar";
    document.body.appendChild(bookmarkLink);
    bookmarkLink.click();
    document.body.removeChild(bookmarkLink);
  } else if (window.external && "AddFavorite" in window.external) {
    // IE Favorite
    window.external.AddFavorite(url, title);
  } else {
    const hoykeys = [/Mac/i.test(navigator.platform) ? "Cmd" : "Ctrl", "D"];
    // Other browsers (mainly WebKit & Blink - Safari, Chrome, etc.)
    if (callback) {
      callback(hoykeys);
    } else {
      alert("Press " + hoykeys[0] + " + D to bookmark this page.");
    }
  }
}

export default bookmarkSite;
