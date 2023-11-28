import Image from 'next/image';
import { UpdateArtist, DeleteArtist } from '@/app/ui/artists/buttons';
//import InvoiceStatus from '@/app/ui/artists/status';
//import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchArtists } from '@/app/lib/data';

export default async function ArtistsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //const invoices = await fetchFilteredInvoices(query, currentPage);
  const Artists = await fetchArtists();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {Artists?.map((artist) => (
              <div
                key={artist.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={artist.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${artist.name}'s profile picture`}
                      /> */}
                      <p>{artist.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{artist.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {artist.national_id}
                    </p>
                    <p>{artist.mobile_no}</p>
                    <p>{artist.bank_account}</p>
                    <p>{artist.bank_name}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateArtist id={artist.id} />
                    <DeleteArtist id={artist.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Artist
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  National Id
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
              {Artists?.map((artist) => (
                <tr
                  key={artist.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={artist.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${artist.name}'s profile picture`}
                      /> */}
                      <p>{artist.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {artist.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {artist.national_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {artist.mobile_no}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {artist.bank_account}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {artist.bank_name}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateArtist id={artist.id} />
                      <DeleteArtist id={artist.id} />
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
