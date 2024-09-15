// Selected the form and resume display elements
var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
// Added an event listener to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevented the form from refreshing the page
    // Captured the input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Generated the resume HTML
    var resumeHTML = "\n        <h2 style= \"text-align: center;\n         line-height: 1.5;\n         margin-top:6px;\n        margin-bottom:6px;\">".concat(name, "</h2>\n        <h4 style= \"text-align: center;\n        line-height: 1.5;\n        margin-top:6px;\n        margin-bottom:6px;\">Email: ").concat(email, "</h4>\n        <h4 style= \"text-align: center;\n        line-height: 1.5;\n        margin-top:6px;\n        margin-bottom:6px;\">Contact: ").concat(contact, "</h4>\n        <h3 style=\"line-height: 1.5;\n        margin-top:3px;\n        margin-bottom:3px;\">Education:</h3>\n        <p style=\"line-height: 1.5;\n        margin-top:3px;\n        margin-bottom:3px;\n       \">").concat(education.replace(/\n/g, '<br>'), "</p>\n        <h3 style=\"line-height: 1.5;\n        margin-top:3px;\n        margin-bottom:3px;\">Work Experience:</h3>\n        <p style=\"line-height: 1.5;\n        margin-top:3px;\n        margin-bottom:3px;\n       \">").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n        <h3 style=\"line-height: 1.5;\n        margin-top:3px;\n        margin-bottom:3px;\">Skills:</h3>\n        <p style=\"line-height: 1.5;\n        margin-top:3px;\n        margin-bottom:3px;\n        \">").concat(skills.replace(/\n/g, '<br>'), "</p>\n    ");
    // Displaying the generated resume
    resumeContent.innerHTML = resumeHTML;
});
