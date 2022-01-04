// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

contract MoneySaver {
    struct Saving {
        uint256 balance;
        uint256 endTime;
    }
    address public owner;
    mapping(address => Saving) public balances;
    uint256 daySeconds = 86400;

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
            "You cannot withdraw yet"
        );
        _;
    }

    modifier balanceOrLess(uint256 _amount) {
        require(
            balances[msg.sender].balance >= _amount,
            "Withdraw your balance or less"
        );
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

    function withdraw(uint256 _amount)
        public
        onlyPositive(_amount)
        onlyValidTimeWithdraw
        balanceOrLess(_amount)
    {
        balances[msg.sender].balance -= _amount;
        //if amount is equal to balance, then endTime is set to 0
        if (balances[msg.sender].balance == 0) {
            balances[msg.sender].endTime = 0;
        }
        payable(msg.sender).transfer(_amount);
    }
}
