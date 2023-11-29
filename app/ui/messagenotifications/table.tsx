//import Image from 'next/image';
import { UpdateTransaction, DeleteTransaction } from '@/app/ui/messagenotifications/buttons';
//import InvoiceStatus from '@/app/ui/artists/status';
import { formatDateToLocal, formatCurrency, formatCurrencyToLocal } from '@/app/lib/utils';
import { fetchMessageNotifications } from '@/app/lib/data';

export default async function TransactionsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //const invoices = await fetchFilteredInvoices(query, currentPage);
  const messageNotifications = await fetchMessageNotifications();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {messageNotifications?.map((notification) => (
              <div
                key={notification.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{notification.message_date}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{notification.message_from}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {notification.message_text}
                    </p>
                    <p>{notification.message_to}</p>
                  </div>
                  {/* <div className="flex justify-end gap-2">
                    <UpdateTransaction id={notification.message_id} />
                    <DeleteTransaction id={notification.message_id} />
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
                  Mobile
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Message
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Shortcode
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {messageNotifications?.map((notification) => (
                <tr
                  key={notification.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{notification.message_date}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{notification.message_from}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {notification.message_text}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {notification.message_to}
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    {notification.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {notification.institution_name}
                  </td> */}
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTransaction id={notification.message_id} />
                      <DeleteTransaction id={notification.message_id} />
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
