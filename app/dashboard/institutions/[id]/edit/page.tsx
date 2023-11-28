import Form from '@/app/ui/institutions/edit-form';
import Breadcrumbs from '@/app/ui/institutions/breadcrumbs';
import { fetchInvoiceById, fetchInstitutionById, fetchBankById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, institution, bank] = await Promise.all([
        fetchInvoiceById(id),
        fetchInstitutionById(id),
        fetchBankById(id),
      ]);
      
      if (!invoice) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Institutions', href: '/dashboard/institutions' },
          {
            label: 'Edit Institution',
            href: `/dashboard/institutions/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} institution={institution} bank={bank}/>
    </main>
  );
}