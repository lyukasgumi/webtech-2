var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var books = [{
      id:1,
      "isbn": "9786158025423",
      "cim": "A 10-es körzet",
      "szerzo": "Kevin Lyon",
      "kiadas": "2017",
      "ar": 2690,
      "db" : 7,
      "img":"https://s05.static.libri.hu/cover/78/e/3848032_5.jpg",
      "leiras": "Bűnügyi regény",
      "website": "https://www.facebook.com/10eskorzet/"
    },
    {
      id:2,
      "isbn": "0716600900",
      "cim": "The world book encyclopedia",
      "szerzo": "Robert O. Zeleny",
      "kiadas": "1990",
      "ar": 36000,
      "db" : 22,
      "img":"https://lh3.googleusercontent.com/proxy/zJhlx3SWMdEqyE4s6Bt1hw4EB3kKrXG7TWeyaOTrXokTn5jyODqoPE5vldSc8ggtt2Q5iCs1iPiHZaTenTj2Qg7g1oQtvPop0mfyjmMHXZEBTA8JZi30BNNx28PEpejXsdVRuvB6MfY-B71jiNbS-lp57w",
      "leiras": "Lexikon, Enciklopédia",
      "website": "https://www.worldbook.com"
    },
    {
      id:3,
      "isbn": "9789636894207",
      "cim": "Dirk Gently holisztikus nyomozóirodája",
      "szerzo": "Douglas Adams",
      "kiadas": "2010",
      "ar": 2490,
      "db" : 1,
      "img":"https://www.libri.hu/konyv/dirk-gently-holisztikus-nyomozoirodaja-5.html?gclid=CjwKCAjwkPX0BRBKEiwA7THxiGf8bNq9HQ3Qzh1DXdb9ug4t_XIokNTzci8SrGLDIIOq7rtA39yvEBoCtSEQAvD_BwE",
      "leiras": "Sci-Fi paródia"
    },
    {
      id:4,
      "isbn": "963117011X",
      "cim": "A Hajnal bolygó robotjai",
      "szerzo": "Isaac Asimov",
      "kiadas": "1992",
      "ar": 248,
      "db" : 492,
      "img":"https://moly.hu/system/covers/big/covers_388.jpg?1395342952",
      "leiras": "Angol irodalom, Fantasztikus regény"
    },
    
    ];
MongoClient.connect(url, function(err, db) {
 
  var dbo = db.db("mydb");



  dbo.createCollection("user", function(err, res) {

    console.log("Collection created!");
dbo.createCollection("items", function(err, res) {
     
      console.log("Collection created!");
      dbo.collection("items").insertMany(books, function(error, inserted) {
           if(error) {
               console.error(error);
           }
           else {
               console.log("Successfully inserted: " , inserted );
           }
       }); 

    });


  });




  dbo.createCollection("items", function(err, res) {
     
      console.log("Collection created!");
      dbo.collection("items").insertMany(books, function(error, inserted) {
           if(error) {
               console.error(error);
           }
           else {
               console.log("Successfully inserted: " , inserted );
           }
       }); 

    });

});
