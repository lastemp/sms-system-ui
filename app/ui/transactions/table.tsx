//import Image from 'next/image';
import { UpdateTransaction, DeleteTransaction } from '@/app/ui/transactions/buttons';
//import InvoiceStatus from '@/app/ui/artists/status';
//import { formatDateToLocal, formatCurrency, formatCurrencyToLocal } from '@/app/lib/utils';
import { fetchExaminationResults } from '@/app/lib/data';

export default async function TransactionsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //const invoices = await fetchFilteredInvoices(query, currentPage);
  const transactions = await fetchExaminationResults();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {transactions?.map((transaction) => (
              <div
                key={transaction.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{transaction.date_of_entry}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{transaction.index_number}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {transaction.result}
                    </p>
                  </div>
                  {/* <div className="flex justify-end gap-2">
                    <UpdateTransaction id={transaction.id} />
                    <DeleteTransaction id={transaction.id} />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Date
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  IndexNumber
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Result
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {transactions?.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{transaction.date_of_entry}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{transaction.index_number}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {transaction.result}
                  </td>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTransaction id={transaction.id} />
                      <DeleteTransaction id={transaction.id} />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
