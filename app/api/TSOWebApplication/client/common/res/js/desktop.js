const button           = document.getElementById('fetchButton');
const btnText          = document.getElementById('btnText');
const feedback         = document.getElementById('feedback');
const redirectLinkElement = document.getElementById('feedback-tx-child-redirecthelp');
const redirectLink     = document.getElementById('feedback-redirect-link');
const loadingImg       = document.getElementById('loadingImg');
const errorImg         = document.getElementById('errorImg');
const successImg       = document.getElementById('successImg');
const inputIPElement   = document.getElementById('in.address');
const inputPortElement = document.getElementById('in.port');

const STORAGE_KEY = 'webPortalPresence';

async function checkPresence(inputIP, inputPort) {
  inputIPElement.classList.remove('red-border');
  inputPortElement.classList.remove('red-border');
  inputIPElement.placeholder = 'IP address';
  inputPortElement.placeholder = 'Port';

  if (!inputIP) {
    inputIPElement.classList.add('red-border');
    inputIPElement.placeholder = 'Please enter an IP address.';
    return false;
  }
  if (!inputPort) {
    inputPortElement.classList.add('red-border');
    inputPortElement.placeholder = 'Please enter a port.';
    return false;
  }
  const portNum = Number(inputPort);
  if (!Number.isInteger(portNum) || portNum < 1 || portNum > 65535) {
    inputPortElement.classList.add('red-border');
    inputPortElement.placeholder = 'Port must be 1–65535.';
    return false;
  }

  const api = `http://${inputIP}:${inputPort}/backend/api/presence?type=fetch&method=js&from=github-portal&client=native-desktop-web&return=success`;
  const resolverDesktop = `http://${inputIP}:${inputPort}/backend/api/resolve?type=redirect&client=native-desktop-web&from=github-portal&short=desktop&doesAcceptTelemetry=true&endpoint=TSOApp-Blend-Final/login&token=NOTOKEN`

  button.disabled = true;
  btnText.style.display = 'none';
  loadingImg.classList.remove('hide');
  errorImg.classList.add('hide');
  redirectLinkElement.classList.add('hide');
  successImg.classList.add('hide');
  feedback.textContent = '';

  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error(`Status ${response.status}`);

    console.log(response.status);
    successImg.classList.remove('hide');
    loadingImg.classList.add('hide');
    feedback.textContent = 'Success! Redirecting you shortly!';
    redirectLinkElement.classList.remove('hide');
    redirectLink.href = resolverDesktop;
    
    const delay = Math.floor(Math.random() * 1000)
        function letLoadTime() {
          setTimeout(() => {
            window.location.href = resolverDesktop;
          }, delay);
         }

        letLoadTime();

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ip: inputIP, port: inputPort }));
    return true;
  } catch (err) {
    console.error(err);
    loadingImg.classList.add('hide');
    errorImg.classList.remove('hide');
    feedback.textContent =
      `Could not check presence for the Web Portal at ${inputIP} on port ${inputPort}, is the server down? (${err})`;
    return false;
  } finally {
    button.disabled = false;
    btnText.style.display = 'block';
  }
}

button.addEventListener('click', () => {
  checkPresence(inputIPElement.value.trim(), inputPortElement.value.trim());
});

(function initFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }
  if (!saved?.ip || !saved?.port) return;

  inputIPElement.value   = saved.ip;
  inputPortElement.value = saved.port;
  checkPresence(saved.ip, saved.port);
})();