'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

// artistId
const ArtistSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select artist.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

// institutionId
const InstitutionSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select institution.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

// projectId
const ProjectSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select project.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

// transactionId
const TransactionSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select transaction.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than 0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });
// Use Zod to update the expected types
//const UpdateInvoice = InvoiceSchema.omit({ date: true });
// Modified on 08-11-2023. Was throwing an error because of mismatch on fields
const UpdateInvoice = InvoiceSchema.omit({ id: true, date: true });

const CreateArtist = ArtistSchema.omit({ id: true, date: true });
const UpdateArtist = ArtistSchema.omit({ id: true, date: true });

const CreateInstitution = InstitutionSchema.omit({ id: true, date: true });
const UpdateInstitution = InstitutionSchema.omit({ id: true, date: true });

const CreateProject = ProjectSchema.omit({ id: true, date: true });
const UpdateProject = ProjectSchema.omit({ id: true, date: true });

const CreateTransaction = TransactionSchema.omit({ id: true, date: true });
const UpdateTransaction = TransactionSchema.omit({ id: true, date: true });

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

/*
export async function createInvoice(formData: FormData) {

  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const date = new Date().toISOString().split("T")[0];
  // store monetary values in cents in
  const amountInCents = amount * 100;

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
*/
export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  /*
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  */

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function createArtist(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateArtist.safeParse({
    customerId: formData.get('customerId'), // artistId
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Artist.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  /*
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  */

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/artists');
  redirect('/dashboard/artists');
}

export async function createInstitution(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInstitution.safeParse({
    customerId: formData.get('customerId'), // artistId
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Institution.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  /*
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  */

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/institutions');
  redirect('/dashboard/institutions');
}

export async function createProject(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateProject.safeParse({
    customerId: formData.get('customerId'), // artistId
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  /*
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  */

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function createTransaction(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateTransaction.safeParse({
    customerId: formData.get('customerId'), // artistId
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Transaction.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  /*
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  */

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/transactions');
  redirect('/dashboard/transactions');
}

/*
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
*/
export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  /*
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
  */

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateArtist(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateArtist.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Artist.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  /*
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
  */

  revalidatePath('/dashboard/artists');
  redirect('/dashboard/artists');
}

export async function updateInstitution(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInstitution.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Institution.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  /*
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
  */

  revalidatePath('/dashboard/institutions');
  redirect('/dashboard/institutions');
}

export async function updateProject(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateProject.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Project.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  /*
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
  */

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function updateTransaction(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateTransaction.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Transaction.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  /*
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." };
  }
  */

  revalidatePath('/dashboard/transactions');
  redirect('/dashboard/transactions');
}

export async function deleteInvoice(id: string, formData: FormData) {
  //throw new Error("Failed to Delete Invoice");
  // if above code is used then below code block would be unreachable

  try {
    //await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice' };
  }
}

export async function deleteArtist(id: string, formData: FormData) {
  //throw new Error("Failed to Delete Artist");
  // if above code is used then below code block would be unreachable

  try {
    //await sql`DELETE FROM artists WHERE id = ${id}`;
    revalidatePath('/dashboard/artists');
    return { message: 'Deleted Artist' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Artist' };
  }
}

export async function deleteInstitution(id: string, formData: FormData) {
  //throw new Error("Failed to Delete Institution");
  // if above code is used then below code block would be unreachable

  try {
    //await sql`DELETE FROM institutions WHERE id = ${id}`;
    revalidatePath('/dashboard/institutions');
    return { message: 'Deleted Institution' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Institution' };
  }
}

export async function deleteProject(id: string, formData: FormData) {
  //throw new Error("Failed to Delete Event");
  // if above code is used then below code block would be unreachable

  try {
    //await sql`DELETE FROM institutions WHERE id = ${id}`;
    revalidatePath('/dashboard/projects');
    return { message: 'Deleted Project' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Project' };
  }
}

export async function deleteTransaction(id: string, formData: FormData) {
  //throw new Error("Failed to Delete Transaction");
  // if above code is used then below code block would be unreachable

  try {
    //await sql`DELETE FROM institutions WHERE id = ${id}`;
    revalidatePath('/dashboard/transactions');
    return { message: 'Deleted Transaction' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Transaction' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}
