describe('4-3: Queue', function () {
  var queue;

  beforeEach(function () {
    queue = new QueueLL();
  });

  it('is a constructor function', function () {
    expect(typeof QueueLL).toEqual('function');
  });

  it('has instances with the methods "enqueue" and "dequeue"', function () {
    expect(typeof queue.enqueue).toEqual('function');
    expect(typeof queue.dequeue).toEqual('function');
  });

  it('enqueues correctly, to the end', function () {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.queue.first.value).toEqual('first');
    expect(queue.queue.last.value).toEqual('third');
  });

  it('dequeues correctly, from the beginning', function () {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.dequeue().value).toEqual('first');
    expect(queue.dequeue().value).toEqual('second');
  });

  it('handles underflow', function () {
    expect(queue.dequeue()).toEqual(null);
  }); 
});
