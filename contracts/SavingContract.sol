// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

contract MoneySaver {
    struct Saving {
        uint256 balance;
        uint256 endTime;
    }
    address public owner;
    mapping(address => Saving) public balances;

    //requires tthe user to send a positive amount of ETH
    modifier onlyPositive(uint256 _amount) {
        require(_amount > 0, "Only positive amount");
        _;
    }

    //requires the user to save money for at least one day
    modifier onlyValidTime(uint256 _endTime) {
        require(
            _endTime > 1 days,
            "You should save money for more than 20 seconds"
        );
        _;
    }

    modifier onlyValidTimeWithdraw() {
        require(
            block.timestamp > balances[msg.sender].endTime,
            "You cannot withdraw before endtime"
        );
        _;
    }

    //requires the user not to have an already existing balance
    modifier onlyValidBalance() {
        require(balances[msg.sender].balance == 0, "You already have savings");
        _;
    }

    modifier balanceOrLess(uint256 _amount) {
        require(
            balances[msg.sender].balance >= _amount,
            "You can only withdraw your balance or less"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function deposit(uint256 _endTime)
        public
        payable
        onlyPositive(msg.value)
        onlyValidTime(_endTime)
        onlyValidBalance
    {
        balances[msg.sender].balance += msg.value;
        balances[msg.sender].endTime = block.timestamp + _endTime;
    }

    function withdraw(uint256 _amount)
        public
        onlyPositive(_amount)
        onlyValidTimeWithdraw
        balanceOrLess(_amount)
    {
        balances[msg.sender].balance -= _amount;
        payable(msg.sender).transfer(_amount);
    }
}
