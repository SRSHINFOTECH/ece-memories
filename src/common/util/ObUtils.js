import React from "react";
function base64ToBlob(base64) {
  var binary = atob(base64);
  var array = new Uint8Array(binary.length);
  for (var i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }
  let url = URL.createObjectURL(new Blob([array]));
  return url;
}

function blobToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


export {
  base64ToBlob,
  blobToBase64
};
