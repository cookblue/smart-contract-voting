// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
// Titulo: Transformando la Educación con Blockchain: Vota por la Malla Curricular Ideal

contract CourseVote {
    address owner;
    bool votingOpen;

    constructor() {
        owner = msg.sender;   // Dueño del contrato 
        votingOpen = true;
        voters[owner] = Voter(0, owner, "Admin", false, true); // El dueño del contrato es registrado automáticamente
    }

    struct Course {
        uint id;
        string name;
        uint voteCount;
        string description;
        address addressCourse;
    }

    mapping(uint => Course) public courses;
    uint public courseCount;

    modifier onlyOwner() {
        require(msg.sender == owner, "Solo el admin puede modificar");
        _;
    }

    // Registro de Cursos solo lo realiza el admin
    function addCourse(string memory name, string memory description, address addressCourse)  public onlyOwner {
        courseCount++;
        courses[courseCount] = Course(courseCount, name, 0, description, addressCourse);
    }

    struct Voter {
        uint id;
        address voterAddress;
        string name;
        bool hasVoted;
        bool isRegistered;
    }

    mapping(address => Voter) public voters;
    uint public voterCount;

    // Registar a un nuevo votante, solo lo puede hacer el Admin
    function registerVoter(address voterAddress, string memory name) public onlyOwner {
        voterCount++;
        voters[voterAddress] = Voter(voterCount, voterAddress, name, false, true);
    }

    mapping(address => bool) public alreadyVoted;
    address[] listOfVoters;

    // Emitir un voto, tiene que estar registrado para poder votar
    function vote(uint courseId) public {
        require(votingOpen, "La votacion esta cerrada");
        require(alreadyVoted[msg.sender] == false, "Solo puede votar una vez");
        require(courses[courseId].id == courseId, "Curso no encontrado");
        require(voters[msg.sender].isRegistered,"No esta registrado para votar");

        alreadyVoted[msg.sender] = true;
        voters[msg.sender].hasVoted = true;

        listOfVoters.push(msg.sender);
        courses[courseId].voteCount++;
    }
    // Cerrar votacion
    function closeVoting() public onlyOwner {
        votingOpen = false;
    }

    struct Winner {
        uint id;
        string name;
        address addressContract;
    }
    // Obtener ganador para el curso que tenga 3 votos(se puede modificar)
    mapping(address => Winner) public winner;
    function getWinner() public  returns (uint id, string memory name, address addressContract) {
        uint maxVotos = 3;
        uint highestVoteCount = 0;
        for (uint i = 1; i <= courseCount; i++) {
            if (courses[i].voteCount > highestVoteCount) {
                highestVoteCount = courses[i].voteCount;
                id = courses[i].id;
                name = courses[i].name;
                addressContract = courses[i].addressCourse;

            }
        }
        require(highestVoteCount >= maxVotos, "No hay un ganador aun.");
        winner[addressContract] = Winner(id, name, addressContract);
        return (id, name, addressContract);
    }
}
