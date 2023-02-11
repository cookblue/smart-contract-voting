# Tecnologias
- alchemy
- Metamask
- hardhat
- ethers library 

## Iniciar el proyecto
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
