'use client';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'; 
import {votingAbi, votingAddress} from '../voting'; 

declare global {
    interface Window {
        ethereum: any;  
    }
}

interface Candidate {
    id: number;
    name: string;
    voteCount: number;
}

const Results: React.FC = () => {

    const [contract, setContract] = useState<ethers.Contract | null>(null);
    const [candidates, setCandidates] = useState<Candidate[]>([]);  
    const [totalVotes, setTotalVotes] = useState<number>(0);        

    useEffect(() => {
        const checkConnection = async () => {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                    
                    if (accounts.length > 0) {
                        const provider = new ethers.BrowserProvider(window.ethereum);
                        const signer = await provider.getSigner();
                        const votingContract = new ethers.Contract(votingAddress, votingAbi, signer);
                        
                        setContract(votingContract);

                        const candidates = await votingContract.getCandidates();
                        const totalVotes = await votingContract.getTotalVotes();

                        const formattedCandidates: Candidate[] = candidates.map((candidate: any) => ({
                            name: candidate.name,
                            voteCount: candidate.voteCount.toString()
                        }));

                        setCandidates(formattedCandidates);
                        setTotalVotes(totalVotes.toString());
                    }
                } catch (error) {
                    console.error("Error connecting to Ethereum or contract:", error);
                }
            } else {
                console.log("Ethereum object not found");
            }
        };
        
        checkConnection();
    }, []); 

    return (
        <div className="results-container">
            <h1 className="results-header">Election Results</h1>
            <p className="total-votes">Total Votes Cast: <span>{totalVotes}</span></p>
            
            <div className="candidates-list">
                {candidates.length > 0 ? (
                    <ol>
                        {candidates.map((candidate) => (
                            <li key={candidate.id} className="candidate-item">
                                <span className="candidate-name">{candidate.name}</span>
                                <span className="candidate-votes">{candidate.voteCount} votes</span>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p className="no-data">No candidates found or data still loading...</p>
                )}
            </div>
        </div>
    );
}

export default Results;
