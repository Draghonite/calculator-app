class CalculatorService {
    static myInstance = null;
    static getInstance() {
        if (CalculatorService.myInstance == null) {
            CalculatorService.myInstance = new CalculatorService();
        }
        return this.myInstance;
    }

    constructor() {
        this.previousValue = { value: null, operator: null, display: null };
        this.currentValue = { value: null, display: null };        
    }

    get previousDisplay() {
        return this.previousValue.display;
    }

    get currentDisplay() {
        return this.currentValue.display;
    }

    updatePreviousDisplay = () => {
        const {value, operator} = this.previousValue;
        const previous = parseFloat(value);
        if (isNaN(previous)) {
            this.previousValue.display = null;
        } else {
            this.previousValue.display = `${previous.toLocaleString()} ${operator}`;
        }
    };

    updateCurrentDisplay = () => {
        const value = parseFloat(this.currentValue.value);
        if (isNaN(value)) {
            this.currentValue.display = null;
        } else {
            this.currentValue.display = value.toLocaleString();
        }
    };

    append = (input) => {
        // only allow 1 decimal place
        if (input === '.' && /\./.test(this.currentValue.value)) { return; }
        let newValue = `${this.currentValue.value || ""}${input.toString()}`;
        this.currentValue.value = newValue;
        this.updateCurrentDisplay();
    };

    setOperator = (input) => {
        if (!this.previousValue.value) {
            // set the new value as previous
            this.previousValue.value = this.currentValue.value;
            this.previousValue.operator = input;
            this.currentValue.value = null;
            this.updatePreviousDisplay();
            this.updateCurrentDisplay();
        } else if (!this.currentValue.value && /^[+\-x/]$/.test(input)) {
            // replace the operator
            this.previousValue.operator = input;
            this.updatePreviousDisplay();
        } else {
            this.calculate();
        }
    };
    
    remove = () => {
        if (this.currentValue.value) {
            this.currentValue.value = this.currentValue.value.toString().slice(0, -1);
            this.updateCurrentDisplay();
        }
    };

    clear = () => {
        this.previousValue = { value: null, operator: null, display: null };
        this.currentValue = { value: null, display: null };
    };
    
    calculate = () => {
        let result = null;
        const previous = parseFloat(this.previousValue.value);
        const current = parseFloat(this.currentValue.value);
        switch(this.previousValue.operator) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case 'x':
                result = previous * current;
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }
        this.clear();
        this.currentValue.value = result.toString();
        this.updatePreviousDisplay();
        this.updateCurrentDisplay();
    };
};

export default CalculatorService;