// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "forge-std/Test.sol";
import "../src/Voting.sol";

contract VotingTest is Test {
    Voting voting;
    address owner = makeAddr("Owner");
    address voter1 = makeAddr("Voter1");
    address voter2 = makeAddr("Voter2");

    function setUp() public {
        vm.prank(owner);
        voting = new Voting("Election 2024");
    }

    function testElectionName() public view {
        assertEq(voting.electionName(), "Election 2024");
    }

    function testOwnerIsCorrect() public view{
        assertEq(voting.owner(), owner);
    }

    function testAddCandidateAsOwner() public {
        vm.startPrank(owner);
        voting.addCandidate("Candidate 1");
        voting.addCandidate("Candidate 2");
        vm.stopPrank();

        Voting.Candidate[] memory candidates = voting.getCandidates();
        assertEq(candidates.length, 2);
        assertEq(candidates[0].name, "Candidate 1");
        assertEq(candidates[1].name, "Candidate 2");
    }

    function testAddCandidateNotOwner() public {
        vm.expectRevert(Voting.Voting__NotOwner.selector);
        voting.addCandidate("Non-owner Candidate");
    }


    function testVoteAfterAuthorization() public {
        vm.prank(owner);
        voting.addCandidate("Candidate 1");

        vm.prank(voter1);
        voting.vote(0);

        Voting.Candidate[] memory candidates = voting.getCandidates();
        bool voted = voting.voted(voter1); 
        assertTrue(voted);
        assertEq(candidates[0].voteCount, 1);
        assertEq(voting.totalVotes(), 1);
    }

    function testVoteTwice() public {
        vm.startPrank(owner);
        voting.addCandidate("Candidate 1");
        vm.stopPrank();
        vm.prank(voter1);
        voting.vote(0);

        vm.prank(voter1);
        vm.expectRevert(Voting.Voting__AlreadyVoted.selector);
        voting.vote(0);
    }

    function testVoteWithInvalidCandidate() public {
        vm.prank(voter1);
        vm.expectRevert(Voting.Voting__IncorrectVoteIndex.selector);
        voting.vote(100);
    }
}
