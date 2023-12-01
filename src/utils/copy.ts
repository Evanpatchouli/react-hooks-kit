const copyByNavigator = (str?: string, thenFn?: () => void, catchFn?: (err: any) => void, finalFn?: () => void) => {
  navigator.clipboard
    .writeText(str ?? "")
    .then(() => {
      thenFn && thenFn();
    })
    .catch((err) => {
      catchFn && catchFn(err || new Error("Copy failed with some unknown error"));
    })
    .finally(() => {
      finalFn && finalFn();
    });
};

const copyByDocument = (str?: string, thenFn?: () => void, catchFn?: (err: any) => void, finalFn?: () => void) => {
  const input = document.createElement("textarea");
  input.value = str || "";
  document.body.appendChild(input);
  input.focus();
  input.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(input);
  if (ok) {
    thenFn && thenFn();
  } else {
    catchFn && catchFn(new Error("Copy failed with some unknown error"));
  }
};

let copy = (str?: string, thenFn?: () => void, catchFn?: (err: any) => void, finalFn?: () => void) => {
  if (navigator.clipboard && window.isSecureContext) {
    copyByNavigator(str, thenFn, catchFn, finalFn);
    copy = copyByNavigator;
  } else {
    copyByDocument(str, thenFn, catchFn, finalFn);
    copy = copyByDocument;
  }
};

export default copy;
