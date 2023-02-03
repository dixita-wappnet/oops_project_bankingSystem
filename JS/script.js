const loginArea = document.getElementById('login-area');
const dashboard = document.getElementById('dashboard');
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withsraw-btn');
const submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', () => {

    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
})

depositBtn.addEventListener('click', () => {

    const value =depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText  = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
})
if (btn){


withdrawBtn?.addEventListener('click', () => {

    const value = withdrawInput.value;
    const withdrawValue = Number(withdraw.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) - Number(value);
    withdraw.innerText  = withdrawValue;
    balance.innerText = balanceValue;
    withdrawInput.value = '';
});
}
