// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.6;
pragma experimental ABIEncoderV2;

contract Lottery {
    address public admin;
    constructor() {
        admin = msg.sender;
    }
    modifier admin_only() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }
    mapping(address => uint) public bets;
    address[5] public winners;
    uint[5] public rewards = [uint256(0),0,0,0,0];
    function bet() public payable {
        require(msg.value > 1 ether, "Minimum bet is 1 ONE");
        bets[msg.sender] = msg.value;
    }
    function setWinners(address[5] memory leaderboard) public admin_only {
        
        winners = leaderboard;
    }
    function getLeaderboard(uint i) public view returns(address){
        require(i>=0 && i<5, "Index out of range");
        
        return winners[i];
    }
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    function calculateRewards() public admin_only{
        uint funds = address(this).balance;
        uint fees = funds/10;
        
        (bool sent, bytes memory data) = admin.call{value: fees}("");
        require(sent, "Failed to send funds");

        uint totalReward = funds - fees;
        uint winnerTotal = 0;
        uint[5] memory winnerRewards = [uint256(100),100,95,90,90];
        for(uint i = 0;i<5;i++){
            winnerTotal += bets[winners[i]];
            winnerRewards[i] = (winnerRewards[i] * bets[winners[i]])/(100);

        }
        for(uint i = 0;i<5;i++){    
            winnerRewards[i] = (winnerRewards[i] * totalReward)/(winnerTotal);
        }
        rewards = winnerRewards;
    }
    function disburse() public payable admin_only {

        for(uint i=0;i<5;i++){
            (bool sent, bytes memory data ) = winners[i].call{value: rewards[i]}("");
            require(sent, "Failed to send funds");
        }
        

    }

}