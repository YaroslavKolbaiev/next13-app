interface PasswordProps {
  oldPassword: string;
  newPassword: string;
}

export const onChangePassword = async (passwordData: PasswordProps) => {
  const res = await fetch('/api/user/change-password', {
    method: 'PATCH',
    body: JSON.stringify(passwordData),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};
