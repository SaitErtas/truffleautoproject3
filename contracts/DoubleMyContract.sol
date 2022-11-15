// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract DoubleMyContract {
    uint256 public balance;

    constructor(string memory message) {
    }

    // call this function to send a request
    function SendMeMoneyContract(string memory requestMessage) public payable {

    }

    // call this function to send a response
    function SendResponse(uint256 _amount) public {
        balance = _amount * 2;
    }
}
