const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.getElementById('qrContainer');
const rawPayload = document.getElementById('rawPayload');
let currentDataUrl = '';

function buildVCard(name, phone, email) {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${name}`,
    `TEL:${phone}`,
    `EMAIL:${email}`,
    'END:VCARD'
  ].join('\n');
}

function renderQR(payload) {
  qrContainer.innerHTML = '';
  rawPayload.textContent = payload;
  downloadBtn.disabled = true;

  QRCode.toDataURL(payload, { width: 260, margin: 1 }, (error, url) => {
    if (error) {
      qrContainer.textContent = 'Unable to generate QR code.';
      console.error(error);
      return;
    }

    currentDataUrl = url;
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Contact QR code';
    qrContainer.appendChild(img);
    downloadBtn.disabled = false;
  });
}

function generate() {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !phone || !email) {
    alert('Please fill in all fields before generating the QR code.');
    return;
  }

  const payload = buildVCard(name, phone, email);
  renderQR(payload);
}

function downloadQRCode() {
  if (!currentDataUrl) {
    return;
  }

  const link = document.createElement('a');
  link.href = currentDataUrl;
  link.download = 'contact-qr.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

generateBtn.addEventListener('click', generate);
downloadBtn.addEventListener('click', downloadQRCode);

// Generate the default QR on page load.
generate();
