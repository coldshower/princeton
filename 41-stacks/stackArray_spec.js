describe('4-1: Stack', function () {
  var stack;
  beforeEach(function () {
    stack = new Stack();
  });

  it('is a constructor', function () {
    expect(typeof Stack).toEqual('function');
  });

  it('has instances with methods push, pop, and isEmpty', function () {
    expect(typeof stack.push).toEqual('function');
    expect(typeof stack.pop).toEqual('function');
    expect(typeof stack.isEmpty).toEqual('function');
  });

  it('uses an array to store the stack', function () {
    expect(typeof stack.stack).toEqual('object');
    expect(stack.stack.length).not.toEqual(undefined);
  });

  it('pushes correctly, to the end', function () {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.stack[2]).toEqual(3);
  });

  it('pops correctly, from the end', function () {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
  });

  it('tracks whether the stack is empty', function () {
    expect(stack.isEmpty()).toEqual(true);
    stack.push(1);
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('throws an error on underflow', function () {
    stack.push(1);
    stack.pop();
    expect(stack.pop()).toThrow(new Error('Stack is empty'));
  });
});