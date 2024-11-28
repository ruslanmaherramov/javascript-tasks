import { memoize } from "./memoize";
import { exampleFunction } from "./examples";

function mockConsoleLog() {
  const logs: string[] = [];
  const originalLog = console.log;
  console.log = (message: string) => logs.push(message);
  return { logs, restore: () => (console.log = originalLog) };
}

describe("memoize", () => {
  it("should compute the result on the first call and cache it", () => {
    const { logs, restore } = mockConsoleLog();
    const memoized = memoize(exampleFunction);

    expect(memoized(2)).toBe(4); // Should compute
    expect(logs).toContain("Computing for 2...");
    logs.length = 0; // Clear logs

    expect(memoized(2)).toBe(4); // Should return cached result
    expect(logs).not.toContain("Computing for 2...");
    restore();
  });

  it("should compute the result for new arguments", () => {
    const { logs, restore } = mockConsoleLog();
    const memoized = memoize(exampleFunction);

    expect(memoized(3)).toBe(6); // Should compute
    expect(logs).toContain("Computing for 3...");
    restore();
  });

  it("should handle multiple calls with different arguments", () => {
    const { restore } = mockConsoleLog();
    const memoized = memoize(exampleFunction);

    expect(memoized(4)).toBe(8);
    expect(memoized(5)).toBe(10);
    expect(memoized(4)).toBe(8); // Cached
    restore();
  });

  describe.skip("Cache Limit", () => {
    let spyFn;

    beforeEach(() => {
      spyFn = jest.fn(exampleFunction);
    });

    it("should calculate result for new inputs and cache", () => {
      const memoized = memoize(spyFn, 2);

      expect(memoized(2)).toBe(4);
      expect(spyFn).toHaveBeenCalledTimes(1);

      expect(memoized(3)).toBe(6);
      expect(spyFn).toHaveBeenCalledTimes(2);

      expect(memoized(2)).toBe(4);
      expect(spyFn).toHaveBeenCalledTimes(2);
    });

    test("should use the cache size limit and delete the oldest entry", () => {
      const memoized = memoize(spyFn, 2);

      memoized(1);
      memoized(2);
      memoized(3);

      expect(memoized(1)).toBe(2);
      expect(spyFn).toHaveBeenCalledTimes(4);
    });

    test("should handle cache length of 1 correctly (corner case)", () => {
      // The first call stores the result in the cache.
      // The second call with the same argument retrieves the cached result.
      // The third call with a new argument causes the old entry to be excluded.
      // A fourth call with the original argument recomputes the result since the cache was replaced.

      const memoized = memoize(spyFn, 1);
      memoized(1);
      expect(spyFn).toHaveBeenCalledTimes(1);

      memoized(1);
      expect(spyFn).toHaveBeenCalledTimes(1);

      expect(memoized(2)).toBe(4);
      expect(spyFn).toHaveBeenCalledTimes(2);

      expect(memoized(1)).toBe(2);
      expect(spyFn).toHaveBeenCalledTimes(3);
    });
  });

  describe.skip("Time-to-Live", () => {
    let spyFn;

    beforeEach(() => {
      spyFn = jest.fn(exampleFunction);
    });

    test("should cache result and return from cache before TTL expires", () => {
      const memoized = memoize(spyFn, 3, 5000); // ms

      expect(memoized(2)).toBe(4);
      expect(spyFn).toHaveBeenCalledTimes(1);

      expect(memoized(2)).toBe(4);
      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    test("should excluded expired cache entries after TTL expires", (done) => {
      const memoized = memoize(spyFn, 3, 1000);

      expect(memoized(2)).toBe(4);
      expect(spyFn).toHaveBeenCalledTimes(1);

      setTimeout(() => {
        expect(memoized(2)).toBe(4);
        expect(spyFn).toHaveBeenCalledTimes(2);
        done();
      }, 1100);
    });
  });
});
