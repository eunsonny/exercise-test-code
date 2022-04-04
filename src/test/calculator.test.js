const Calculator = require('../calculator.js');

describe('Calculator', () => {
  // 각 각의 테스트는 독립적으로 동작해야 하기 때문에 beforeEach를 이용해, 각 테스트 실행 전 마다
  // calculator를 생성해 준다.
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  })

    it('inits with 0', () => {
      expect(cal.value).toBe(0);
    });

    it('sets', () => {
      cal.set(9);
      expect(cal.value).toBe(9);
    })

    it('clear', () => {
      cal.set(9);
      cal.clear();
      expect(cal.value).toBe(0);
    })

    it('adds', () => {
      cal.set(1);
      cal.add(2);

      expect(cal.value).toBe(3);
    });

    it('subtracts', () => {
      cal.subtract(1);

      expect(cal.value).toBe(-1);
    });

    it('multiplies', () => {
      cal.set(5);
      cal.multiply(4);

      expect(cal.value).toBe(20);
    });

    describe('divides', () => {
      it('0 / 0 === NaN', () => {
        cal.divide(0);
        expect(cal.value).toBe(NaN);
      });

      it('1 / 0 === Infinity', () => {
        cal.set(1)
        cal.divide(0);
        expect(cal.value).toBe(Infinity);
      });

      it('4 / 4 === 1', () => {
        cal.set(4)
        cal.divide(4);
        expect(cal.value).toBe(1);
      });
    });
});
