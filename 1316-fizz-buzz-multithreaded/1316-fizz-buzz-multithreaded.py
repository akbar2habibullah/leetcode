import threading

class FizzBuzz:
    def __init__(self, n: int):
        self.n = n
        self.counter = 1
        self.cv = threading.Condition()

    # printFizz() outputs "fizz"
    def fizz(self, printFizz: 'Callable[[], None]') -> None:
        while self.counter <= self.n:
            with self.cv:
                while self.counter <= self.n and (self.counter % 3 != 0 or self.counter % 5 == 0):
                    self.cv.wait()
                if self.counter <= self.n:
                    printFizz()
                self.counter += 1
                self.cv.notify_all()

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
        while self.counter <= self.n:
            with self.cv:
                while self.counter <= self.n and (self.counter % 5 != 0 or self.counter % 3 == 0):
                    self.cv.wait()
                if self.counter <= self.n:
                    printBuzz()
                self.counter += 1
                self.cv.notify_all()

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        while self.counter <= self.n:
            with self.cv:
                while self.counter <= self.n and (self.counter % 15 != 0):
                    self.cv.wait()
                if self.counter <= self.n:
                    printFizzBuzz()
                self.counter += 1
                self.cv.notify_all()

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber: 'Callable[[int], None]') -> None:
        while self.counter <= self.n:
            with self.cv:
                while self.counter <= self.n and (self.counter % 3 == 0 or self.counter % 5 == 0):
                    self.cv.wait()
                if self.counter <= self.n:
                    printNumber(self.counter)
                self.counter += 1
                self.cv.notify_all()