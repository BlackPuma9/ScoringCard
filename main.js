/*
data_json is a json fine recieved from server

inside this json file you have next structure:
level1:{
section_leve2:[el_1, el_2, el_3]
}

Tasks:
1. Create a drop down to choose value from level1
2. Render section_level2 as name of the section
3. Render properties [el_1, el_2, el_3] from section_leve2 with checkboxes 
*/
const data_json = {"Project":{"Initiating":["To determine the requirements and objectives of the organization.","To evaluate previously performed or sustained operations.","To make cost calculations and create budgets.","Create a timeline.","To define the task table and product.","It is necessary to make the documents created into documents."],"Planning":["To create the planning team.","To decide how to plan.","Determine/define project scope.","Identifying the products that will emerge and making a business section","Estimating the resources required for studies","To create a time and cost estimate for the work to be done,","Identify problems that may occur","Planning crisis management for risk planning and possible problems,","It is necessary to obtain official approval."],"Executing":["What to do during the execution phase is as follows.","Efforts are made to achieve the goals specified in the project management plan.","It is very important for the project to proceed in accordance with the management plan by coordinating employees and resources at this stage."],"Monitoring and Controlling":["The following are the things to do during the monitoring and controlling phase of the project.","To see how much of the work carried out within the project has been completed.","Correct any problems that may or may not occur.","Review financial details with method plan.","To follow the budget and time progress of the projects."],"Closing":["Preparing and completing the administrative closing process of the project.","To close the contracts by ensuring the control of the purchase agreements.","To prepare the closing evaluation of the relevant project and make it into a document."]},"Budget":{"Income":["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Nulla id turpis condimentum, dictum est id, hendrerit metus."],"Fixed Expenses":["Quisque a odio rhoncus, bibendum augue ac, interdum nisi.","Phasellus bibendum tortor in varius faucibus.","Aenean molestie purus quis hendrerit tincidunt."],"Debt":["In pretium dolor eu dictum suscipit.","Morbi id enim at nisl semper eleifend.","Vestibulum molestie ante eu scelerisque bibendum.","Ut cursus justo sit amet leo tempus aliquam."],"Flexible and Unplanned Expenses":["Ut fermentum elit at luctus faucibus.","Vestibulum vestibulum velit eu sem commodo volutpat."],"Savings":["Vivamus sollicitudin nulla sit amet turpis blandit vestibulum."]}}
