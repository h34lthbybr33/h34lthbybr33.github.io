import { BASE_URL } from './const';

export function buildFullUrl(path?: string): string {
  return path && path.indexOf('http') === 0 ? path : BASE_URL.concat(path || '/');
}
