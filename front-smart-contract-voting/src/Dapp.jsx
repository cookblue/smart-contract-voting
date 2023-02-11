import './App.css'
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import {parseName, parseBytes} from './utils/index'
import TokenArtifact from './ABI/Ballot.json'
import contractAddress from './ABI/contract-address.json'
import { 
  Box,
  Heading,
  Stack,
  Divider,
  Center,
  Button
} from '@chakra-ui/react'
import { Candidate } from './components/Candidate';
import propuesta1 from './images/propuesta-1.png'
import propuesta2 from './images/propuesta-2.png'
import propuesta3 from './images/propuesta-3.png'

function Dapp() {
  const imgCandidate1 = propuesta1;
  const imgCandidate2 = propuesta2;
  const imgCandidate3 = propuesta3;
  const descCandidate1 = ['Introducción a la programación','Principios de Base de Datos','Lógica'];
  const descCandidate2 = ['Fundamentos de  programación','Base de Datos',' Lenguajes de Programación'];
  const descCandidate3 = ['Introducción a la programación','Base de Datos','Trabajo Remoto','Habilidades blandas'];


  const [token, setToken] = useState();
  const [proposals, setProposals] = useState([]);
  const [chairperson, setChairperson] = useState('');
  
  async function _initialize() {
    await _intializeEthers();
  }
  // Funcion para conectar nuestro smart contract con el Dapp
  const _intializeEthers = async () => {
    // ethers connection for the smartcontract
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    const _token = new ethers.Contract(
      contractAddress.Token,
      TokenArtifact.abi,
      _provider.getSigner(0)
    );
    // get the proposals
    const newProposal = await _token.getAllProposals();
    // get the chairman address
    const newChairperson = await _token.chairperson();
    // save the token data into a hook to reuse it along the app
    setToken(_token);
    setProposals(newProposal);
    setChairperson(newChairperson);
      
    console.log(_token);
  };

   // Connects to the smart contract token id (check /contracts/contract-address.json)
 async function init() {
  const [selectedAddress] = await window.ethereum.enable();
  _initialize(selectedAddress);
 }
 
 useEffect(() => {
   // When the page loads it will initialize the init function
   // that we need to connect the frontend with the smartcontract
   init();
  }, []);

  // Vote the selected proposal (you can only vote one time)
	const voteProposal = async (proposal) => {
		await token.vote(proposal);
	};
  return (
    <div className="App">
      <Box>
        <Box alignItems='center' margin='10px'>
          <Heading fontFamily='Montserrat' letterSpacing='0.5px'>
            Sistema de Votaciones
          </Heading>
          <Center p={5}>
            <Divider borderColor='blue' />
          </Center>
        </Box>
        <Stack justify='center' direction={['column', 'row']} spacing='50px'>
          <Candidate option={1} votos={0} imgCandidate={imgCandidate1} descCandidate={descCandidate1}/>
          <Candidate option={2} votos={0} imgCandidate={imgCandidate2} descCandidate={descCandidate2}/>
          <Candidate option={3} votos={0} imgCandidate={imgCandidate3} descCandidate={descCandidate3}/>
        </Stack>
      </Box>
      <Box margin='40px'>
          {proposals.map((proposal, index) =>{
                // const name = parseName(parseBytes(proposal.name));
                const name = proposal.name;
                const voteCount = proposal.voteCount._hex;
                return(
                  <>
                  <Box key={index}>
                    {
                      (index < 3) ?
                      `Opcion ${index+1}: ${name} -> Votos(${Number(voteCount)})`:``
                    }
                     <br/>
                    {
                      (index < 3) ?
                     
                      <Button key ={index+1} colorScheme='purple' onClick={() => voteProposal(index)}>
                        Vote
                        </Button>: ''
                    }
                   
                 </Box>
                  
                  </>
                
                )
              
            })}
          </Box>
    </div>
  )
}

export default Dapp
