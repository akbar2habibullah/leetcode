#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>

class Foo {
public:
    Foo() {
        current = 1;
    }

    void first(std::function<void()> printFirst) {
        std::unique_lock<std::mutex> lock(m);
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        current = 2;
        cv.notify_all();
    }

    void second(std::function<void()> printSecond) {
        std::unique_lock<std::mutex> lock(m);
        while(current != 2) {
            cv.wait(lock);
        }
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        current = 3;
        cv.notify_all();
    }

    void third(std::function<void()> printThird) {
        std::unique_lock<std::mutex> lock(m);
        while(current != 3) {
            cv.wait(lock);
        }
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }

private:
    std::mutex m;
    std::condition_variable cv;
    int current;
};
