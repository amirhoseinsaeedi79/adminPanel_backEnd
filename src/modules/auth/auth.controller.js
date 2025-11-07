import ApiResponse from "../../core/response/api-response.js";

// لیست همه کاربران
export const getUsers = async (req, res) => {
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
  ];

  return ApiResponse(res, 200, users, "لیست کاربران برگشت داده شد");
};

export const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
  ];

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return ApiResponse(res, 404, null, "کاربر پیدا نشد");
  }

  return ApiResponse(res, 200, user, "کاربر پیدا شد");
};
