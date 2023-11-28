import Form from '@/app/ui/institutions/create-form';
import Breadcrumbs from '@/app/ui/institutions/breadcrumbs';
import { fetchInstitutions, fetchBanks } from '@/app/lib/data';
 
export default async function Page() {
  const [institutions, banks] = await Promise.all([
    fetchInstitutions(),
    fetchBanks(),
  ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Institutions', href: '/dashboard/institutions' },
          {
            label: 'Create Institution',
            href: '/dashboard/institutions/create',
            active: true,
          },
        ]}
      />
      <Form institutions={institutions} banks={banks} />
    </main>
  );
}