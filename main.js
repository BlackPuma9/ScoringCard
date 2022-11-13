  window.onload=function(){
    const btn = document.getElementById('submit_btn');

      btn.addEventListener('click', function formValidation(event) {
      event.preventDefault();
        // All the constant that takes elements by Ids
        const number = document.getElementById('casenumber');
        const qaEmail = document.getElementById('qa_mail');
        const agentEmail = document.getElementById('agent_mail');
        const qacomment = document.getElementById('qacomment');
        const improvArea = document.getElementById('improveline');
        const quater = document.getElementById('quater');
        const week = document.getElementById('week');
        const year = document.getElementById('year');
        const customerAut = document.querySelector('input[name = customer_authorization]:checked');
        const greetTone = document.querySelector('input[name = greetings_tone]:checked');
        const resolution = document.querySelector('input[name = case_resolution]:checked');
        const policy = document.getElementById('policy');
        const category = document.querySelector('input[name = case_category]:checked');
        const resolutionTime = document.querySelector('input[name = resolution_time]:checked');
        const transfer = document.querySelector('input[name = transfer]:checked');
        const accuracyReply = document.querySelector('input[name = reply_accuracy]:checked');
        const caseStatus = document.querySelector('input[name = case_status]:checked');
        const techChat = document.querySelector('input[name = tech_chat]:checked');
        const language = document.querySelector('input[name = language]:checked');




        if (!customerAut||!greetTone||!resolution||!category||!resolutionTime||!transfer||!accuracyReply||!caseStatus||!techChat||!language) {
          alert('Choose the markdowns');
        }

        // Below all the patterns
        const emailRegExp =/.+@scori\.com/;
        const caseRegExp = /^\d-\d\d\d\d\d\d\d\d\d$/;

        // Execute object in console log once QA click Submit btn
        console.log([
          caseRegExp.test(number.value), 
          emailRegExp.test(qaEmail.value),
          emailRegExp.test(agentEmail.value),
          qacomment.value,
          improvArea.value,
          quater.value,
          week.value,
          year.value,
          customerAut.value,
          greetTone.value,
          resolution.value,
          policy.value,
          category.value, 
          resolutionTime.value,
          transfer.value,
          accuracyReply.value,
          caseStatus.value,
          techChat.value,
          language.value
        ]);
    });
  }