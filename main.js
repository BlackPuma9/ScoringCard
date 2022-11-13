  window.onload=function(){
    const btn = document.getElementById('submit_btn');

      btn.addEventListener('click', function formValidation(event) {
      event.preventDefault();
        // All the constant that takes elements by Ids
        const number = document.getElementById('casenumber');
        const qaEmail = document.getElementById('qa_mail');
        const agentEmail = document.getElementById('agent_mail');
        const qacomment = document.getElementById('qacomment');

        // Below all the patterns
        const emailRegExp =/.+@scori\.com/;
        const caseRegExp = /^\d-\d\d\d\d\d\d\d\d\d$/;

        // Execute object in console log once QA click Submit btn
        console.log([
          caseRegExp.test(number.value), 
          emailRegExp.test(qaEmail.value),
          emailRegExp.test(agentEmail.value),
          qacomment.value
        ]);
    });
  }