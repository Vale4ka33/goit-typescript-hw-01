type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const updatedUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...updatedUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});