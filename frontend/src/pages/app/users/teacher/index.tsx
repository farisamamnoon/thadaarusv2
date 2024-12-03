import { Select } from '../../../../components/ui/form';
import { Search } from '../../../../components/ui/search';
import { Table } from '../../../../components/ui/table';

export const Teachers = () => {
  return (
    <>
      <div className="mt-10 flex gap-4">
        <Search onChange={() => {}} className="w-1/2" />
        <Select
          options={[{ label: '1st', value: '' }]}
          className="appearance-auto"
          onChange={() => {}}
        />
      </div>
      <div>
        <Table
          data={[
            {
              id: '123',
              name: 'Farissdafgffffasdfsadfkljsadf;kljsa;dkfas;dkjf;lksajd f;lksajdf iasf;lkjfkjsadkf j;lksadjf;las flksajfd;l sa;dkj',
              age: 30,
            },
            { id: '124', name: 'Faris', age: 36 },
            { id: '125', name: 'Faris', age: 32 },
          ]}
          columns={[
            { title: 'Name', field: 'name' },
            {
              title: 'Age',
              field: 'age',
            },
          ]}
        />
      </div>
    </>
  );
};
