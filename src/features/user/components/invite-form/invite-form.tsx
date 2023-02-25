import { useMutation } from '@apollo/client';
import type { FC } from 'react';
import { useCreateUser } from 'src/features/user/hooks/use-create-user';
import { z } from 'zod';

import { Button } from '@/components/button';
import { Form } from '@/components/form';
import { InputControl } from '@/components/input-control';
import { createUserDocument } from '@/graphql/queries/queries';
import { cn } from '@/utils/cn';

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
  const [createUser] = useCreateUser();

  return (
    <Form<FormValue, typeof validationSchema>
      id='invite-form'
      onSubmit={(data) => {
        createUser({ variables: { name: data.name } });
      }}
      options={{
        reValidateMode: 'onChange',
        defaultValues: {
          name: '',
        },
      }}
      schema={validationSchema}
      className={cn('flex gap-2')}
    >
      {({ control }) => {
        return (
          <>
            <div className='flex-1'>
              <InputControl name='name' control={control} />
            </div>
            <Button type='submit'>追加する</Button>
          </>
        );
      }}
    </Form>
  );
};
