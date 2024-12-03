import { Modal } from '../../components/ui/modal';

type StudentDeleteModalProps = {
  setDeleteDialog: React.Dispatch<
    React.SetStateAction<{
      toggle: boolean;
      id: string;
    }>
  >;
  onDelete: () => void;
};

export const StudentDeleteModal = ({
  setDeleteDialog,
  onDelete,
}: StudentDeleteModalProps) => {
  const closeModal = () => {
    setDeleteDialog({ toggle: false, id: '' });
  };

  return (
    <Modal onClose={closeModal}>
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-semibold text-primary-font ">
            Do you want to delete this student?
          </h3>
          <p className="text-sm text-secondary-font mt-2">
            Click Confirm if are sure you want to delete ...
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <button
            className="flex-grow border-2 border-primary rounded py-2 hover:bg-slate-50"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="flex-grow bg-primary text-white rounded py-2 hover:bg-opacity-70"
            onClick={onDelete}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};
