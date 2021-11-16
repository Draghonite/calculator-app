import Calculator from './Calculator';

let calculator = new Calculator();

beforeEach(() => {
    calculator = new Calculator();
});

it('should instantiate with empty previous and current values', () => {
    expect(calculator).toBeInstanceOf(Calculator);
    expect(calculator.previousValue).toBeDefined();
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.currentValue).toBeDefined();
    expect(calculator.currentValue.value).toBeNull();
});

it('should result in 5 when providing: [2,+,3,=]', () => {
    calculator.append(2);
    expect(calculator.currentValue.value).toEqual('2');
    calculator.setOperator('+');
    expect(calculator.previousValue.operator).toEqual('+');
    expect(calculator.previousValue.display).toEqual('2 +');
    expect(calculator.currentValue.value).toBeNull();
    calculator.append(3);
    expect(calculator.currentValue.value).toEqual('3');
    calculator.setOperator('=');
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.previousValue.operator).toBeNull();
    expect(calculator.previousValue.display).toBeNull();
    expect(calculator.currentValue.value).toEqual('5');
});

it('should result in 2 when providing: [5,-,3,=]', () => {
    calculator.append(5);
    expect(calculator.currentValue.value).toEqual('5');
    calculator.setOperator('-');
    expect(calculator.previousValue.operator).toEqual('-');
    expect(calculator.previousValue.display).toEqual('5 -');
    expect(calculator.currentValue.value).toBeNull();
    calculator.append(3);
    expect(calculator.currentValue.value).toEqual('3');
    calculator.setOperator('=');
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.previousValue.operator).toBeNull();
    expect(calculator.previousValue.display).toBeNull();
    expect(calculator.currentValue.value).toEqual('2');
});

it('should result in 10 when providing: [5,x,2,=]', () => {
    calculator.append(5);
    expect(calculator.currentValue.value).toEqual('5');
    calculator.setOperator('x');
    expect(calculator.previousValue.operator).toEqual('x');
    expect(calculator.previousValue.display).toEqual('5 x');
    expect(calculator.currentValue.value).toBeNull();
    calculator.append(2);
    expect(calculator.currentValue.value).toEqual('2');
    calculator.setOperator('=');
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.previousValue.operator).toBeNull();
    expect(calculator.previousValue.display).toBeNull();
    expect(calculator.currentValue.value).toEqual('10');
});

it('should result in 5 when providing: [10,/,2,=]', () => {
    calculator.append(10);
    expect(calculator.currentValue.value).toEqual('10');
    calculator.setOperator('/');
    expect(calculator.previousValue.operator).toEqual('/');
    expect(calculator.previousValue.display).toEqual('10 /');
    expect(calculator.currentValue.value).toBeNull();
    calculator.append(2);
    expect(calculator.currentValue.value).toEqual('2');
    calculator.setOperator('=');
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.previousValue.operator).toBeNull();
    expect(calculator.previousValue.display).toBeNull();
    expect(calculator.currentValue.value).toEqual('5');
});

it('should clear entire state on "reset"', () => {
    calculator.append(1);
    calculator.setOperator('+');
    calculator.append(5);
    expect(calculator.previousValue.operator).toEqual('+');
    expect(calculator.previousValue.display).toEqual('1 +');
    expect(calculator.currentValue.value).toEqual('5');
    calculator.clear();
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.previousValue.operator).toBeNull();
    expect(calculator.previousValue.display).toBeNull();
    expect(calculator.currentValue.value).toBeNull();
    expect(calculator.currentValue.display).toBeNull();
});

it('should remove 1 character/digit from current value on "delete"', () => {
    calculator.append(1);
    calculator.append(2);
    calculator.append(3);
    expect(calculator.currentValue.value).toEqual('123');
    expect(calculator.currentValue.display).toEqual('123');
    calculator.remove();
    expect(calculator.currentValue.value).toEqual('12');
    expect(calculator.currentValue.display).toEqual('12');
});

it('should result in 123.4 when providing: [1,2,3,.,4,5] on "delete"', () => {
    calculator.append(1);
    calculator.append(2);
    calculator.append(3);
    calculator.append('.');
    calculator.append(4);
    calculator.append(5);
    expect(calculator.currentValue.value).toEqual('123.45');
    expect(calculator.currentValue.display).toEqual('123.45');
    calculator.remove();
    expect(calculator.currentValue.value).toEqual('123.4');
    expect(calculator.currentValue.display).toEqual('123.4');
});

it('should result in 123,456 when providing: [1,2,3,4,5,6]', () => {
    calculator.append(1);
    calculator.append(2);
    calculator.append(3);
    calculator.append(4);
    calculator.append(5);
    calculator.append(6);
    expect(calculator.currentValue.value).toEqual('123456');
    expect(calculator.currentValue.display).toEqual('123,456');
});

it('should provide appropriate getters for previous and current display values', () => {
    calculator.append(1);
    calculator.append(2);
    calculator.append(3);
    calculator.append(4);
    calculator.append(5);
    expect(calculator.previousDisplay).toBeNull();
    expect(calculator.currentDisplay).toEqual('12,345');
    calculator.setOperator('+');
    expect(calculator.previousDisplay).toEqual('12,345 +');
    expect(calculator.currentDisplay).toBeNull();
});

it('should work w/ an intermediate value of 123.', () => {
    calculator.append(1);
    calculator.append(2);
    calculator.append(3);
    calculator.append('.');
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.previousDisplay).toBeNull();
    expect(calculator.currentValue.value).toEqual('123.');
    expect(calculator.currentDisplay).toEqual('123');
    calculator.setOperator('+');
    expect(calculator.previousValue.value).toEqual('123.');
    expect(calculator.previousDisplay).toEqual('123 +');
    expect(calculator.currentValue.value).toBeNull();
    expect(calculator.currentDisplay).toBeNull();
});

it('should allow decimal values when provided .123', () => {
    calculator.append('.');
    calculator.append(1);
    calculator.append(2);
    calculator.append(3);
    expect(calculator.previousValue.value).toBeNull();
    expect(calculator.previousDisplay).toBeNull();
    expect(calculator.currentDisplay).toEqual('0.123');
    expect(calculator.currentValue.value).toEqual('.123');
    calculator.setOperator('+');
    expect(calculator.previousValue.value).toEqual('.123');
    expect(calculator.previousDisplay).toEqual('0.123 +');
    expect(calculator.currentDisplay).toBeNull();
    expect(calculator.currentValue.value).toBeNull();
});
