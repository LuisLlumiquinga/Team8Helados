const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Conexión a la base de datos MongoDB Atlas
mongoose.connect('mongodb+srv://jdmorales5:Joss3008@cluster0.up5fprt.mongodb.net/Usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB Atlas: ', err);
  })

app.use(express.json());

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://jdmorales5:Joss3008@cluster0.up5fprt.mongodb.net/Usuarios';
// Reemplaza <username>, <password>, <cluster-url> y <database-name> con tus propios valores

async function main() {
  const client = new MongoClient(uri);

  try {
    // Conectarse a la base de datos
    await client.connect();
    console.log('Conexión exitosa a MongoDB');

    // Obtener una referencia a la colección
    const collection = client.db('Usuarios').collection('nuevaColeccion');
    // Reemplaza <database-name> y <collection-name> con los nombres correspondientes

    // Datos que deseas insertar en la base de datos
    const data = { //parametro
      nombre: 'John Doe',
      email: 'johndoe@example.com',
      contraseña: 'secreta123'
    };

    // Insertar los datos en la colección
    const result = await collection.insertOne(data);
    console.log('Documento insertado:', result.insertedId);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  } finally {
    // Cerrar la conexión
    await client.close();
  }
}

main().catch(console.error);

//LEER
var result = "";
async function lectura() {
  const client = new MongoClient(uri);
  //Obtener una referencia a la colección
  const collection = client.db('Usuarios').collection('nuevaColeccion');
  // Reemplaza <database-name> y <collection-name> con los nombres correspondientes

  // Consulta para leer la información de la colección
  const query = {};
  try {
    // Conectarse a la base de datos
    await client.connect();
    console.log('Conexión exitosa a MongoDB');
    // Leer la información de la colección
    result = await collection.find(query).toArray();
    console.log('Información de la colección:', result);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  } finally {
    // Cerrar la conexión
    await client.close();
  }

}

lectura().catch(console.error);

//Envia datos
const uri1 = 'mongodb+srv://jdmorales5:Joss3008@cluster0.up5fprt.mongodb.net/Usuarios';

app.use(express.json());

//MÉTODO POST
app.post('/usuarios', async (req, res) => {
  const client = new MongoClient(uri1);

  try {
    const { nombre, email, contraseña } = req.body;
    // Validar y procesar los datos recibidos

    // Conectarse a la base de datos
    await client.connect();

    // Obtener una referencia a la colección
    const collection = client.db('Usuarios').collection('nuevaColeccion');
    // Reemplaza <database-name> y <collection-name> con los nombres correspondientes

    // Insertar los datos en la colección
    const result = await collection.insertOne({ nombre, email, contraseña });
   // console.log('Documento insertado:', result.insertedId);

    res.status(80).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    res.status(404).json({ error: 'Error al registrar el usuario' });
  } finally {
    // Cerrar la conexión
    await client.close();
  }
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));

//MÉTODO GET
app.get('/api/lectura', (req, res) => {
  res.send(result);
  console.log(result);
});

//MÉTODO PUT
const uri3 = 'mongodb+srv://jdmorales5:Joss3008@cluster0.up5fprt.mongodb.net/Usuarios';
// Reemplaza <username>, <password>, <cluster-url> y <database-name> con tus propios valores

async function actualizar() {
  const client = new MongoClient(uri3);

  try {
    // Conectarse a la base de datos
    await client.connect();
    console.log('Conexión exitosa a MongoDB');

    // Obtener una referencia a la colección
    const collection = client.db('Usuarios').collection('nuevaColeccion');

    // Criterio de actualización
    const filtro = { nombre: 'Joselyne Morales' };
    // Reemplaza con el criterio adecuado para seleccionar los documentos a actualizar

    // Valores de actualización
    const nuevosValores = { $set: { edad: 30 } };
    // Reemplaza con los nuevos valores que deseas asignar a los documentos seleccionados

    // Actualizar los documentos que coinciden con el criterio
    const result = await collection.updateMany(filtro, nuevosValores);
    console.log('Documentos actualizados:', result.modifiedCount);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  } finally {
    // Cerrar la conexión
    await client.close();
  }
}

actualizar().catch(console.error);

app.put('/api/actualizar', (req, res) => {
  res.send(result);
  console.log(result);
})

//MÉTODO DELETE
const uri2 = 'mongodb+srv://jdmorales5:Joss3008@cluster0.up5fprt.mongodb.net/Usuarios';

async function eliminar() {
  const client = new MongoClient(uri2);

  try {
    // Conectarse a la base de datos
    await client.connect();
    console.log('Conexión exitosa a MongoDB');

    // Obtener una referencia a la colección
    const collection = client.db('Usuarios').collection('nuevaColección');

    // Criterio de eliminación
    const filtro = { nombre: 'John Doe' };
    // Reemplaza con el criterio adecuado para seleccionar los documentos a eliminar

    // Eliminar los documentos que coinciden con el criterio
    const result = await collection.deleteMany(filtro);
    console.log('Documentos eliminados:', result.deletedCount);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  } finally {
    // Cerrar la conexión
    await client.close();
  }
}


eliminar().catch(console.error);


app.delete('/api/eliminar', (req, res) => {
  res.send(result);
  console.log(result);
});