import { DatabaseService } from './database';

describe('DatabaseService', () => {
  let dbService: DatabaseService;

  beforeEach(async () => {
    dbService = new DatabaseService();
    await dbService.init();
  });

  afterEach(async () => {
    await dbService.close();
  });

  it('should create and retrieve a user', async () => {
    const user = await dbService.createUser('John Doe', 'john@example.com');
    
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
    expect(user.id).toBeDefined();

    const retrievedUser = await dbService.getUser(user.id);
    expect(retrievedUser).toEqual(user);
  });

  it('should return null for non-existent user', async () => {
    const user = await dbService.getUser(999);
    expect(user).toBeNull();
  });

  it('should handle multiple users', async () => {
    const user1 = await dbService.createUser('Alice', 'alice@example.com');
    const user2 = await dbService.createUser('Bob', 'bob@example.com');

    expect(user1.id).not.toBe(user2.id);
    
    const retrievedUser1 = await dbService.getUser(user1.id);
    const retrievedUser2 = await dbService.getUser(user2.id);

    expect(retrievedUser1?.name).toBe('Alice');
    expect(retrievedUser2?.name).toBe('Bob');
  });
});