export const wallet = {
  balance: '₦2,450,000',
  upcoming: '₦320,000',
  limits: '₦5,000,000 daily',
  methods: [
    { id: 'card1', type: 'Visa', last4: '1234', bank: 'GTBank' },
    { id: 'bank1', type: 'Bank', last4: '0145', bank: 'Zenith Bank' },
  ],
  transactions: [
    { id: 'tx1', title: 'Deposit from GTBank', amount: '+₦500,000', time: 'Today, 09:12', status: 'Success' },
    { id: 'tx2', title: 'Viewing Reservation - Ikoyi', amount: '-₦45,000', time: 'Yesterday', status: 'Completed' },
    { id: 'tx3', title: 'Wallet Refund', amount: '+₦65,000', time: 'Mon', status: 'Success' },
  ],
};
