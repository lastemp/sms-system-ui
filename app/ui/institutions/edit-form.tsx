'use client';

import { InstitutionForm, BankForm, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInstitution } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditInstitutionForm({
  invoice,
  institution,
  bank,
}: {
  invoice: InvoiceForm;
  institution: InstitutionForm;
  bank: BankForm;
}) {
  const initialState = { message: null, errors: {} };
  const updateInstitutionWithId = updateInstitution.bind(null, invoice.id);
  const [state, dispatch] = useFormState(updateInstitutionWithId, initialState);
  
  return (
    <form action={dispatch}>
      <input type="hidden" name="id" value={invoice.id} />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* institution Name */}
        <div className="mb-4">
          <label htmlFor="kraPin" className="mb-2 block text-sm font-medium">
            Institution Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="institution"
                name="institution"
                type="string"
                defaultValue={institution.name}
                //step="0.01"
                placeholder="Enter Institution Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="institution-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.institution ? (
            <div
              id="institution-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.institution.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* KRA Pin */}
        <div className="mb-4">
          <label htmlFor="kraPin" className="mb-2 block text-sm font-medium">
            KRA Pin
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="kraPin"
                name="kraPin"
                type="string"
                defaultValue={institution.kra_pin}
                //step="0.01"
                placeholder="Enter KRA Pin"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="kraPin-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.kraPin ? (
            <div
              id="kraPin-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.kraPin.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Mobile No */}
        <div className="mb-4">
          <label htmlFor="mobileNo" className="mb-2 block text-sm font-medium">
            Mobile No
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="mobileNo"
                name="mobileNo"
                type="number"
                defaultValue={institution.mobile_no}
                //step="0.01"
                placeholder="Enter Mobile No"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="mobileNo-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.mobileNo ? (
            <div
              id="mobileNo-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.mobileNo.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Bank Account */}
        <div className="mb-4">
          <label htmlFor="bankAccount" className="mb-2 block text-sm font-medium">
            Bank Account
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="bankAccount"
                name="bankAccount"
                type="number"
                defaultValue={institution.bank_account}
                //step="0.01"
                placeholder="Enter Bank Account"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="bankAccount-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.bankAccount ? (
            <div
              id="bankAccount-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.bankAccount.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Bank Name */}
        <div className="mb-4">
          <label htmlFor="institution" className="mb-2 block text-sm font-medium">
            Bank
          </label>
          <div className="relative">
            <select
              id="bankName"
              name="bankId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={institution.id}
              aria-describedby="bankName-error"
            >
              <option value="" disabled>
                Select bank
              </option>
              <option key={institution.id} value={institution.id}>
                  {bank.name}
                </option>
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
            {state.errors?.bankId ? (
          <div
            id="bankName-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {state.errors.bankId.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/institutions"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Institution</Button>
      </div>
    </form>
  );
}
