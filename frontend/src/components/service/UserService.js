import defaultApi, { directApi } from '@/services/api';

const fetchUsers = async () => {
  try {
    try {
      const response = await defaultApi.get('/users/admin');
      return response.data;
    } catch (proxyError) {
      const response = await directApi.get('/users/admin');
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// const createUser = async (userData) => {
//   console.log('createUser')
//   try {
//     const formData = new FormData();
//     formData.append('userDetails', JSON.stringify(userData));
//     formData.append('profileImage', userData.profileImage);
//     console.log('formData: ',formData);
//     const response = await fetch('http://localhost:3001/users/admin', {
//       method: 'POST',
//       headers: {
//         // No need to set Content-Type header, it will be automatically set by FormData
//         'Content-Type': 'multipart/form-data',
//         // 'Authorization': `Bearer ${localStorage.getItem('token')}`, 
//       },
//       credentials: 'include',
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw error;
//   }
// };

const createUser = async (userData) => {
  console.log('createUser-userData', userData)
  try {
    const formData = new FormData();
    formData.append('user', new Blob([JSON.stringify({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      role: userData.role || 'USER',
    })], { type: 'application/json' }));

    // Append profile image file to form data
    const profileImageFile = userData.profileImage !== null ? userData.profileImage[0] : null;
    formData.append('profileImage', profileImageFile);

    let response;
    try {
      response = await defaultApi.post('/users/admin', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (proxyError) {
      response = await directApi.post('/users/admin', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      return [{ error: error.response.data }]; // Capture server error message
    } else {
      throw error;
    }
  }
};

// const updateUser = async (userId, userData) => {
//   console.log('updateUser');
//   try {
//     const formData = new FormData();
//     formData.append('user', new Blob([JSON.stringify({
//       username: userData.username,
//       email: userData.email,
//       password: userData.password,
//       role: userData.role || 'USER',
//     })], { type: 'application/json' }));
//     formData.append('profileImage', userData.profileImage[0]);

//     const response = await fetch(`http://localhost:3001/users/admin/${userId}`, {
//       method: 'PUT',
//       headers: {
//         // No need to set Content-Type header, it will be automatically set by FormData
//         // 'Content-Type': 'multipart/form-data',
//         // 'Authorization': `Bearer ${localStorage.getItem('token')}`, 
//       },
//       credentials: 'include',
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     console.log('response', response);
//     return await response.json();
//   } catch (error) {
//     console.error('Error updating user:', error);
//     throw error;
//   }
// };


const updateUser = async (userId, userData) => {
  console.log('updateUser');
  try {
    const formData = new FormData();
    formData.append('userDetails', new Blob([JSON.stringify({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      role: userData.role,
    })], { type: 'application/json' }));
    formData.append('profileImage', userData.profileImage[0]);

    let response;
    try {
      response = await defaultApi.put(`/users/admin/${userId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (proxyError) {
      response = await directApi.put(`/users/admin/${userId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data }; // Capture server error message
    } else {
      throw error;
    }
  }
};

const deleteUser = async (userId) => {
  try {
    try {
      await defaultApi.delete(`/users/admin/${userId}`);
    } catch (proxyError) {
      await directApi.delete(`/users/admin/${userId}`);
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data }; // Capture server error message
    } else {
      throw error;
    }
  }
};

export default { fetchUsers, createUser, updateUser, deleteUser };
