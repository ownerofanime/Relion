import request from './api';

export const getReminders = () => request('/reminders');
export const createReminder = (data) => request('/reminders', { method: 'POST', body: data });
export const markReminderDone = (id) => request(`/reminders/${id}/done`, { method: 'PATCH' });
export const deleteReminder = (id) => request(`/reminders/${id}`, { method: 'DELETE' });
