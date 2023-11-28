import Form from '@/app/ui/artists/create-form';
import Breadcrumbs from '@/app/ui/artists/breadcrumbs';
import { fetchArtists, fetchBanks } from '@/app/lib/data';
 
export default async function Page() {
  /*
  const artists = await fetchArtists();
  const banks = await fetchBanks;
  */
  const [artists, banks] = await Promise.all([
    fetchArtists(),
    fetchBanks(),
  ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Artists', href: '/dashboard/artists' },
          {
            label: 'Create Artist',
            href: '/dashboard/artists/create',
            active: true,
          },
        ]}
      />
      <Form artists={artists} banks={banks} />
    </main>
  );
}