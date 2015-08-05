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
            "lösungs- und teamorientiert",
            "ausdauernd",
            "belastbar",
            "ruhig",
            "ausgeglichen",
        ]
};

var projects = {
    "projects": [
        {
            "title": "PRV Redaktionstool",
            "dates": "2012/09 - 2013/03",
            "description": "Entwicklung eines Redaktions- und Buchproduktionssystems auf Basis von Python, Django, Celery, ReportLab und PostgreSQL",
            "images": [
                "https://www.newsaktuell.ch/img/pr-software/medienhandbuch.jpg",
            ]
        }
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
            "name": "Universität Zürich",
            "location": "Zürich",
            "degree": "BA",
            "major": ["Philosophie"],
            "dates": "2015/09 - 2022/09",
            "url": "http://www.uzh.ch",
        },
        {
            "name": "ZHAW",
            "location": "Winterthur",
            "degree": "BA",
            "major": ["Computer Science"],
            "dates": "2010/09 - 2012/02",
            "url": "http://www.zhaw.ch",
        },
        {
            "name": "Universität Zürich",
            "location": "Zürich",
            "degree": "-",
            "major": ["Germanistik, Philosophie"],
            "dates": "2008/09 - 2010/06",
            "url": "http://www.uzh.ch",
        },
        {
            "name": "ETHZ",
            "location": "Zürich",
            "degree": "-",
            "major": ["Computer Science"],
            "dates": "2002/09 - 2007/02",
            "url": "http://www.ethz.ch",
        },
        {
            "name": "Kantonsschule",
            "location": "Sursee",
            "degree": "Matura",
            "major": ["Schwerpunktfach Wirtschaft und Recht"],
            "dates": "1996/08 - 2002/05",
            "url": "http://www.kssursee.ch",
        },
    ],
    onlineCourses: [
        {
            "title": "JavaScript Basics",
            "scool": "Udacity",
            "dates": "2015/07 - 2015/08",
            "url": "https://www.udacity.com/course/javascript-basics--ud804",
        },
        {
            "title": "Learning how to learn",
            "scool": "University of California, San Diego",
            "dates": "2015/07 - 2015/08",
            "url": "https://www.coursera.org/learn/learning-how-to-learn/",
        },
    ]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
//$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
//$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
//$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
//$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));