'use client';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { votingAbi, votingAddress } from './voting';

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

export default function Home() {
    const [message, setMessage] = useState<string>('');
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [selectedCandidateId, setSelectedCandidateId] = useState<number | null>(null);
    const [contract, setContract] = useState<ethers.Contract | null>(null);
    const [hasVoted, setHasVoted] = useState<boolean>(false);
    const [userAccount, setUserAccount] = useState<string>('');
    const [candidates, setCandidates] = useState<Candidate[]>([]);


    // connect wallet
    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send('eth_requestAccounts', []);
                setIsConnected(accounts.length > 0);
                setUserAccount(accounts[0]);
            } catch (error) {
                console.error('Error connecting wallet:', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    useEffect(() => {
        // check for connection, perform required operations after that to get data from contract
        const checkConnection = async () => {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        setIsConnected(true);
                        const userAddress = accounts[0];
                        setUserAccount(userAddress);

                        const provider = new ethers.BrowserProvider(window.ethereum);
                        const signer = await provider.getSigner();
                        const votingContract = new ethers.Contract(votingAddress, votingAbi, signer);

                        setContract(votingContract);
                        
                        const voted = await votingContract.voted(userAddress);
                        setHasVoted(voted);
                        
                        const candidateList = await votingContract.getCandidates();
                        setCandidates(
                            candidateList.map((candidate: any, index: number) => ({
                                id: index,
                                name: candidate.name,
                                voteCount: Number(candidate.voteCount),
                            }))
                        );
                    }
                } catch (error) {
                    console.error('Error checking connection or fetching data:', error);
                }
            }
        };

        checkConnection();
    }, []);

    // handle vote submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedCandidateId !== null && contract) {
            try {
                const transaction = await contract.vote(selectedCandidateId);
                await transaction.wait();
                setMessage('You have voted successfully!');
                setTimeout(() => {
                    window.location.href = '/Results';
                }, 2000);
            } catch (error) {
                console.error('Error during voting:', error);
                setMessage('An error occurred during voting.');
            }
        } else {
            setMessage('Please select a candidate before voting.');
        }
    };

    // check if user had already voted
    if (hasVoted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#1e1e2f] text-[#e4e6eb]">
                <p className="text-center mb-5 text-lg font-semibold">You have already voted!</p>
            </div>
        );
    }
    
    return (
        <main className="bg-[#1e1e2f] text-[#e4e6eb] min-h-screen">
            <div>
                {isConnected ? (
                    <div className="py-12">
                        <div className="container max-w-3xl mx-auto bg-[#2a2a3b] p-8 rounded-lg shadow-md">
                            <h1 className="text-4xl font-bold text-center mb-6 text-[#6c63ff]">DVOTE</h1>
                            <h3 className="text-center font-semibold text-[#524ce8] mb-4 text-lg">
                                Vote for your Candidate
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4 text-center">
                                <ol className="list-none">
                                    {candidates.length > 0 ? (
                                        candidates.map((candidate) => (
                                            <li key={candidate.id} className="mb-2">
                                                <label className="block text-[#e4e6eb] font-medium">
                                                    <input
                                                        type="radio"
                                                        name="candidate"
                                                        value={candidate.id}
                                                        className="mr-2 accent-[#6c63ff]"
                                                        checked={selectedCandidateId === candidate.id}
                                                        onChange={() => setSelectedCandidateId(candidate.id)}
                                                    />
                                                    {candidate.name}
                                                </label>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-[#a0a3b1]">Loading candidates...</li>
                                    )}
                                </ol>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="submit"
                                        className="btn bg-[#6c63ff] hover:bg-[#524ce8] text-white py-2 px-4 rounded-lg shadow-lg"
                                    >
                                        Submit Vote
                                    </button>
                                </div>
                            </form>
                            {message && (
                                <div className="mt-6 text-center text-green-500 font-medium">{message}</div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <button
                            onClick={connectWallet}
                            className="btn bg-[#6c63ff] hover:bg-[#524ce8] text-white py-2 px-6 rounded-lg shadow-lg"
                        >
                            Connect Wallet
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
    
}
