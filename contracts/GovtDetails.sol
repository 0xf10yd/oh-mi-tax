// SPDX-License-Identifier: UNLICENCED
pragma solidity >=0.8.0 <0.9.0;

import "./ownable.sol";
contract GovtDetails is Ownable {
    address public govtAddress;
    mapping(string => address) constituencyAddress;
    mapping(address => bool) public isContractor;
    mapping(address => bool) public isConstituency;
    address emptyAddress;

    event ContractorAdded(address _who);

    modifier onlyConstituency() {
        require(
            isConstituency[msg.sender],
            "Action is not allowed"
        );
        _;
    }

    modifier onlyGovt() {
        require(
            msg.sender == govtAddress,
            "Action is not allowed"
        );
        _;
    }

    function getConstituencyAddress(string memory cName) public view returns (address) {
        require (
            constituencyAddress[cName] != emptyAddress,
            "Name is invalid!"
        );
        return constituencyAddress[cName];
    }

    function setConstituencyAddress(string memory cName, address _addr) public {
        constituencyAddress[cName] = _addr;
        isConstituency[_addr] = true;
    }

    function setGovtAddress(address _addr) public onlyOwner {
        govtAddress = _addr;
    }

    function setContractor(address _addr) public {
        isContractor[_addr] = true;
        emit ContractorAdded(_addr);
    }

}