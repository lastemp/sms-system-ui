import Form from '@/app/ui/artists/edit-form';
import Breadcrumbs from '@/app/ui/artists/breadcrumbs';
import { fetchInvoiceById, fetchArtistById, fetchBankById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, artist, bank] = await Promise.all([
        fetchInvoiceById(id),
        fetchArtistById(id),
        fetchBankById(id),
      ]);
      
      if (!invoice) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Artists', href: '/dashboard/artists' },
          {
            label: 'Edit Artist',
            href: `/dashboard/artists/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} artist={artist} bank={bank}/>
    </main>
  );
}