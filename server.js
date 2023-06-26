const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const express = require('express');
const app = express();
const cors = require('cors');
const puerto = 3001;

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);
    let lista_noticias = [];

    try {
        const bd = client.db('noticias');
        const coleccion = bd.collection('noticias');
        const noticias = coleccion.find({});
        
        for await (let noticia of noticias) {
            lista_noticias.push(noticia);
        }
        res.send(lista_noticias);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
});

app.post('/', async (req, res) => {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);

    try {
        const bd = client.db('noticias');
        const coleccion = bd.collection('noticias');
        const documento = await coleccion.insertOne({
            titulo: req.body.titulo,
            cuerpo: req.body.cuerpo
        });
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
});

app.get('/noticia/:id', async (req, res) => {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);

    try {
        const bd = client.db('noticias');
        const coleccion = bd.collection('noticias');
        const documento = await coleccion.findOne({
            _id: new mongodb.ObjectId(req.params.id),
        });
        res.send(documento);
    } catch(err) {
        console.error(err);
    } finally {
        client.close();
    }
});

app.put('/', async (req, res) => {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);

    try {
        const db = client.db('noticias');
        const coleccion = db.collection('noticias');

        // Documento a actualizar
        const filtro = {
            _id: new mongodb.ObjectId(req.body._id)
        };

        const opciones = {
            upsert: false,
        };

        const actualizar = {
            $set: {
                titulo: req.body.titulo,
                cuerpo: req.body.cuerpo,
            }
        };
        const documento = await coleccion.updateOne(filtro, actualizar, opciones);
    } catch (err) {
        console.err(err);
    } finally {
        client.close();
    }
});

app.delete('/noticia/:id', async (req, res) => {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(url);

    try {
        const bd = client.db('noticias');
        const coleccion = bd.collection('noticias');
        const documento = await coleccion.deleteOne({
            _id: new mongodb.ObjectId(req.params.id),
        });
        // res.send(documento);
    } catch(err) {
        console.error(err);
    } finally {
        client.close();
    }
});

app.listen(puerto, () => {
    console.log(`Escuchando desde el puerto ${puerto}`);
});