import request from './api';

export const getConnections = () => request('/connections');
export const getConnection = (id) => request(`/connections/${id}`);
export const createConnection = (data) => request('/connections', { method: 'POST', body: data });
export const updateConnection = (id, data) => request(`/connections/${id}`, { method: 'PUT', body: data });
export const deleteConnection = (id) => request(`/connections/${id}`, { method: 'DELETE' });
