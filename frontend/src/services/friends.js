import defaultApi, { directApi } from '@/services/api';

export const friendsAPI = {
  // GET /friends/{username}
  async list(username) {
    try {
      const res = await defaultApi.get(`/friends/${encodeURIComponent(username)}`);
      return res.data;
    } catch (e) {
      const res = await directApi.get(`/friends/${encodeURIComponent(username)}`);
      return res.data;
    }
  },

  // POST /friends/{username}
  async add(username, friend) {
    try {
      const res = await defaultApi.post(`/friends/${encodeURIComponent(username)}`, friend);
      return res.data;
    } catch (e) {
      const res = await directApi.post(`/friends/${encodeURIComponent(username)}`, friend);
      return res.data;
    }
  },

  // POST /friends/{username} (multipart) with optional image
  async addWithImage(username, { name, file }) {
    const form = new FormData();
    form.append('name', name);
    if (file) form.append('profileImage', file);
    try {
      const res = await defaultApi.post(`/friends/${encodeURIComponent(username)}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    } catch (e) {
      const res = await directApi.post(`/friends/${encodeURIComponent(username)}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    }
  },

  // DELETE /friends/{id}
  async remove(id) {
    try {
      await defaultApi.delete(`/friends/${id}`);
    } catch (e) {
      await directApi.delete(`/friends/${id}`);
    }
  },

  // PUT /friends/{id}/balance?delta=...
  async updateBalance(id, delta) {
    try {
      const res = await defaultApi.put(`/friends/${id}/balance`, { delta });
      return res.data;
    } catch (e) {
      const res = await directApi.put(`/friends/${id}/balance`, { delta });
      return res.data;
    }
  }
  ,

  // POST /friends/{id}/profileImage (multipart)
  async updateImage(id, file) {
    const form = new FormData();
    form.append('profileImage', file);
    try {
      const res = await defaultApi.post(`/friends/${id}/profileImage`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    } catch (e) {
      const res = await directApi.post(`/friends/${id}/profileImage`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    }
  }
};
