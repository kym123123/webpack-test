import axios, { AxiosStatic, AxiosResponse } from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const axiosResponse: AxiosResponse = {
  data: { name: 'min', age: 29 },
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
};

describe('axios mocking', () => {
  it('should work with axios mock', () => {
    mockedAxios.get.mockResolvedValue(axiosResponse as any);

    expect(axios.get).resolves.toBe(axiosResponse);
  });
});

it('returns undefined by default', () => {
  // const mock = jest.fn(parameter => parameter); // mock 생성시 jest.fn() 내부에 전달한 함수가 없으므로 undefined 반환, mock 에 전달된 인자는 ject.fn의 콜백함수의 인자로 전달됨.
  const mock = jest.fn();

  let result = mock('foo');
  expect(result).toBeUndefined(); // result가 undefined임을 예상
  expect(mock).toHaveBeenCalled(); // mock 함수가 호출될것을 예상
  expect(mock).toHaveBeenCalledTimes(1); // mock 함수가 1번 호출될 것임을 예상
  expect(mock).toHaveBeenCalledWith('foo'); // 'foo' 인자와 함께 함수가 호출될 것임을 예상
});

it('mock implementation', () => {
  const mock = jest.fn().mockImplementation(() => 'bar'); // jest.fn()내부의 콜백함수와 마찬가지로 mockImplementation() 내부에 호출시 전달한 인자 전달 됨.

  expect(mock('foo')).toBe('bar');
  expect(mock).toHaveBeenCalledWith('foo');
  expect(mock).toHaveBeenCalledTimes(1);
});

it('mock implemented one time', () => {
  const mock = jest.fn().mockImplementationOnce(() => 'bar'); // 한번만 실행되는 mock 실행함수. 2번쨰 호출부터는 적용 x

  expect(mock('foo')).toBe('bar');
  expect(mock).toHaveBeenCalledWith('foo');

  expect(mock('baz')).toBe(undefined);
  expect(mock).toHaveBeenCalledWith('baz');
});

it('mock return value', () => {
  const mock = jest.fn();
  mock.mockReturnValue('bar'); // mock은 호출시 bar를 반환
  expect(mock('foo')).toBe('bar');
  expect(mock).toHaveBeenLastCalledWith('foo');
});

it('mocks promise resolution', () => {
  const mock = jest.fn();
  mock.mockResolvedValue('bar');

  expect(mock('foo')).resolves.toBe('bar');
  expect(mock).toHaveBeenCalledWith('foo');
});

// mock 함수를 사용는 일반적 방법 : test하려는 함수로 arguments를 직접 전달

// @ts-ignore
const doAdd = (a, b, callback) => {
  callback(a + b);
};

it('calls callback with arguments added', () => {
  const mockCallback = jest.fn();
  doAdd(1, 2, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(3);
});

// ========= jest.mock ===========
// 실제로 존재하는 모듈, 함수를 mocking 하기
// jest.fn = 함수를 mocking, jest.mock = 모듈을 mocking, jest.spyOn = spy 또는 함수를 mocking
import * as app from '@utils/app';
import * as math from '@utils/math';

// jest.mock('@utils/math'); // 모듈의 경로를 넣어주면, export 되는 모든 함수들을 mocking 해준다.

// it('calls math.add', () => {
//   app.doAdd(1, 2);
//   expect(math.add).toHaveBeenCalledWith(1, 2);

//   app.doSubtract(1, 2);
//   expect(math.subtract).toHaveBeenCalledWith(1, 2);
// });

// ======== jest.spyOn ========
// 메소드 실행의 관찰 가능, 기존의 구현도 보존 가능
// 구현을 mocking하고 원본 복원도가능
it('calls math. add', () => {
  const addMock = jest.spyOn(math, 'add'); // math모듈의 add 함수 spyOn

  addMock.mockImplementation(() => 1);
  expect(app.doAdd(1, 2)).toBe(1);

  addMock.mockRestore(); // mocking 을 원본으로 복원
  expect(app.doAdd(1, 2)).toEqual(3);
});
