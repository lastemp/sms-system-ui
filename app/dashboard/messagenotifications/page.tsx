import Pagination from '@/app/ui/messagenotifications/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/messagenotifications/table';
import { CreateTransaction } from '@/app/ui/messagenotifications/buttons';
import { lusitana } from '@/app/ui/fonts';
import { TransactionsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchmessageNotificationsPages } from '@/app/lib/data';
 
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
  const totalPages = await fetchmessageNotificationsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Message Notifications</h1>
      </div>
      {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search message notifications..." />
        <CreateTransaction />
      </div> */}
      <Suspense key={query + currentPage} fallback={<TransactionsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        { <Pagination totalPages={totalPages} /> }
      </div>
    </div>
  );
}