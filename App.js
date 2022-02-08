import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const App = () => {
  //Caching/Memoize Function start

  function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
      var argCache = JSON.stringify(args);
      if (!res[argCache]) res[argCache] = fn.call(context || this, ...args);

      return res[argCache];
    };
  }

  const clumpsySquare = (a, b) => {
    for (let i = 0; i < 1000; i++) {
      return a * b;
    }
  };

  //Caching/Memoize Function end

  // infinite currying start
  function infiniteCurryingA(a) {
    return function infiniteCurryingB(b) {
      if (b) return infiniteCurryingA(a + b);
      return a;
    };
  }

  const obj = {
    total: 0,
    add(a) {
      this.total += a;
      return this;
    },
    subtract(a) {
      this.total -= a;
      return this;
    },
    multiply(a) {
      this.total *= a;
      return this;
    },
  };

  //infinite currying end

  useEffect(() => {
    // var a = infiniteCurryingA(6)(4)(5)(3)();
    // console.log(a, '-> infinite currying');

    // const memoizeRes = myMemoize(clumpsySquare);
    // console.time('first time start: ');
    // console.log(memoizeRes(5656, 5757));
    // console.timeEnd('first time end');
    // console.log('second time start:');
    // console.log(memoizeRes(5656, 5757));
    // console.timeEnd('second time end');

    // Event Loop Starts
    // console.log('A');
    // setTimeout(() => {
    //   console.log('B');
    // }, 0);
    // Promise.resolve(() => console.log('C')).then(res => res());
    // console.log('D');
    // Event Loop Ends

    // implement the following code
    const res = obj.add(4).multiply(5).subtract(6).add(5);
    console.log(res.total);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sampleText}>Hello World!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sampleText: {
    fontSize: 18,
    color: 'dodgerblue',
    fontWeight: 'bold',
  },
});
