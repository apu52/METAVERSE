// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

contract CrowdFunding {
    mapping(address => uint) public contributors;
    address public manager;
    uint public minimumContribution;
    uint public deadline;
    uint public target;
    uint public raisedAmount;
    uint public noOfContributors;

    // Events
    event ContributionReceived(address contributor, uint amount);
    event FundsWithdrawn(address manager, uint amount);

    constructor(uint _target, uint _deadline) {
        target = _target;
        deadline = block.timestamp + _deadline;
        minimumContribution = 100 wei;
        manager = msg.sender;
    }
    
    function sendEth() public payable {
        require(block.timestamp < deadline, "Deadline has passed");
        require(msg.value >= minimumContribution, "Minimum contribution not met");

        if (contributors[msg.sender] == 0) {
            noOfContributors++;
        }

        contributors[msg.sender] += msg.value;
        raisedAmount += msg.value;

        emit ContributionReceived(msg.sender, msg.value);
    }

    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }

    function withdrawFunds() public {
        require(msg.sender == manager, "Only manager can withdraw");
        require(block.timestamp >= deadline, "Deadline not yet passed");
        require(raisedAmount >= target, "Funding target not reached");

        uint amount = address(this).balance;
        payable(manager).transfer(amount);

        emit FundsWithdrawn(manager, amount);
    }

    function refund() public {
        require(block.timestamp >= deadline, "Deadline not yet passed");
        require(raisedAmount < target, "Funding target was reached, no refunds");

        uint contributedAmount = contributors[msg.sender];
        require(contributedAmount > 0, "No funds to refund");

        contributors[msg.sender] = 0;
        payable(msg.sender).transfer(contributedAmount);
    }

    function terminate() public {
    require(msg.sender == manager, "Only manager can terminate");
    require(block.timestamp >= deadline, "Deadline not yet passed");
    require(raisedAmount < target, "Funding target was reached, cannot terminate");

    uint amount = address(this).balance;
    payable(manager).transfer(amount);
}

}
