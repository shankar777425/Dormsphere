document.querySelectorAll('.toggle-password').forEach(button=>{
  button.addEventListener('click',()=>{
    const input=document.getElementById(button.dataset.target);
    const hidden=input.type==='password';
    input.type=hidden?'text':'password';
    button.textContent=hidden?'Hide':'Show';
  });
});

const form=document.querySelector('.auth-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=document.querySelector('.message');
    if(!form.checkValidity()){form.reportValidity();return;}
    msg.textContent=form.dataset.mode==='signup'?'Account details are valid. Connect this form to your backend/auth provider to create the account.':'Login details are valid. Connect this form to your backend/auth provider to authenticate the user.';
    msg.classList.add('show');
  });
}
