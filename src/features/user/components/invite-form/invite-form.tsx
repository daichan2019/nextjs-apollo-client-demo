import type { FC } from 'react';
import { z } from 'zod';

import { Button } from '@/components/button';
import { Form } from '@/components/form';
import { InputControl } from '@/components/input-control';

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
  return (
    <Form<FormValue, typeof validationSchema>
      id='invite-form'
      onSubmit={async (data) => {
        console.log(data);
      }}
      options={{
        reValidateMode: 'onChange',
        defaultValues: {
          name: '',
        },
      }}
      schema={validationSchema}
    >
      {({ control }) => {
        return (
          <>
            <div className='rounded-lg bg-white p-10'>
              <InputControl name='name' control={control} />
            </div>
            <div className='mt-10 flex justify-center'>
              <Button>送信する</Button>
            </div>
          </>
        );
      }}
    </Form>
  );
};
