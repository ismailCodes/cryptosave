// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

contract MoneySaver {
    struct Saving {
        uint256 balance;
        uint256 endTime;
    }
    address public owner;
    mapping(address => Saving) public balances;

    uint256 private daySeconds = 86400;

    //requires the user to send a positive amount of ETH
    modifier onlyPositive(uint256 _amount) {
        require(_amount > 0, "Only positive amount");
        _;
    }

    //requires the user to save money for at least one day
    modifier onlyValidTime(uint256 _endTime) {
        require(_endTime > 1 days, "End-time very short");
        _;
    }

    modifier onlyValidTimeWithdraw() {
        require(
            block.timestamp > balances[msg.sender].endTime,
            "Wait for withdrawal time"
        );
        _;
    }

    modifier onlyBalance() {
        require(balances[msg.sender].balance > 0, "No money to withdraw");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function deposit(uint256 _endTime) public payable onlyPositive(msg.value) {
        balances[msg.sender].balance += msg.value;
        if (balances[msg.sender].endTime == 0) {
            balances[msg.sender].endTime =
                block.timestamp +
                (_endTime * daySeconds);
        }
    }

    function withdrawAll() public onlyBalance onlyValidTimeWithdraw {
        uint256 balance = balances[msg.sender].balance;
        balances[msg.sender].balance -= balance;
        balances[msg.sender].endTime = 0;
        payable(msg.sender).transfer(balance);
    }
}
