import Image from 'next/image';
import { UpdateInstitution, DeleteInstitution } from '@/app/ui/institutions/buttons';
//import InvoiceStatus from '@/app/ui/artists/status';
//import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchInstitutions } from '@/app/lib/data';

export default async function InstitutionsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //const invoices = await fetchFilteredInvoices(query, currentPage);
  const Institutions = await fetchInstitutions();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {Institutions?.map((institution) => (
              <div
                key={institution.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={institution.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${institution.name}'s profile picture`}
                      /> */}
                      <p>{institution.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{institution.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {institution.kra_pin}
                    </p>
                    <p>{institution.mobile_no}</p>
                    <p>{institution.bank_account}</p>
                    <p>{institution.bank_name}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInstitution id={institution.id} />
                    <DeleteInstitution id={institution.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Institution
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  KRA Pin
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Mobile No
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Bank Account
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Bank Name
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {Institutions?.map((institution) => (
                <tr
                  key={institution.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={institution.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${institution.name}'s profile picture`}
                      /> */}
                      <p>{institution.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {institution.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {institution.kra_pin}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {institution.mobile_no}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {institution.bank_account}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {institution.bank_name}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInstitution id={institution.id} />
                      <DeleteInstitution id={institution.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
