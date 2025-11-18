import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost/api/users', () => {
    return HttpResponse.json([{ id: 1, name: 'John Doe' }]);
  }),
  http.get('http://localhost/api/users/:id', ({ params }) => {
    return HttpResponse.json({ id: Number(params.id), name: 'John Doe' });
  }),
];