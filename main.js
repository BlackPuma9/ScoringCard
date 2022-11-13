const btn = document.getElementById('btn');

btn.addEventListener('submit', function formValidation(event) {
  event.preventDefault();


  const idCase = document.getElementById('casenumber');
  const qaEmail = document.getElementById('qa_mail');
  const agentEmail = document.getElementById('agent_mail');

// const emailRegExp =/.+@scori\.com/;
// const caseRegExp = /^\d-\d\d\d\d\d\d\d\d\d$/;


  // console.log( emailRegExp.test(qaEmail.value) );
  console.log(idCase.value);


});

