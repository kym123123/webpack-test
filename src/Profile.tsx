import React from 'react';
interface IProfileProps {
  username: string;
  name: string;
}

const Profile = ({ username, name }: IProfileProps) => {
  return (
    <div>
      <b>{username}</b>
      <span>({name})</span>
    </div>
  );
};

export default Profile;
