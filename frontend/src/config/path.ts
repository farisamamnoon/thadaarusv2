export const paths = {
    auth: {
      login: {
        path: "/auth/login",
        getHref: (redirectTo?: string) =>
          `/auth/login${
            redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
          }`,
      },
      register: {
        path: "/auth/register",
        getHref: () => `/auth/register`,
      },
    },
  
    app: {
      home: {
        path: "/",
        getHref: () => "/",
      },
      dashboard: {
        path: "/dashboard",
        getHref: () => "/dashboard",
      },
      classes: {
        path: "/classes",
        getHref: () => "/classes",
        add: {
          path: "/classes/add",
          getHref: () => "/classes/add",
        },
        edit: {
          path: "/classes/:id/edit",
          getHref: (id: string) => `/classes/${id}/edit`,
        },
      },
      exams: {
        path: "/exams",
        getHref: () => "/exams",
        add: {
          path: "/exams/add",
          getHref: () => "/exams/add",
        },
        edit: {
          path: "/exams/:id/edit",
          getHref: (id: string) => `/exams/${id}/edit`,
        },
        marks: {
          add: {
            path: "/exams/:id/marks/add",
            getHref: (id: string) => `/exams/${id}/marks/add`,
          },
          edit: {
            path: "/exams/:id/marks/edit",
            getHref: (examId: string, markId: string) =>
              `/exams/${examId}/marks/${markId}/edit`,
          },
        },
      },
      account: {
        fees: {
          path: "/account/fees",
          getHref: () => "account/fees",
          add: {
            path: "/account/fees/add",
            getHref: () => "account/fees/add",
          },
        },
        salary: {
          path: "/account/salary",
          getHref: () => "account/salary",
        },
        other: {
          path: "/account/other",
          getHref: () => "account/other",
        },
        transactions: {
          path: "/account/transactions",
          getHref: () => "account/transactions",
        },
      },
  
      users: {
        teachers: {
          path: "/users/teachers",
          getHref: () => "/users/teachers",
          add: {
            path: "/users/students/add",
            getHref: () => "/classes/add",
          },
          edit: {
            path: "/users/students/:id/edit",
            getHref: (id: string) => `/users/students/${id}/edit`,
          },
        },
        students: {
          path: "/users/students",
          getHref: () => "/users/students",
          add: {
            path: "/users/students/add",
            getHref: () => "/users/students/add",
          },
          edit: {
            path: "/users/students/:id/edit",
            getHref: (id: string) => `/users/students/${id}/edit`,
          },
        },
      },
  
      attendance: {
        teacher: {
          path: "/attendance/teachers",
          getHref: () => "/attendance/teachers",
          add: {
            path: "/attendance/teacher/:id/add",
            getHref: (id: string) => `/attendance/teachers/${id}/add`,
          },
          report: {
            path: "/attendance/teachers/:id",
            getHref: (id: string) => `/attendance/teachers/${id}`,
          },
        },
        students: {
          path: "/attendance/students",
          getHref: () => "/attendance/students",
          report: {
            path: "/attendance/students/:id",
            getHref: (id: string) => `/attendance/students/${id}`,
          },
        },
        class: {
          path: "/attendance/classes",
          getHref: () => "/attendance/classes",
        },
      },
  
      homework: {
        path: "/homework",
        getHref: () => "/homework",
      },
    },
  
    student: {
      attendance: {
        path: "/student/attendance",
        getHref: () => `/student/attendance`,
      },
      mark: {
        path: "/student/mark",
        getHref: () => `/student/mark`,
      },
      homework: {
        path: "/student/homework",
        getHref: () => `/student/homework`,
      },
      fees: {
        path: "/student/fees",
        getHref: () => `/student/fees`,
      },
    },
  } as const;
  