"use client";

import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { Textarea } from "../ui/textarea";

interface WalletAccount {
	address: string;
	chainType: string;
	walletClientType: string;
	connectorType: string;
	walletIndex?: number;
}

interface SignTransactionModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedWallet: WalletAccount | null;
	onSign: (wallet: WalletAccount, to: string) => void;
}

export function SignTransactionModal({
	isOpen,
	onClose,
	selectedWallet,
	onSign,
}: SignTransactionModalProps) {
	const [to, setTo] = useState("");

	const handleSign = () => {
		if (selectedWallet) {
			onSign(selectedWallet, to);
			onClose();
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Sign Transaction"
			description="Sign a transaction with your selected wallet"
		>
			<div className="space-y-4">
				<Textarea
					label="Message"
					value={to}
					onChange={(e) => setTo(e.target.value)}
					placeholder="Enter address you'd like to send 0.1 SOL to"
				/>
				<Button
					onClick={handleSign}
					disabled={!selectedWallet}
					className="w-full"
				>
					Sign
				</Button>
			</div>
		</Modal>
	);
=======
=======
import { Button } from "../ui/button";
>>>>>>> 8b3931a (chore: lint)
import { Modal } from "../ui/modal";
import { Textarea } from "../ui/textarea";

interface WalletAccount {
	address: string;
	chainType: string;
	walletClientType: string;
	connectorType: string;
	walletIndex?: number;
}

interface SignTransactionModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedWallet: WalletAccount | null;
	onSign: (wallet: WalletAccount, to: string) => void;
}

export function SignTransactionModal({
	isOpen,
	onClose,
	selectedWallet,
	onSign,
}: SignTransactionModalProps) {
	const [to, setTo] = useState("");

	const handleSign = () => {
		if (selectedWallet) {
			onSign(selectedWallet, to);
			onClose();
		}
	};

<<<<<<< HEAD
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Transaction"
      description="Sign a transaction with your selected wallet"
    >
      <div className="space-y-4">
        <Textarea
          label="Message"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Enter address you'd like to send 0.1 SOL to"
        />
        <Button
          onClick={handleSign}
          disabled={!selectedWallet}
          className="w-full"
        >
          Sign
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
			title="Sign Transaction"
			description="Sign a transaction with your selected wallet"
		>
			<div className="space-y-4">
				<Textarea
					label="Message"
					value={to}
					onChange={(e) => setTo(e.target.value)}
					placeholder="Enter address you'd like to send 0.1 SOL to"
				/>
				<Button
					onClick={handleSign}
					disabled={!selectedWallet}
					className="w-full"
				>
					Sign
				</Button>
			</div>
		</Modal>
	);
>>>>>>> 8b3931a (chore: lint)
}
