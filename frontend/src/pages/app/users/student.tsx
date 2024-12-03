import { useState } from 'react';
import { DeleteIcon, EditIcon } from '../../../components/assets/icons';
import { Select } from '../../../components/ui/form';
import { Search } from '../../../components/ui/search';
import { Table } from '../../../components/ui/table';

const defaultData = [
  {
    id: String(Math.random() * 10000),
    name: 'Faris',
    dob: new Date(2003, 1, 14),
    classId: '2',
    email: 'fairms@madf.com',
    phoneNumber: '091820933321',
  },
  {
    id: String(Math.random() * 10000),
    name: 'Faris',
    dob: new Date(),
    classId: '1',
    email: 'fairms@madf.com',
    phoneNumber: '091820933321',
  },
  {
    id: String(Math.random() * 10000),
    name: 'Faris',
    dob: new Date(),
    classId: '3',
    email: 'fairms@madf.com',
    phoneNumber: '091820933321',
  },
  {
    id: String(Math.random() * 10000),
    name: 'Faris',
    classId: '1',
    dob: new Date(),
    email: 'fairms@madf.com',
    phoneNumber: '091820933321',
  },
  {
    id: String(Math.random() * 10000),
    name: 'Faris',
    dob: new Date(),
    classId: '2',
    email: 'fairms@madf.com',
    phoneNumber: '091820933321',
  },
];

const ageFromDate = (date: Date) => {
  return Math.abs(date.getFullYear() - new Date().getFullYear());
};
const formatDate = (date: Date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const StudentAttendance = () => {
  const [data, setData] = useState(defaultData);

  const handleDelete = (id: string) => {
    setData((data) => data.filter((entry) => entry.id !== id));
  };

  return (
    <>
      <div className="mt-10 flex gap-4">
        <Search onChange={() => {}} className="w-1/2" />
        <Select
          defaultValue="All"
          options={[
            { label: '1st', value: '1' },
            { label: '2nd', value: '2' },
            { label: '3rd', value: '3' },
          ]}
          className="appearance-auto"
          onChange={(event) => {
            if (event.target.value === 'all') return setData(defaultData);

            setData(
              defaultData.filter((data) => data.classId === event.target.value)
            );
          }}
        />
      </div>
      <div>
        <Table
          data={data}
          columns={[
            { title: 'Name', field: 'name' },
            {
              title: 'Date of Birth',
              Cell: ({ entry }) => (
                <div className="flex justify-center gap-4">
                  <span>{formatDate(entry.dob)}</span>
                  <span>{ageFromDate(entry.dob)} Years</span>
                </div>
              ),
            },
            {
              title: 'E-Mail',
              field: 'email',
            },
            {
              title: 'Phone Number',
              field: 'phoneNumber',
            },
            {
              title: 'Actions',
              Cell: ({ entry: { id } }) => {
                return (
                  <div className="flex justify-center gap-8">
                    <span className="cursor-pointer">
                      <EditIcon />
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={handleDelete.bind(null, id)}
                    >
                      <DeleteIcon />
                    </span>
                  </div>
                );
              },
            },
          ]}
        />
      </div>
    </>
  );
};
