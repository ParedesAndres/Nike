const express = require('express');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var app = express();

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'list';

// Create a new MongoClient
const client = new MongoClient(url);

var db;

// Use connect method to connect to the Server
client.connect(`mongodb+srv://AndresParedes:<PASSWORD>@nike-gwqbo.mongodb.net/test?retryWrites=true`, 
{
    auth: {
        user: 'AndresParedes',
        password: '970326A.'
    }
}, 
function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db = client.db(dbName);

    //client.close();
});



app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());

var boots = require('./boots');

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/store', (req, res) => {

    const collection = db.collection('products');
    var p = parseInt(req.query.price);
    var c = req.query.collec;

    //Price filter
        if(p){
            collection.find({price: {$gte: p}}).toArray(function (err, doc) {

                if (err) {
                    console.error(err);
                    res.send('No hubo resultados');
                    return;
                }
    
                var context = {
                    boots: doc
                }
                res.render('store', context);
                console.log(doc);
            });
        }else{
            collection.find({}).toArray(function (err, doc) {

                if (err) {
                    console.error(err);
                    res.send('No hubo resultados');
                    return;
                }
    
                var context = {
                    boots: doc
                }
                res.render('store', context);
                console.log(doc);
            });
        }
      

    
    /*if (c || p) {
        collection.find({collection: {$eq: c}}).toArray(function (err, doc) {

            if (err) {
                console.error(err);
                res.send('No hubo resultados');
                return;
            }

            var context = {
                boots: doc
            }
            res.render('store', context);
            console.log(doc);
        });
    }else{
        collection.find({}).toArray(function (err, doc) {

            if (err) {
                console.error(err);
                res.send('No hubo resultados');
                return;
            }

            var context = {
                boots: doc
            }
            res.render('store', context);
            console.log(doc);
        });
    }*/
});

app.get('/store/:product', (req, res) => {

    // Get the documents collection
    const collection = db.collection('products');

    // Insert some documents

    var pro = req.params.product;

    collection.find({
        name: {
            $eq: pro
        }
    }).toArray(function (err, doc) {

        let obj = doc;

        if (err) {
            console.error(err);
            res.send('Error 404');
            return;
        }

        /*let boot = boots.find(function(elem){
            if(elem.name == req.params.product){
                return true;
            }
        });*/

        var context = {
            img: obj[0].img,
            desc: obj[0].desc,
            price: obj[0].price,
            title: req.params.product,
        }


        console.log(obj[0].img);
        res.render('product', context);

    });




});

app.get('/cart', (req, res) => {
    const CartCollection = db.collection('cart');
    CartCollection.find({}).toArray(function(err, docs){
        if(err) {
            console.error(err);
            response.send(err);
            return;
        }
        var context = {
            boots: docs,
        }
        res.render('cart', context);
    });
});

app.get('/cr7', (req, res) => {
    res.render('cr7');
});

////////// RUTAS POST //////////

app.post('/api/addItemToCart', function(request, response){
    const productsCollection = db.collection('products');
    const CartCollection = db.collection('cart');
    let nameItem = request.body.name;

    productsCollection.find({
        name: {
            '$eq': nameItem
        }
    }).toArray(function(error, docs){
        if(error) {
            console.error(error);
            response.send(error);
            return;
        }

        CartCollection.insert(docs[0], function(error2, result) {
            if(error2) {
                console.error(error2);
                response.send(error2);
                return;
            }
            response.send("Item added");
        });
    })
});

app.listen(process.env.PORT || 1234);