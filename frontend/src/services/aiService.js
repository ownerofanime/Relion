import request from './api';

export const generateOutreach = (data) => request('/ai/outreach', { method: 'POST', body: data });
export const getAdvice = (situation) => request('/ai/advice', { method: 'POST', body: { situation } });
