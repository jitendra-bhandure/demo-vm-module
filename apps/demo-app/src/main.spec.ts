import { greet, fetchUser, delay } from './main';

describe('App Functions', () => {
  let testContext: { userId: number; userName: string };

  beforeEach(async () => {
    await delay(10);
    const response = await fetch('http://localhost/api/users');
    const users = await response.json();
    testContext = {
      userId: users[0].id,
      userName: users[0].name
    };
  });

  it('should return greeting message', () => {
    expect(greet('Test')).toBe('Hello, Test!');
  });

  it('should mock API call', async () => {
    const response = await fetch('http://localhost/api/users');
    const users = await response.json();
    expect(users).toEqual([{ id: 1, name: 'John Doe' }]);
  });

  it('should fetch user with async context', async () => {
    const user = await fetchUser(testContext.userId);
    expect(user.id).toBe(testContext.userId);
    expect(user.name).toBe(testContext.userName);
  });

  it('should handle async delay', async () => {
    const start = Date.now();
    await delay(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });
});