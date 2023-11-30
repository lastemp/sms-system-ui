import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  /*
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
  */
  /* const {
    numberOfProjects,
    numberOfArtists,
    totalPaidProjects,
    totalPendingProjects,
  } = await fetchCardData(); */

  const {
    numberOfMessageNotifications,
    numberOfExaminationResults,
    totalSuccessfulMessageNotifications,
    totalFailedMessageNotifications,
  } = await fetchCardData();

  return (
    <>
      <Card title="Successful" value={totalSuccessfulMessageNotifications} type="successful" />
      <Card title="Failed" value={totalFailedMessageNotifications} type="failed" />
      <Card title="Total Messages" value={numberOfMessageNotifications} type="messagenotifications" />
      <Card
        title="Total Exam Results"
        value={numberOfExaminationResults}
        type="examinationresults"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'messagenotifications' | 'examinationresults' | 'failed' | 'successful';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
