'use client';

import { TransactionField, InstitutionField, ProjectField, ArtistField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTransaction } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
//import { banks } from '@/app/lib/placeholder-data';

export default function Form({ transactions, institutions, projects, artists }: { transactions: TransactionField[]; institutions: InstitutionField[]; projects: ProjectField[]; artists: ArtistField[];}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createTransaction, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* project Name */}
        <div className="mb-4">
          <label htmlFor="project" className="mb-2 block text-sm font-medium">
            Project
          </label>
          <div className="relative">
            <select
              id="projectName"
              name="projectId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="projectName-error"
            >
              <option value="" disabled>
                Select project
              </option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
            {state.errors?.projectId ? (
          <div
            id="projectName-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {state.errors.projectId.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        </div>

        {/* Artist Name */}
        <div className="mb-4">
          <label htmlFor="artist" className="mb-2 block text-sm font-medium">
            Artist
          </label>
          <div className="relative">
            <select
              id="artistName"
              name="artistId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="artistName-error"
            >
              <option value="" disabled>
                Select artist
              </option>
              {artists.map((artist) => (
                <option key={artist.id} value={artist.id}>
                  {artist.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
            {state.errors?.artistId ? (
          <div
            id="artistName-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {state.errors.artistId.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        </div>

        {/* Amount Owed */}
        <div className="mb-4">
          <label htmlFor="amountOwed" className="mb-2 block text-sm font-medium">
            Amount Owed
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amountOwed"
                name="amountOwed"
                type="number"
                step="0.01"
                placeholder="Enter Amount Owed"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amountOwed-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.amountOwed ? (
            <div
              id="amountOwed-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.amountOwed.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Amount Paid */}
        <div className="mb-4">
          <label htmlFor="amountPaid" className="mb-2 block text-sm font-medium">
            Amount Paid
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amountPaid"
                name="amountPaid"
                type="number"
                step="0.01"
                placeholder="Enter Amount Paid"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amountPaid-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.amountPaid ? (
            <div
              id="amountPaid-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.amountPaid.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

         {/* Date */}
         <div className="mb-4">
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Date
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="date"
                name="date"
                type="string"
                //step="0.01"
                placeholder="Enter Date"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="date-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.date ? (
            <div
              id="date-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.date.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Institution Name */}
        <div className="mb-4">
          <label htmlFor="institution" className="mb-2 block text-sm font-medium">
            Institution
          </label>
          <div className="relative">
            <select
              id="institutionName"
              name="institutionId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="institutionName-error"
            >
              <option value="" disabled>
                Select institution
              </option>
              {institutions.map((institution) => (
                <option key={institution.id} value={institution.id}>
                  {institution.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
            {state.errors?.institutionId ? (
          <div
            id="institutionName-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {state.errors.institutionId.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/transactions"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Transaction</Button>
      </div>
    </form>
  );
}
