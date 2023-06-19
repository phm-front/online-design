import { vi } from 'vitest';

const axios = {
  get: vi.fn(() => Promise.resolve('susan'))
}

export default axios