/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
 work contains an array of jobs.
 Each job object in jobs should contain an employer, title, location,
 dates worked and description.

 projects contains an array of projects.
 Each project object in projects should contain a title, dates worked,
 description, and an images array with URL strings for project images.

 bio contains a name, role, welcomeMessage, contacts object and skills array.
 The contacts object should contain (but doesn't have to) a mobile number,
 email address, github username, twitter handle and location.

 education contains an array of schools. Each school object in
 schools contains a name, location, degree, majors array, dates attended
 and a url for the school's website.
 education also contains an onlineCourses array.
 Each onlineCourse object in onlineCourses should contain a title, school,
 dates attended and a url for the course.
 */


var bio = {
    "name": "Roger Rüttimann",
    "role": "Software developer",
    "welcomeMessage": "Ours is a world where people do not know what they want and are willing to go through hell to get it.",
    "contacts": {
//        "mobile": "---",
        "email": "roger@azy.ch",
        "github": "rroger",
//        "twitter": "",
        "location": "Zürich"
    },
    "bioPic": "https://lh3.googleusercontent.com/-f_e8dpXkIvI/AAAAAAAAAAI/AAAAAAAAD74/-oso8Zzv9U0/s120-c/photo.jpg",
    "skills":
        [
            "teamorientiert",
            "ausdauernd",
            "belastbar",
            "ruhig",
            "ausgeglichen",
            "lösungsorientiert+",
        ]
};

var work = {
    "jobs": [
        {
            "employer": "Hostpoint",
            "title": "Backend Software Developer",
            "location": "Jona",
            "dates": "2015/01 - 2015/05",
            "description": "Mitarbeit am hauseigenen Control Panel, Einrichten einer Testumgebung mit Vagrant und Chef"
        },
        {
            "employer": "Edition Renteria SA resp. news aktuell (Schweiz) AG}",
            "title": "Software Developer",
            "location": "Zürich",
            "dates": "2011/06 - 2014/05",
            "description": "Entwicklung eines Redaktions- und Buchproduktionssystems auf Basis von Python, Django, Celery, ReportLab und PostgreSQL"
        },
        {
            "employer": "Edition Renteria SA",
            "title": "IT Verantwortlicher",
            "location": "Zürich",
            "dates": "2080/08 - 2009/09",
            "description": "Support für Webapplikationen der Renteria SA. Unterhalt einer Filemaker Datenbankanwendung und technische Begleitung der Produktion des Schweizer PR- & Medienverzeichnisses und des Mediadatenhandbuches."
        },
        {
            "employer": "Berner Fachhochschule",
            "title": "Mitarbeit an einer Java Fotobuchanwendung",
            "location": "Biel",
            "dates": "2007/12 - 2008/11",
            "description": "Der Aufgabenbereich bestand aus selbständigem Programmieren einzelner Komponenten mit Java, JSF und MySQL, sowie dem Erstellen von JUnit- und Anwendungstests."
        },
        {
            "employer": "Zürich Financial Services",
            "title": "Praktikum mit anschliessender Teilzeitbeschäftigung",
            "location": "Zürich",
            "dates": "2005/08 - 2005/12",
            "description": "Entwicklung eines Datenanalyse- und Exporttools mit Excel/Visual Basic für Lotus Notes Datenssätze und Verfassen eines Benutzerhandbuchs"
        },
    ],

};
var education  = {
    "schools": [
        {
            "name": "ZHAW",
            "city": "Winterthur",
            "degree": "BA",
            "major": ["CompSci"]
        },
        {
            "name": "UZH",
            "city": "Zürich",
            "degree": "-",
            "major": ["Philosophy", "German"]
        },
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//$("#main").append(["Roger Rüttimann"]);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
for(ii = 0; ii < bio.skills.length; ii++) {
    $("#skills-h3").append(HTMLskills.replace("%data%",bio.skills[ii]));
}

$("#workExperience").append(work["position"]);
$("#header").append(work["position"]);
$("#education").append(education.school);
$("#header").append(education.school);
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));