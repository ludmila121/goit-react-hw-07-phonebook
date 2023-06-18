import axios from 'axios';
axios.defaults.baseURL = 'https://64846cafee799e321626a956.mockapi.io/contacts';

export const fetch = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};
export const post = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
export const del = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
