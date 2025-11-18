import { PGlite } from '@electric-sql/pglite';

export class DatabaseService {
  private db: PGlite;

  constructor() {
    this.db = new PGlite();
  }

  async init(): Promise<void> {
    await this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `);
  }

  async createUser(name: string, email: string): Promise<{ id: number; name: string; email: string }> {
    const result = await this.db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0] as { id: number; name: string; email: string };
  }

  async getUser(id: number): Promise<{ id: number; name: string; email: string } | null> {
    const result = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0] as { id: number; name: string; email: string } || null;
  }

  async close(): Promise<void> {
    await this.db.close();
  }
}