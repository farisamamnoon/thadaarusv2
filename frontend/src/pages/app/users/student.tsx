import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DeleteIcon, EditIcon } from '../../../components/assets/icons';
import { Select } from '../../../components/ui/form';
import { Search } from '../../../components/ui/search';
import { Table } from '../../../components/ui/table';
import { StudentDeleteModal } from '../../../features/students/student-delete-model';
import { ageFromDate, formatDate } from '../../../utils/date';
import { paths } from '../../../config/path';

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

export const StudentAttendance = () => {
  const [data, setData] = useState(defaultData);
  const [deleteDialog, setDeleteDialog] = useState({ toggle: false, id: '' });
  const navigate = useNavigate();

  const handleDelete = () => {
    setData((data) => data.filter((entry) => entry.id !== deleteDialog.id));
    setDeleteDialog({ toggle: false, id: '' });
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
        <button
          className="ml-auto bg-primary py-2 px-4 text-white rounded"
          onClick={() => navigate(paths.app.users.students.add.getHref())}
        >
          Add Student
        </button>
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
                      onClick={() => setDeleteDialog({ toggle: true, id })}
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
      {deleteDialog.toggle && (
        <StudentDeleteModal
          onDelete={handleDelete}
          setDeleteDialog={setDeleteDialog}
        />
      )}
    </>
  );
};
