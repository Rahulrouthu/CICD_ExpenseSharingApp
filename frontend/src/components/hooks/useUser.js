import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import defaultApi, { directApi } from '@/services/api';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const { loggedInUser } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      if (loggedInUser) {
        setIsLoading(true);

        try {
          let response;
          try {
            response = await defaultApi.get(`/users/user/${loggedInUser}`);
          } catch (proxyError) {
            response = await directApi.get(`/users/user/${loggedInUser}`);
          }
          if (response && response.data) {
            const userData = response.data;
            setUser(userData);
            console.log(userData);

            if (userData.profileImageFileName) {
              console.log(userData.profileImageFileName);
              fetchProfileImage(userData.profileImageFileName);
            }
          } else {
            console.error('Failed to fetch user data');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setUser(null);
      }
    };

    const fetchProfileImage = async (fileName) => {
      try {
        // Use direct fetch to get blob via proxy first
        let res;
        try {
          res = await fetch(`/api/users/user/profileImage/${fileName}?ts=${Date.now()}`);
        } catch (proxyError) {
          res = await fetch(`http://localhost:3001/users/user/profileImage/${fileName}?ts=${Date.now()}`);
        }
        if (res.ok) {
          const imageBlob = await res.blob();
          console.log(imageBlob);
          const imageUrl = URL.createObjectURL(imageBlob);
          console.log(`imageurl`, imageUrl);
          setProfileImage(imageUrl);
        } else {
          console.error('Failed to fetch profile image');
        }
      } catch (error) {
        console.error('Error fetching profile image:', error);
      }
    };

    fetchUser();
  }, [loggedInUser]);

  return { isLoading, user, profileImage };
};

export { useUser };
