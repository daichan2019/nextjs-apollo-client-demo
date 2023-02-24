import { useMutation } from '@apollo/client';
import type { FC } from 'react';
import { useCreateUser } from 'src/features/user/hooks/use-create-user';
import { z } from 'zod';

import { Button } from '@/components/button';
import { Form } from '@/components/form';
import { InputControl } from '@/components/input-control';
import { createUserDocument } from '@/graphql/queries/queries';

type FormValue = {
  name: string;
};

const validationSchema = z.object({
  name: z
    .string()
    .min(1, { message: '名前を入力してください' })
    .max(40, { message: '名前は40文字以内で入力してください' }),
});

export const InviteForm: FC = () => {
  const [createUser] = useMutation(createUserDocument);

  return (
    <Form<FormValue, typeof validationSchema>
      id='invite-form'
      onSubmit={async (data) => {
        await createUser({ variables: { name: data.name } });
      }}
      options={{
        reValidateMode: 'onChange',
        defaultValues: {
          name: '',
        },
      }}
      schema={validationSchema}
      className='flex gap-3'
    >
      {({ control }) => {
        return (
          <>
            <InputControl name='name' control={control} />
            <Button type='submit'>追加する</Button>
          </>
        );
      }}
    </Form>
  );
};
