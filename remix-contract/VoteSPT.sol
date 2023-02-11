// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;
//@title Votacion para la Academia DiaYuLau - Eleccion de contenido para el Bootcamp

contract VoteSPT{

    address public owner;
    bool statusVote;

    constructor() {
        //Valor por defecto
        owner = msg.sender;
        //Define el inicio a la votacion
        statusVote = false;
    }    

    function getAdmin() public view returns (address) {
        // Retorna la cuenta usada para deployar (id owner)
        return owner;
    }

    modifier onlyAdmin() {
        // Condiciona a una funcion a ser ejecutada por el owner.  
        require(msg.sender == owner, "Error: No tiene perfil de admin"); 
        _;
    }


    //Objeto de nominacion / eleccion de contenidos del bootcamp, con datos de id
    struct Nominee {
        //Dato clave para identificar el contenido en el mapping
        uint itemNomine;
        string name;
        uint id;
        //Variable para almacenar los votos
        uint voteCount;
        string details;
    }

    mapping(uint => Nominee) public contentsBootcamp;
    // Un arreglo dinamico para los contenidos a elegir. Nos ayudara despues para encontrar el ganador
    Nominee[] public onlyVotes;
    //Variables para almacenar el indice de los diferentes contenidos nominados
    uint public nomineesCount;
    uint public arrayCount;

    //Agrega elemento u objeto de eleccion incluyendo datos de id. Solo puede ser operada por el owner
    function addNominee(string memory _name, uint _id, string memory _details) public onlyAdmin{
        nomineesCount++;
        contentsBootcamp[nomineesCount] = Nominee(nomineesCount, _name, _id, 0, _details);
        //Datos almacenados en el mapping y el array
        arrayCount++;
        onlyVotes.push(Nominee({itemNomine: arrayCount, name: _name, id: _id, voteCount: 0, details: _details}));
    }


    //Votante o elector incluyendo los datos de id
    struct Elector {
        uint item;
        //Dato clave para identificar a los electores
        address electorAddress;
        string name;
        //Variable que guardo si el elector ya voto
        bool hasVoted;
        //Variable que guarda si el elector esta registrado
        bool isRegistered;
       
    }
 
    mapping(address => Elector) public electorDetails; 
    //Variable para almacenar el indice de los diferentes electores
    uint public electorCount;

    //Agrega elector o votante al sistema incluyendo datos de id. Solo puede ser operada por el owner 
    function addElector(address electorAddress, string memory _name) public onlyAdmin {
        electorCount++;
        electorDetails[electorAddress] = Elector(electorCount, electorAddress, _name, false, true);
    }


    //Verifica si un votante esta registrado y puede ejercer la accion de votar
    function theyCanVote(address electorAddress) private view {
        require(electorDetails[electorAddress].hasVoted == false, "Error: El elector ya tiene un voto registrado");
        require(electorDetails[electorAddress].isRegistered == true, "Error: El elector no esta registrado");
 
    }

    //Ejecuta la accion de votar luego de superar las restricciones. Es de acceso publico
    function Vote(uint itemNomine, address electorAddress) public {
        //Funcion invocada para restringuir la votación
        theyCanVote(electorAddress);
        //Arranque de la votación. Es requisito
        statusVote = true;
        require(statusVote == true);
        //Guarda los votos para cada contenido / objeto de eleccion, relacionando la posicion en el arreglo 
        onlyVotes[itemNomine].voteCount += 1;
        //Marca a los votantes que ya ejercieron para que no puedan repetir la accion
        electorDetails[electorAddress].hasVoted = true;

    }

    //Funcion para detener el proceso de votacion
    function stopVoting() private onlyAdmin{
        statusVote = false;
    }

    //Encuentra el contenido nominado con mas votos y lo selecciona por su posicion
    function findingWinner() public view returns (uint itemWinner){
        //stopVoting();
        //require(statusVote == false);
        uint winningCount = 0;
        //Ciclo que compara la cantidad de votos y encuentra la que tiene mayor cantidad
        for (uint i = 0; i < onlyVotes.length; i++) {
            if (onlyVotes[i].voteCount > winningCount) {
                winningCount = onlyVotes[i].voteCount;
                itemWinner = i;
            }
       }
    }
  
    //Funcion para ver el nombre del curso ganador y la direccion del contrato
    function theWinnerIs() public view returns (string memory winningCourse, address){
        address votespt = 0x7feFcA9413A2A630af854B370CE27892Ad959f34;
        return ((winningCourse = onlyVotes[findingWinner()].name), votespt);
    }


}
