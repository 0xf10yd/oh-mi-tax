// SPDX-License-Identifier: UNLICENCED
pragma solidity >=0.8.0 <0.9.0;

import "./Work.sol";

contract contractor{

    event WorkCreated(address owner, address _work);

    function createNewWork() public{
        Work w = new Work(msg.sender);
        emit WorkCreated(msg.sender, address(w));
    }
}