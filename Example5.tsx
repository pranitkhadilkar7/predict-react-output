import React, { useEffect, useState } from 'react';

export function Example5({ userId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log('Fetching user profile for:', userId);
    fetch(`/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Profile: {JSON.stringify(profile)}</p>
    </div>
  );
}

// useEffect will only run once because the dependency array is empty ([]). So, even if userId changes, the component will not fetch a new profile. To fix this, userId should be added to the dependency array.
