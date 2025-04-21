const userAgent = navigator.userAgent || navigator.vendor || window.opera;
const isAndroid = /android/i.test(userAgent);
const downloadLink = "https://drive.google.com/uc?export=download&id=1RfnbiZlVkW1wBavOPDIibQgt1eFXy7Hc";

const downloadBtn = document.getElementById('downloadBtn');
const autoDownloadBtn = document.getElementById('autoDownloadBtn');
const notAndroidMsg = document.getElementById('notAndroid');

if (isAndroid) {
  downloadBtn.classList.remove('hidden');
  autoDownloadBtn.classList.remove('hidden');

  downloadBtn.href = downloadLink;

  autoDownloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = 'my-app.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
} else {
  notAndroidMsg.classList.remove('hidden');
}