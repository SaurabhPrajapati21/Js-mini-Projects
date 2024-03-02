let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function genrateQr() {
  if (qrtext.value.length > 0) {
    qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    imgbox.classList.add("showimg");
  } else {
    qrtext.classList.add("error");
    qrtext.style.border = "1px solid red";

    setTimeout(() => {
      qrtext.classList.remove("error");
      qrtext.style.border = "1px solid #494eea";
    }, 1000);
  }
}
