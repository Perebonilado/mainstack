export interface WalletModel {
  ledgerBalance: WalletItem;
  totalPayout: WalletItem;
  totalRevenue: WalletItem;
  pendingPayout: WalletItem;
  balance: WalletItem;
}

interface WalletItem {
  amount: string;
  label: string;
  toolTip?: string;
}
