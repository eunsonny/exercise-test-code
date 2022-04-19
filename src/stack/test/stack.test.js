const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is create empty", () => {
    expect(stack.size()).toBe(0);
  });

  if (
    ("allows to push item",
    () => {
      stack.push("banana");
      expect(stack.size()).toBe(1);
    })
  );

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("stack is empty");
    });

    it('returns the last pushed item and remove', () => {
      stack.push('banana');
      stack.push('apple');

      expect(stack.pop()).toBe('apple');
      expect(stack.size()).toBe(1);
    })
  });

  describe('peek', () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("stack is empty");
    });

    it('returns the last pushed item but keeps it in tge stack', () => {
      stack.push('banana');
      stack.push('apple');

      expect(stack.peek()).toBe('apple');
      expect(stack.size()).toBe(2);
    })
  });


});
