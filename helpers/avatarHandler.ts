import axios from 'axios';

export default async function avatarHandler(
  event: React.FormEvent<HTMLFormElement>,
  imageUrl: string,
  setIsAvatarImageForm: (value: boolean) => void,
) {
  event.preventDefault();

  const avatarData = {
    avatar: imageUrl,
  };

  try {
    await axios.post('/api/user/uploadAvatar', avatarData);
    setIsAvatarImageForm(false);
  } catch (error) {
    alert('uploading avatar failed');
  }
}
