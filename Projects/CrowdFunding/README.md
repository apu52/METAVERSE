# CrowdFunding Smart Contract

## Project Overview
This contract allows contributors to fund a project until a set deadline. If the funding target is met, the manager can withdraw the collected funds. Otherwise, contributors can claim refunds.

## Key Features
- **Minimum Contribution**: Contributors must send at least 100 wei.
- **Target & Deadline**: Funds must reach the target amount before the deadline.
- **Refunds & Withdrawals**: If the target isn't met by the deadline, contributors can get refunds.

## How to Deploy on Remix IDE
1. **Open** [Remix IDE](https://remix.ethereum.org/).
2. **Create a new file** and paste the contract code.
3. **Select compiler version**: Choose version `0.8.0` or higher and compile.
4. **Deploy**: Enter `_target` (in wei) and `_deadline` (in seconds) and deploy.

## How to Use
- Call `sendEth` to contribute.
- After the deadline:
  - **If target met**, the manager calls `withdrawFunds`.
  - **If target not met**, contributors call `refund`.