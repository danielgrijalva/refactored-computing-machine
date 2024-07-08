import { sql } from '@vercel/postgres';
import {
  MediaItem
} from '../types';

export async function fetchItems() {
  try {
    const data = await sql<MediaItem>`
      SELECT *
      FROM items`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch items.');
  }
}
