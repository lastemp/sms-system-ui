import Pagination from '@/app/ui/institutions/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/institutions/table';
import { CreateInstitution } from '@/app/ui/institutions/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InstitutionsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInstitutionsPages } from '@/app/lib/data';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInstitutionsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Institutions</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search institutions..." />
        <CreateInstitution />
      </div>
      <Suspense key={query + currentPage} fallback={<InstitutionsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        { <Pagination totalPages={totalPages} /> }
      </div>
    </div>
  );
}