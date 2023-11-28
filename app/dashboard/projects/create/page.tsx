import Form from '@/app/ui/projects/create-form';
import Breadcrumbs from '@/app/ui/projects/breadcrumbs';
import { fetchProjects, fetchInstitutions } from '@/app/lib/data';
 
export default async function Page() {
  const [projects, institutions] = await Promise.all([
    fetchProjects(),
    fetchInstitutions(),
  ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/dashboard/projects' },
          {
            label: 'Create Project',
            href: '/dashboard/projects/create',
            active: true,
          },
        ]}
      />
      <Form projects={projects} institutions={institutions} />
    </main>
  );
}