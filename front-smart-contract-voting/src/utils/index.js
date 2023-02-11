import { ethers } from 'ethers';

// convert byte32 into string
export const parseBytes = (bytesProposal) => {
	return ethers.utils.parseBytes32String(bytesProposal);
};

// convert the dash of the string into a space
export const parseName = (name) => {
	const newName = name.replace('-', ' ');
	return newName[0].toUpperCase() + newName.substring(1);
};