import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let loggerSpy: any;
  let calculator: CalculatorService;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('Logger Service', ["log"]);
    calculator = new CalculatorService(loggerSpy);
  });

  it('should add two numbers', () => {
    const result = calculator.add(2, 2);

    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(4, 2);

    expect(result).toBe(2);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
