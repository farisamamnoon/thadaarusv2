export type Role = 'ADMIN' | 'STUDENT' | 'TEACHER';

export type User = {
  username: string;
  role: Role;
  organizationId?: string | number;
  batchId?: string;
  classId?: string;
};
