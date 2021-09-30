it('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

function forEach(items: any, callback: any) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe('test null', () => {
  let a = 1;
  beforeAll(() => {
    a = 3;
  });

  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });

  it('throws error', () => {
    expect(compileAndroidCode).toThrow(Error);
  });

  it('contains beer', () => {
    const shoppingList = ['diaper', 'kleenex', 'beer'];

    expect(shoppingList).toContain('diaper');
    expect(shoppingList).toContain('beer');
  });
});

describe('mock', () => {
  const mockCallback = jest.fn(x => x + 42);
  forEach([0, 1], mockCallback); // 2 번 호출 되도록 요소 2개인 배열 전달

  it('calls mock function', () => {
    expect(mockCallback.mock.calls.length).toBe(2); // 모의 함수가 두 번 호출 됨

    expect(mockCallback.mock.calls[0][0]).toBe(0); // 함수의 첫 호출의 첫번째 인자는 0

    expect(mockCallback.mock.calls[1][0]).toBe(1); // 함수의 두 번째 호출의 첫번째 인자는 1

    expect(mockCallback.mock.results[0].value).toBe(42); // 함수의 첫번째 호출의 반환 값은 42
  });
});
