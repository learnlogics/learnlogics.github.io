// creating a backend server for our website using nodejs ?
//importing the required packages, creating the host location and more.....
const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');
const hostname = '127.0.0.1';
const port = 80;

// reading the static files using file system module 
const home = fs.readFileSync('./index.html');
const notes = fs.readFileSync('./resources.html');
const blog = fs.readFileSync('./blog.html');
const contact = fs.readFileSync('./contact.html');
const about = fs.readFileSync('./aboutme.html');
const terms = fs.readFileSync('./termsandconditions.html');
const login = fs.readFileSync('./login.html');
const signin = fs.readFileSync('./signin.html');

// python notes files reading 
const py01 = fs.readFileSync('./pythonnotes/01_pythoninstallation.html');
const py02 = fs.readFileSync('./pythonnotes/02_introduction.html');
const py03 = fs.readFileSync('./pythonnotes/03_pycharminstallation.html')
const py04 = fs.readFileSync('./pythonnotes/04_series.html');
const py05 = fs.readFileSync('./pythonnotes/05_indexing.html');
const py06 = fs.readFileSync('./pythonnotes//06_slicing.html');
const py07 = fs.readFileSync('./pythonnotes/07_seriesattributes.html');
const py08 = fs.readFileSync('./pythonnotes/08_nan.html');
const py09 = fs.readFileSync('./pythonnotes/09_head.html');
const py10 = fs.readFileSync('./pythonnotes/10_math.html');
const py11 = fs.readFileSync('./pythonnotes/11_dataframe.html');
const py12 = fs.readFileSync('./pythonnotes/12_dfcsv.html');
const py13 = fs.readFileSync('./pythonnotes/13_dfattributes.html');
const py14 = fs.readFileSync('./pythonnotes/14_ilocmethods.html')
const py15 = fs.readFileSync('./pythonnotes/15_locmethods.html');
const py16 = fs.readFileSync('./pythonnotes/16_addingcolumn.html');
const py17 = fs.readFileSync('./pythonnotes/17_addingrow.html');
const py18 = fs.readFileSync('./pythonnotes/18_deletingcolumn.html');
const py19 = fs.readFileSync('./pythonnotes/19_deletingrow.html');
const py20 = fs.readFileSync('./pythonnotes/20_renaminglabels.html');


// reading the static css files to be served by the server 
const style = fs.readFileSync('./style.css');
const ipad = fs.readFileSync('./ipad.css');
const ipadmini = fs.readFileSync('./ipadmini.css');
const phone = fs.readFileSync('./phone.css');


// reading the static images using file system module 
const compnetworking = fs.readFileSync('./img/computernetworking.png');
const container1 = fs.readFileSync('./img/container1.jpg');
const favicon = fs.readFileSync('./img/favicon.ico.png');
const hi = fs.readFileSync('./img/hi.png');
const imp = fs.readFileSync('./img/imp series.png');
const logo1 = fs.readFileSync('./img/logo1.png');
const me = fs.readFileSync('./img/computernetworking.png');
const mysql = fs.readFileSync('./img/mysql.png');
const practical = fs.readFileSync('./img/practical.png');
const py = fs.readFileSync('./img/py.webp');
const pyqs = fs.readFileSync('./img/pyqs.png');
const python = fs.readFileSync('./img/python.png');
const socialimpacts = fs.readFileSync('./img/socialimpacts.png');
const user = fs.readFileSync('./img/user.png');
const yt = fs.readFileSync('./img/yt.png');
const pythonnotes = fs.readFileSync('./img/pynotes.png');
const mysqlnotes = fs.readFileSync('./img/mysqlnotes.png');
const networkingnotes = fs.readFileSync('./img/computernetworkingnotes.png');
const socialimpactsnotes = fs.readFileSync('./img/socialimpactsnotes.png');


// creating an app using js and writing use command for serving static files 
const app = express();
app.use(express.static('./'));//declaring the whole folder as a static folder so that it can be used for serving files
app.use('/',express.static('static'));//using static files in iphm folder or directory
app.use('/img', express.static('./img'));//using static imgs in the img folder or directory





// Saving the data filled by the user to the database 
const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://localhost/signin", {useNewUrlParser: true}, {useUnifiedTopology: true});
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine',"ejs");

// defining the mongoose schema for the signin form 
const signIn = new mongoose.Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    password: String,
    message: String
});
const logIn = new mongoose.Schema({
    email: String,
    password: String
});

const Signin = mongoose.model('signinCollection',signIn);
app.post("/signin.html",(req,res)=>{
    var data = new Signin({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password,
        message: req.body.message
    })
    data.save().then(()=>{
        res.send("Data saved succefully....");
    }).catch(()=>{
        res.send("Couldn't record data");
    })
});
const Login = mongoose.model('loginCollection',logIn);
app.post('/login.html',(req,res)=>{
    var data = new Login({
        email: req.body.email,
        password: req.body.password
    });
    data.save().then(()=>{
        res.send("Data saved succesfully....");
    }).catch(()=>{
        res.send("Couldn't record data");
    })
})

// serving static html files on get requests 
app.get("/",(req,res)=>{
    res.contentType('text/html');
    res.send(home);
});
app.get("./resources.html",(req,res)=>{
    res.contentType('text/html');
    res.send(notes);
});
app.get("./blog.html",(req,res)=>{
    res.contentType('text/html');
    res.send(blog);
});
app.get("./aboutme.html",(req,res)=>{
    res.contentType('text/html');
    res.send(about);
});
app.get("./contact.html",(req,res)=>{
    res.contentType('text/html');
    res.send(contact);
});
app.get("./login.html",(req,res)=>{
    res.contentType('text/html');
    res.send(login);
});
app.get("./signin.html",(req,res)=>{
    res.contentType('text/html');
    res.send(signin);
});
app.get("./termsandconditions.html",(req,res)=>{
    res.contentType('text/html');
    res.send(terms);
});
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/02_introduction.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py02);
})
app.get("./pythonnotes/03_pycharminstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py03);
})
app.get("./pythonnotes/04_series.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py04);
})
app.get("./pythonnotes/05_indexing.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py05);
})
app.get("./pythonnotes/06_slicing.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py06);
})
app.get("./pythonnotes/07_seriesattributes.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py07);
})
app.get("./pythonnotes/08_nan.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py08);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})
app.get("./pythonnotes/01_pythoninstallation.html",(req,res)=>{
    res.contentType('text/html');
    res.send(py01);
})

// serving the css files over get requests 
app.get("/style.css",(req,res)=>{
    res.contentType('text/css');
    res.send(style);
});
app.get("/ipad.css",(req,res)=>{
    res.contentType('text/css');
    res.send(ipad);
});
app.get("/ipadmini.css",(req,res)=>{
    res.contentType('text/css');
    res.send(ipadmini);
});
app.get("/phone.css",(req,res)=>{
    res.contentType('text/css');
    res.send(phone);
});
app.get("img/computernetworking.png",(req,res)=>{
    res.contentType('png/image');
    res.send(compnetworking);
});
app.get("img/container1.jpg",(req,res)=>{
    res.contentType('jpg/image');
    res.send(container1);
});
app.get("img/favicon.ico.png",(req,res)=>{
    res.contentType('png/image');
    res.send(favicon);
});
app.get("img/hi.png",(req,res)=>{
    res.contentType('png/image');
    res.send(hi);
});
app.get("img/imp series.png",(req,res)=>{
    res.contentType('png/image');
    res.send(imp);
});
app.get("img/logo1.png",(req,res)=>{
    res.contentType('png/image');
    res.send(logo1);
});
app.get("img/me.png",(req,res)=>{
    res.contentType('png/image');
    res.send(me);
});
app.get("img/mysql.png",(req,res)=>{
    res.contentType('png/image');
    res.send(mysql);
});
app.get("img/practical.png",(req,res)=>{
    res.contentType('png/image');
    res.send(practical);
});
app.get("img/py.webp",(req,res)=>{
    res.contentType('png/image');
    res.send(py);
});
app.get("img/pyqs.png",(req,res)=>{
    res.contentType('png/image');
    res.send(pyqs);
});
app.get("img/python.png",(req,res)=>{
    res.contentType('png/image');
    res.send(python);
});
app.get("img/socialimpacts.png",(req,res)=>{
    res.contentType('png/image');
    res.send(socialimpacts);
});
app.get("img/user.png",(req,res)=>{
    res.contentType('png/image');
    res.send(user);
});
app.get("img/yt.png",(req,res)=>{
    res.contentType('png/image');
    res.send(yt);
});
app.get("img/pynotes.png",(req,res)=>{
    res.contentType('image/png');
    res.send(pythonnotes);
});
app.get("img/mysqlnotes.png",(req,res)=>{
    res.contentType('image/png');
    res.send(mysqlnotes);
});
app.get("img/computernetworkingnotes.png",(req,res)=>{
    res.contentType('image/png');
    res.send(networkingnotes);
});
app.get("img/socialimpactsnotes.png",(req,res)=>{
    res.contentType('image/png');
    res.send(socialimpactsnotes);
});
app.get("none",(req,res)=>{
    res.statusCode=404;
    res.contentType('text/html');
    res.send('<h1>404 not found</h1>');
})


// creating a server or a localhost to listen the requests 
app.listen(port,hostname,()=>{
    console.log(`Live at http://${hostname}:${port}/`);
});








