import { describe, it, expect } from 'vitest';

describe('Ping Test', () => {
  it('should respond with pong', () => {
    const res = { json: (data) => data };
    const expected = { message: 'pong' };
    const pingHandler = (req, res) => res.json(expected);

    const result = pingHandler(null, res);
    expect(result).toEqual(expected);
  });
});

