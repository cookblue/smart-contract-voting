# Proyecto: Votaciones en la Academia DiaYuLau
Este contrato permite generar votaciones para resolver la problematica:
La academia está organizando un bootcamp para becar a 250 chicas que deseen iniciarse en el mundo de la programación.
Para concretar el contenido programático para este proyecto han convocado a 25 organizaciones aliadas,30 profesores de la academia, 15 Universidades y 10 empresas patrocinantes .
En total 2.500.000 votantes , más aquellos que se sumen a la convocatoria que se ha realizado en un distrito de la capital .

# REMIX CONTRATO PARA VOTACION DE CURSOS
# ---------------------------------------
Este contrato resuelve el problema presentado:

1. Ingresar a la carpeta remix-contract
2. Copiar en Remix el código de VoteSPT.sol
3. Compilar en Remix
4. Deployar
5. Ingresar al video del demo en PDF y ejecutar las pruebas

# INTERFAZ DE USUARIO CON HARDHAT Y REACT
# ----------------------------------------
# Front-end
Se esta usando en este proyecto el contrato por defecto de Remix: Ballon, solo para hacer un demo de interfaz de Usuario.

## Descripción técnica
Tecnologías usadas:
- React (18.2)
- Chakra UI( 2.4.9)
- Vite (4.1)
- Ethers 

## Instalacion

1. Para poder levantar la web de votaciones, primero ingresar a :
```
cd smart-contract-votation
```
2. Para instalar las dependencias:
```
npm i 
```
3. Para iniciar:
```
npm run dev
```

# Backend
Tecnologías usadas:
- Solidity
- Hardhat
- Alchemy
- Goerly
- Metamask
- Ethers library 

## Instalación
1. cd back-smart-contract
2. Terminal 1: Iniciar el backend
```
npx hardhat compile
```
3. Terminal1: En paralelo correr el script que genera las propuestas
```
npx hardhat --network localhost run scripts/deploy.js
```
4. Copiar el token address obtenido en la ruta: 
```
front-smart-contract/src/ABI/contract-address.json
```
5. Terminal 2: Levantar los nodos
```
npx hardhat node
```
6. De la terminal de hardhat copiar el primer address y conectarlo con Metamask a traves de la clave privada que nos ofrecen:
 - Ingresar a la opcion expandir vista
 - Hacer click en el icono del circulo de Mis Cuentas y hacer click en Importar cuenta
 - Ingresar la clave privada e importar
