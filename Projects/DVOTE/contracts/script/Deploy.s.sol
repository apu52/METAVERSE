// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {Script, console} from "forge-std/Script.sol";
import {Voting} from "../src/Voting.sol";

contract DeploDeployyWithData is Script {
    Voting public voting;

    // deploy voting contract
    function run() public returns(Voting) {
        vm.startBroadcast(msg.sender);
        voting = new Voting("DVOTE");
        voting.addCandidate("John Smith");
        voting.addCandidate("Michael Johnson");
        voting.addCandidate("Robert Davis");
        voting.addCandidate("James Brown");
        voting.addCandidate("William Taylor");
        voting.addCandidate("David Wilson");
        voting.addCandidate("Richard Harris");
        voting.addCandidate("Charles Martin");
        voting.addCandidate("Joseph Clark");
        voting.addCandidate("Thomas Anderson");
        voting.addCandidate("Daniel Scott");
        voting.addCandidate("Christopher Evans");
        voting.addCandidate("NOTA");
        vm.stopBroadcast();
        console.log(voting.owner());
        return (voting);
    }
}


// To deploy on anvil ( local chain ) with anvil's private key:
// forge script script/Deploy.s.sol --fork-url http://localhost:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --broadcast

