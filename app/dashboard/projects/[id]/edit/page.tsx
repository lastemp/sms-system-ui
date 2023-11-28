import Form from '@/app/ui/projects/edit-form';
import Breadcrumbs from '@/app/ui/projects/breadcrumbs';
import { fetchInvoiceById, fetchProjectById, fetchInstitutionById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, project, institution] = await Promise.all([
        fetchInvoiceById(id),
        fetchProjectById(id),
        fetchInstitutionById(id),
      ]);
      
      if (!invoice) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/dashboard/projects' },
          {
            label: 'Edit Project',
            href: `/dashboard/projects/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} project={project} institution={institution}/>
    </main>
  );
}