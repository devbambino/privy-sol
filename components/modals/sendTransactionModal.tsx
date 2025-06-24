"use client";

import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Modal } from "../ui/modal";

interface WalletAccount {
	address: string;
	chainType: string;
	walletClientType: string;
	connectorType: string;
	walletIndex?: number;
}

interface SendTransactionModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedWallet: WalletAccount | null;
	onSend: (wallet: WalletAccount, toAddress: string, amount: string) => void;
}

export function SendTransactionModal({
	isOpen,
	onClose,
	selectedWallet,
	onSend,
}: SendTransactionModalProps) {
	const [toAddress, setToAddress] = useState("");
	const [solAmount, setSolAmount] = useState("");

	const handleSend = () => {
		if (selectedWallet && toAddress && solAmount) {
			onSend(selectedWallet, toAddress, solAmount);
			onClose();
			setToAddress("");
			setSolAmount("");
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Send Transaction"
			description="Send SOL to another wallet address"
		>
			<div className="space-y-4">
				<Input
					label="To"
					value={toAddress}
					onChange={(e) => setToAddress(e.target.value)}
					placeholder="Enter recipient address"
				/>
				<Input
					label="SOL Amount"
					type="number"
					step="0.001"
					value={solAmount}
					onChange={(e) => setSolAmount(e.target.value)}
					placeholder="0.0"
				/>
				<Button
					onClick={handleSend}
					disabled={!selectedWallet || !toAddress || !solAmount}
					className="w-full"
				>
					Send Transaction
				</Button>
			</div>
		</Modal>
	);
=======
import { Modal } from "../ui/modal";
import { Input } from "../ui/input";
=======
>>>>>>> 8b3931a (chore: lint)
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Modal } from "../ui/modal";

interface WalletAccount {
	address: string;
	chainType: string;
	walletClientType: string;
	connectorType: string;
	walletIndex?: number;
}

interface SendTransactionModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedWallet: WalletAccount | null;
	onSend: (wallet: WalletAccount, toAddress: string, amount: string) => void;
}

export function SendTransactionModal({
	isOpen,
	onClose,
	selectedWallet,
	onSend,
}: SendTransactionModalProps) {
	const [toAddress, setToAddress] = useState("");
	const [solAmount, setSolAmount] = useState("");

	const handleSend = () => {
		if (selectedWallet && toAddress && solAmount) {
			onSend(selectedWallet, toAddress, solAmount);
			onClose();
			setToAddress("");
			setSolAmount("");
		}
	};

<<<<<<< HEAD
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Send Transaction"
      description="Send SOL to another wallet address"
    >
      <div className="space-y-4">
        <Input
          label="To"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
          placeholder="Enter recipient address"
        />
        <Input
          label="SOL Amount"
          type="number"
          step="0.001"
          value={solAmount}
          onChange={(e) => setSolAmount(e.target.value)}
          placeholder="0.0"
        />
        <Button
          onClick={handleSend}
          disabled={!selectedWallet || !toAddress || !solAmount}
          className="w-full"
        >
          Send Transaction
        </Button>
      </div>
    </Modal>
  );
>>>>>>> c33a7d3 (initial commit)
=======
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Send Transaction"
			description="Send SOL to another wallet address"
		>
			<div className="space-y-4">
				<Input
					label="To"
					value={toAddress}
					onChange={(e) => setToAddress(e.target.value)}
					placeholder="Enter recipient address"
				/>
				<Input
					label="SOL Amount"
					type="number"
					step="0.001"
					value={solAmount}
					onChange={(e) => setSolAmount(e.target.value)}
					placeholder="0.0"
				/>
				<Button
					onClick={handleSend}
					disabled={!selectedWallet || !toAddress || !solAmount}
					className="w-full"
				>
					Send Transaction
				</Button>
			</div>
		</Modal>
	);
>>>>>>> 8b3931a (chore: lint)
}
