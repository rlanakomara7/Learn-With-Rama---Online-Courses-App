export function getUsers() {
  const data = localStorage.getItem("users");

  if (data) {
    return JSON.parse(data);
  }
  return [];
}

export function signUp(username, email, password) {
  const users = getUsers();

  const emailExist = users.find((user) => user.email === email);
  if (emailExist) {
    return "Email is already Registered";
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return "";
}

export function signIn(email, password) {
  const users = getUsers();

  const user = users.find(
    (item) => item.email === email && item.password === password,
  );

  if (!user) {
    return "Incorrect email or password";
  }

  localStorage.setItem("username", user.username);
  return "";
}

export function getUsername() {
  return localStorage.getItem("username");
}

export function signOut() {
  localStorage.removeItem("username");
}
