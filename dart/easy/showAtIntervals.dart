import 'dart:async';

class ShowAtIntervals {
  static void result(int interval) {
    int counter = 0;
    Timer.periodic(const Duration(seconds: 1), (timer) {
      if (counter < 10) {
        print(timer.tick);
        counter++;
      } else {
        timer.cancel();
      }
    });
  }
}
