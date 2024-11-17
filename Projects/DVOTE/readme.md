
# Overview
DVote uses blockchain to conduct secure and tamper-proof decentralized voting.
A person can deploy the contract with the election name, thus becoming the 'owner'. Owner can add candidates based on their name. Users can view the candidates and vote for their preferred candidate. Anyone can view the results of the election.

## Tech Stack
Foundry for contracts ( creation, testing, deployment on local chain)
Nextjs for frontend
Ethers for connection of frontend to contracts

## Installation   
1) Clone the repository
2) Compile the contracts:   

```bash
cd contracts/
forge compile
```
3) Deploy contracts to local Blockchain (Anvil):

```bash
forge script script/Deploy.s.sol --fork-url http://localhost:8545 --private-key <PRIVATE_KEY> --broadcast
```

4) Install dependencies in frontend folder:

```bash
cd frontend/
npm install
```
5) Run the app:
```bash
npm run dev
```