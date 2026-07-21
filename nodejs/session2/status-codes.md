# HTTP Status Codes

## 200 OK
Meaning:
The request was successful.

Example:
Fetching all users from /users.

---

## 201 Created
Meaning:
A new resource was successfully created.

Example:
A new user is added using a POST request.

---

## 400 Bad Request
Meaning:
The client sent an invalid request.

Example:
Required fields are missing in a form submission.

---

## 401 Unauthorized
Meaning:
Authentication is required.

Example:
A user tries to access an API without logging in.

---

## 403 Forbidden
Meaning:
The user is authenticated but does not have permission.

Example:
A normal user tries to access the admin dashboard.

---

## 404 Not Found
Meaning:
The requested resource does not exist.

Example:
Requesting /users/100 when no such user exists.

---

## 500 Internal Server Error
Meaning:
An unexpected server-side error occurred.

Example:
The server crashes while reading the database.