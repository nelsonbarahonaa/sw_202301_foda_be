import express from 'express';
//import { workerData } from 'worker_threads';
const router  = express.Router();

//import empresasRouter from './empresas/empresas';
import usuarioRouter from './usuario/usuario';
// REST API
// INTERNET -> HTTP -> REST API -> BD
// SOAP XML wsdl
// {} -> JSON
// [] -> JSON
// { llave : valor }
// valor: texto, numerico, booleano, array [valores], objeto {llave:valor}

// REST stateless, resource unique representation
// CRUID Create, Read, Update, Delete
//       POST, GET, PUT, DELETE

//http://localhost:3001
router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 });

 //http://localhost:3001/version
 router.get('/version', (_req, res)=>{
  const version: string = "1.0.0";
  const jsonResp = {"name":"FODA Be", "version": version};   
  // string, number, boolean, types, interfaces, clases, enumerators
  res.json(jsonResp);
 });

 //router.use('/empresas', usuarioRouter);
 router.use('/usuario', usuarioRouter);

 // router.get router.post router.put router.delete router.use
 //import empresasRouter
export default router;
