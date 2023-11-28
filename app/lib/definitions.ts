// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type LatestEvent = {
  id: string;
  name: string;
  institution_name: string;
  total_budget: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type ArtistField = {
  id: string;
  name: string;
};

export type BankField = {
  id: string;
  name: string;
};

export type InstitutionField = {
  id: string;
  name: string;
};

export type ProjectField = {
  id: string;
  name: string;
};

export type TransactionField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type ArtistForm = {
  id: string;
  customer_id: string;
  name: string;
  national_id: number;
  mobile_no: number;
  bank_name: string;
  bank_account: number;
};

export type InstitutionForm = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  kra_pin: string;
  mobile_no: number;
  bank_name: string;
  bank_account: number;
};

export type BankForm = {
  id: string;
  name: string;
};

export type ProjectForm = {
  id: string;
  name: string;
  total_budget: number;
  funds_deposited: number;
  date: string;
  institution_name: string;
};

export type TransactionForm = {
  id: string;
  event_name: string;
  artist_name: string;
  amount_owed: number;
  amount_paid: number;
  date: string;
  institution_name: string;
};

export type MessageNotificationForm = {
  id: number;
  message_date: string;
  message_from: string;
  message_id: string;
  message_text: string;
};
