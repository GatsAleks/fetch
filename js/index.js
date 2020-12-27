document.querySelector('.timestamp').innerText
    = new Date().toLocaleTimeString();

document.querySelector('.fetch-json')
    .addEventListener('click', fetchJson);

async function fetchJson() {
    const response = await fetch('client-data.json');
    const clientData = await response.json();
    document.querySelector('.client-name').innerText = clientData.name;
    document.querySelector('.account-balance').innerText = clientData.balance;
}