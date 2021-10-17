// SPDX-License-Identifier: UNLICENCED
pragma solidity >=0.8.0 <0.9.0;
import "./KYC.sol";
import "./GovtDetails.sol";

contract Transactions{
    mapping(address=>uint) public tokenBalance;
    mapping(address=>uint) public taxPaid;
    KYC kyc;
    GovtDetails govt;

    constructor (KYC _kyc, GovtDetails _govt){
        kyc = _kyc;
        govt = _govt;
    }

    event TaxPaid(address _who, uint taxBefore, uint taxAfter);

    modifier OnlyVerified() {
        require(kyc.getKYC(msg.sender), "Not verified yet");
    _;
    }

    receive() external payable OnlyVerified{
        tokenBalance[msg.sender] += msg.value;
    }

    function payTax() public payable {

        emit TaxPaid(msg.sender, msg.value);

    }
}