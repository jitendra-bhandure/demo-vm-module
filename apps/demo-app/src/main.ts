export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  const response = await fetch(`http://localhost/api/users/${id}`);
  return response.json();
}

export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log(greet('World'));